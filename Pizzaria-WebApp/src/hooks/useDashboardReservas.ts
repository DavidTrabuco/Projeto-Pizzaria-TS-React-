import { useState, useMemo, useEffect, type FormEvent } from 'react';

// Interface que bate com o schema real do banco (MongoDB)
export interface Reserva {
    _id: string;
    nome: string;
    dataHorario: string;  // "2026-05-23T20:00:00.000Z" — campo único do banco
    pessoas: number;
    contato: string;
    status?: 'pendente' | 'confirmada' | 'cancelada'; // gerenciado localmente
    mesa?: number;                                     // gerenciado localmente
}

// Extrai "DD/MM" de dataHorario
export function extrairData(dataHorario: string) {
    const d = new Date(dataHorario);
    const dia = String(d.getDate()).padStart(2, '0');
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    return `${dia}/${mes}`;
}

// Extrai "HHh" ou "HHhMM" de dataHorario
export function extrairHorario(dataHorario: string) {
    const d = new Date(dataHorario);
    const h = String(d.getHours()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    return m === '00' ? `${h}h` : `${h}h${m}`;
}

export function useDashboardReservas() {

    const [nome, setNome] = useState('');
    const [pessoas, setPessoas] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');
    const [contato, setContato] = useState('');
    const [erros, setErros] = useState<Record<string, string>>({});
    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [mostrarDetalhes, setMostrarDetalhes] = useState('');


    const [reservas, setReservas] = useState<Reserva[]>([]);
    const [carregando, setCarregando] = useState(false);
    const [erroApi, setErroApi] = useState('');
    const [modalAberto, setModalAberto] = useState(false);
    const [mesSelecionado, setMesSelecionado] = useState(() => {
        const hoje = new Date();
        return new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    });


    function validar(): Record<string, string> {
        const e: Record<string, string> = {};
        if (!nome.trim()) e.nome = 'Nome é obrigatório';
        else if (/\d/.test(nome)) e.nome = 'Nome não pode conter números';
        if (!pessoas) e.pessoas = 'Quantidade de pessoas é obrigatória';
        else if (Number(pessoas) < 1) e.pessoas = 'Precisa ter pelo menos 1 pessoa';
        else if (Number(pessoas) > 20) e.pessoas = 'Máximo de 20 pessoas por reserva';
        if (!data) e.data = 'Data é obrigatória';
        else if (new Date(data) < new Date(new Date().toDateString())) e.data = 'Data não pode ser no passado';
        if (!horario) e.horario = 'Horário é obrigatório';
        else {
            const [hora] = horario.split(':').map(Number);
            if (hora < 18 || hora >= 23) e.horario = 'Horário de funcionamento: 18h às 23h';
        }
        if (!contato.trim()) {
            e.contato = 'Contato é obrigatório';
        } else {
            const digits = contato.replace(/\D/g, '');
            if (digits.length < 10) e.contato = 'Telefone precisa ter pelo menos 10 dígitos';
            if (digits.length > 11) e.contato = 'Telefone inválido';
        }

        return e;
    }
    //-----Todos os FETCHS AQUI  -------
    async function buscarReservas() {
        setCarregando(true);
        setErroApi('');
        try {
            const token = localStorage.getItem('token_admin');
            const res = await fetch(`${import.meta.env.VITE_API_URL}/reservas`, {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            const dados = await res.json();
            // normaliza: adiciona status e mesa padrão se o banco não tiver
            const normalizado: Reserva[] = (Array.isArray(dados) ? dados : []).map((r: Reserva) => ({
                ...r,
                status: r.status ?? 'pendente',
                mesa: r.mesa ?? Math.ceil(Math.random() * 8),
            }));
            setReservas(normalizado);
        } catch (err) {
            setErroApi(err instanceof Error ? err.message : 'Erro ao buscar reservas.');
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => { buscarReservas(); }, []);


    async function atualizarStatus(id: string, status: Reserva['status']) {
        setReservas(prev => prev.map(r => r._id === id ? { ...r, status } : r));
        try {
            const token = localStorage.getItem('token_admin');
            await fetch(`${import.meta.env.VITE_API_URL}/reservas/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ status }),
            });
        } catch {
            setReservas(prev => prev.map(r => r._id === id ? { ...r, status: 'pendente' } : r));
        }
    }

    const confirmarReserva = (id: string) => atualizarStatus(id, 'confirmada');
    const recusarReserva = (id: string) => atualizarStatus(id, 'cancelada');
    const cancelarReserva = (id: string) => atualizarStatus(id, 'cancelada');


    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const novosErros = validar();
        if (Object.keys(novosErros).length > 0) { setErros(novosErros); return; }

        setEnviando(true);
        try {
            const token = localStorage.getItem('token_admin');
            const dataHorario = `${data}T${horario}:00`;
            const res = await fetch(`${import.meta.env.VITE_API_URL}/reservas`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ nome, pessoas: Number(pessoas), dataHorario, contato }),
            });
            if (!res.ok) throw new Error('Erro ao criar reserva');
            const nova: Reserva = await res.json();
            setReservas(prev => [...prev, { ...nova, status: 'pendente', mesa: Math.ceil(Math.random() * 8) }]);
            setEnviado(true);
        } catch {
            setErros({ geral: 'Não foi possível criar a reserva. Verifique a conexão com a API.' });
        } finally {
            setEnviando(false);
            fecharModal();
        }
    }



    // ── calendário ────────────────────────────────────────────────────────
    const mesAnterior = () => setMesSelecionado(d => new Date(d.getFullYear(), d.getMonth() - 1, 1));
    const proximoMes = () => setMesSelecionado(d => new Date(d.getFullYear(), d.getMonth() + 1, 1));

    const primeiroDia = new Date(mesSelecionado.getFullYear(), mesSelecionado.getMonth(), 1).getDay();
    const diasNoMes = new Date(mesSelecionado.getFullYear(), mesSelecionado.getMonth() + 1, 0).getDate();

    const reservasPorDia = useMemo(() => {
        const mapa: Record<number, number> = {};
        reservas.forEach(r => {
            if (!r.dataHorario) return;
            const d = new Date(r.dataHorario);
            if (d.getFullYear() === mesSelecionado.getFullYear() && d.getMonth() === mesSelecionado.getMonth()) {
                const dia = d.getDate();
                mapa[dia] = (mapa[dia] || 0) + 1;
            }
        });
        return mapa;
    }, [reservas, mesSelecionado]);

    const reservasMes = useMemo(() => {
        return reservas
            .filter(r => {
                if (!r.dataHorario) return false;
                const d = new Date(r.dataHorario);
                return d.getFullYear() === mesSelecionado.getFullYear() && d.getMonth() === mesSelecionado.getMonth();
            })
            .sort((a, b) => new Date(a.dataHorario).getTime() - new Date(b.dataHorario).getTime());
    }, [reservas, mesSelecionado]);



    // ── modal ─────────────────────────────────────────────────────────────
    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => {
        setModalAberto(false);
        setNome(''); setPessoas(''); setData(''); setHorario(''); setContato('');
        setErros({});
    };

    const modalDetalhes = (reserva: Reserva) => {
        setMostrarDetalhes(`Detalhes da Reserva:\n\nNome: ${reserva.nome}\nPessoas: ${reserva.pessoas}\nData/Horário: ${new Date(reserva.dataHorario).toLocaleString()}\nContato: ${reserva.contato}\nStatus: ${reserva.status}\nMesa: ${reserva.mesa}`);
    }

    return {
        nome, setNome, pessoas, setPessoas, data, setData,
        horario, setHorario, contato, setContato,
        erros, enviando, enviado, handleSubmit,
        mesSelecionado, mesAnterior, proximoMes,
        primeiroDia, diasNoMes, reservasPorDia,
        reservasMes, confirmarReserva, recusarReserva, cancelarReserva,
        carregando, erroApi, buscarReservas,
        modalAberto, modalDetalhes, abrirModal, fecharModal, mostrarDetalhes, setMostrarDetalhes
    };
}
