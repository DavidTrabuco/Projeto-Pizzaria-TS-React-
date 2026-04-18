import { useState, useEffect } from 'react';

export default function useNavbar() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
    const fecharMenu = () => setMenuAberto(false);

    useEffect(() => {
        const token = localStorage.getItem('token_usuario');
        if (token) {
            const payload = JSON.parse(decodeURIComponent(escape(atob(token.split('.')[1])))) as { nome: string };
            setNomeUsuario(payload.nome.split(' ')[0]);
        }
    }, []);

    function handleSair() {
        localStorage.removeItem('token_usuario');
        setNomeUsuario(null);
        window.location.href = '/';
    }

    return {
        menuAberto,
        setMenuAberto,
        loginOpen,
        setLoginOpen,
        nomeUsuario,
        setNomeUsuario,
        fecharMenu,
        handleSair,
    };
}
