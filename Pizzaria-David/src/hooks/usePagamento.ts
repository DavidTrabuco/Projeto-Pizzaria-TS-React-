import { useState, type FormEvent } from 'react';

export interface DadosPagamento {
    metodo: string;
    titular: string;
}

export default function usePagamento(
    onConfirmar: (dados: DadosPagamento) => void,
    pedidoId?: number,
    total?: number
) {
    const [cardHolder, setCardHolder] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [erros, setErros] = useState<Record<string, string>>({});

    function validarPagamento(): Record<string, string> {
        const novosErros: Record<string, string> = {};

        if (!cardHolder.trim()) {
            novosErros.cardHolder = 'Nome do titular é obrigatório';
        }

        const numeroLimpo = cardNumber.replace(/\s/g, '');
        if (!numeroLimpo || numeroLimpo.length < 13 || numeroLimpo.length > 19) {
            novosErros.cardNumber = 'Número do cartão inválido';
        }

        if (!expiryDate.trim() || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
            novosErros.expiryDate = 'Data de validade inválida (MM/AA)';
        }

        if (!cvv.trim() || cvv.length < 3) {
            novosErros.cvv = 'CVV inválido';
        }

        return novosErros;
    }
    function formatarCartao(valor: string): string {
        const limpo = valor.replace(/\D/g, '').slice(0, 16);
        return limpo.replace(/(.{4})/g, '$1 ').trim();
    }

    function formatarValidade(valor: string): string {
        const limpo = valor.replace(/\D/g, '').slice(0, 4);
        if (limpo.length >= 3) return limpo.slice(0, 2) + '/' + limpo.slice(2);
        return limpo;
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const novosErros = validarPagamento();

        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros);
            return;
        }

        setErros({});
        onConfirmar({
            metodo: 'cartao_credito',
            titular: cardHolder,
        });
        try {
            const resposta = await fetch('http://localhost:3000/pagamentos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    pedidoId: pedidoId,
                    metodo: 'cartao_credito',
                    titular: cardHolder,
                    total: total,
                }),
            });
            const dados = await resposta.json();
            console.log(dados);
        } catch (erro) {
            console.log('Erro ao processar ', erro);
        }
    }

    

    return {
        cardHolder,
        setCardHolder,
        cardNumber,
        setCardNumber,
        expiryDate,
        setExpiryDate,
        cvv,
        setCvv,
        erros,
        setErros,
        validarPagamento,
        handleSubmit,
        formatarCartao,
        formatarValidade,
    };
}
