import { useState, useRef, type FormEvent } from 'react';

export function useReservation() {
    const [nome, setNome] = useState('');
    const [pessoas, setPessoas] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');
    const [contato, setContato] = useState('');
    const [erros, setErros] = useState<Record<string, string>>({});
    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [erroLogar, setErroLogar] = useState('');
    const dataRef = useRef<HTMLInputElement>(null);
    const horarioRef = useRef<HTMLInputElement>(null);

    function validar(): Record<string, string> {
        const novosErros: Record<string, string> = {};

        if (!nome.trim()) {
            novosErros.nome = 'Nome é obrigatório';
        } else if (/\d/.test(nome)) {
            novosErros.nome = 'Nome não pode conter números';
        }

        if (!pessoas) {
            novosErros.pessoas = 'Quantidade de pessoas é obrigatória';
        } else if (Number(pessoas) < 1) {
            novosErros.pessoas = 'Precisa ter pelo menos 1 pessoa';
        } else if (Number(pessoas) > 20) {
            novosErros.pessoas = 'Máximo de 20 pessoas por reserva';
        }

        if (!data) {
            novosErros.data = 'Data é obrigatória';
        } else {
            const hoje = new Date();
            hoje.setHours(0, 0, 0, 0);
            const dataSelecionada = new Date(data + 'T00:00:00');
            if (dataSelecionada < hoje) {
                novosErros.data = 'A data não pode ser no passado';
            }
        }

        if (!horario) {
            novosErros.horario = 'Horário é obrigatório';
        } else {
            const [hora, minuto] = horario.split(':').map(Number);
            if (hora < 18 || hora >= 23 || (hora === 22 && minuto > 59)) {
                novosErros.horario = 'Horário de funcionamento: 18h às 23h';
            }
            if (data) {
                const agendado = new Date(`${data}T${horario}`);
                if (agendado < new Date()) {
                    novosErros.horario = 'O horário não pode ser no passado';
                }
            }
        }

        if (!contato.trim()) {
            novosErros.contato = 'Contato é obrigatório';
        } else {
            const apenasDigitos = contato.replace(/\D/g, '');
            if (apenasDigitos.length < 10) {
                novosErros.contato = 'Telefone precisa ter pelo menos 10 dígitos';
            } else if (apenasDigitos.length > 11) {
                novosErros.contato = 'Telefone inválido';
            }
        }

        return novosErros;
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const token = localStorage.getItem('token_usuario');
        if (!token) {
            setErroLogar('Você precisa estar logado para fazer uma reserva!');
            setTimeout(() => {
                window.location.href = '/login';
            }, 3000);
            return;
        }

        const novosErros = validar();
        const chavesErros = Object.keys(novosErros);
        if (chavesErros.length > 0) {
            setErros(novosErros);
            return;
        }

        setErros({});
        setEnviando(true);

        try {
            const resposta = await fetch('http://localhost:3000/reservas',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        nome: nome,
                        pessoas: Number(pessoas),
                        dataHorario: `${data}T${horario}`,
                        contato: contato,

                    }),
                });
            const dados = await resposta.json();

            console.log('Reserva criada ', dados);
            setNome('');
            setPessoas('');
            setData('');
            setHorario('');
            setContato('');
            setEnviado(true);

        } catch (erro) {
            console.log('Erro ao fazer a reserva ', erro)

        } finally {
            setEnviando(false)
        }
    }


    return { nome, setNome, pessoas, setPessoas, data, setData, horario, setHorario, contato, setContato, erros, enviando, enviado, dataRef, horarioRef, handleSubmit, erroLogar, setErroLogar };
}
