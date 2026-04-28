import { useState, useMemo, type FormEvent } from 'react';

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
    const [pedidoConfirmado, setPedidoConfirmado] = useState<PedidoConfirmado | null>(null);

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

    async function handlePagamento(dadosPagamento: DadosPagamento) {
        setEnviando(true);

        try {
            const resposta = await fetch('http://localhost:3000/pedidos', {
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
            const dados = await resposta.json();

            setPedidoConfirmado({ ...dados, status: 'confirmado' });
        } catch (erro) {
            console.log('Erro ao confirmar pagamento:', erro);
            alert('Erro ao processar pagamento. Tente novamente!');
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
        pedidoConfirmado,
    };
}
