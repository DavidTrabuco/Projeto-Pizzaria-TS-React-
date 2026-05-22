import { useState, useMemo, type FormEvent } from 'react';
import { usePedidoStore } from '../store/usePedidoStore';

export interface ItemPedido {
    nome: string;
    preco: number;
}

export interface PedidoPendente {
    nomeCliente: string;
    itens: string[];
    itensDetalhes: ItemPedido[];
    total: number;
    status: string;
}

export interface PedidoConfirmado {
    id: number;
    nomeCliente: string;
    itens: string[];
    total: number;
    status: string;
}

export interface DadosPagamento {
    metodo: string;
    titular: string;
}

export function usePedidos() {
    const [nomeCliente, setNomeCliente] = useState('');
    const [itens, setItens] = useState<ItemPedido[]>([]);
    const [erros, setErros] = useState<Record<string, string>>({});
    const [enviando, setEnviando] = useState(false);
    const [pedidoPendente, setPedidoPendente] = useState<PedidoPendente | null>(null);

    // pedidoConfirmado agora vive no Zustand (persiste no localStorage)
    const { pedidoConfirmado, setPedidoConfirmado, limparPedido } = usePedidoStore();

    const totalCalculado = useMemo(
        () => itens.reduce((acc, item) => acc + item.preco, 0),
        [itens]
    );

    function adicionarItem(nome: string, preco: number) {
        setItens([...itens, { nome, preco }]);
    }

    function removerItem(index: number) {
        setItens(itens.filter((_, i) => i !== index));
    }

    function validar(): Record<string, string> {
        const novosErros: Record<string, string> = {};

        if (!nomeCliente.trim()) {
            novosErros.nomeCliente = 'Nome é obrigatório';
        } else if (/\d/.test(nomeCliente)) {
            novosErros.nomeCliente = 'Nome não pode conter números';
        }

        if (itens.length === 0) {
            novosErros.itens = 'Selecione pelo menos um item do menu';
        }

        return novosErros;
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const novosErros = validar();

        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros);
            return;
        }

        setErros({});
        setPedidoPendente({
            nomeCliente,
            itens: itens.map((i) => i.nome),
            itensDetalhes: itens,
            total: totalCalculado,
            status: 'pendente',
        });
    }

    // Fallback: usa os dados que já temos localmente quando a API falha
    function confirmarComDadosLocais() {
        setPedidoConfirmado({
            id: Date.now(),
            nomeCliente: pedidoPendente!.nomeCliente,
            itens: pedidoPendente!.itens,
            total: pedidoPendente!.total,
            status: 'confirmado',
        });
    }

    async function handlePagamento(dadosPagamento: DadosPagamento) {
        setEnviando(true);

        try {
            const resposta = await fetch(`${import.meta.env.VITE_API_URL}/pedidos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nomeCliente: pedidoPendente?.nomeCliente,
                    itens: pedidoPendente?.itens,
                    total: pedidoPendente?.total,
                    status: 'confirmado',
                    pagamento: dadosPagamento,
                }),
            });

            if (resposta.ok) {
                // API funcionou: usa os dados reais do servidor
                const dados = await resposta.json();
                setPedidoConfirmado({ ...dados, status: 'confirmado' });
            } else {
                // API retornou erro (404, 500, etc): usa dados locais
                confirmarComDadosLocais();
            }
        } catch {
            // Sem conexão / API offline: usa dados locais
            confirmarComDadosLocais();
        } finally {
            setEnviando(false);
        }
    }

    function cancelarPagamento() {
        setPedidoPendente(null);
    }

    return {
        nomeCliente, setNomeCliente,
        itens, adicionarItem, removerItem,
        totalCalculado,
        erros, enviando,
        handleSubmit,
        pedidoPendente, handlePagamento, cancelarPagamento,
        pedidoConfirmado, limparPedido,
    };
}
