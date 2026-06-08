import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate } from 'react-router';

export default function useAdminLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);
    const navegar = useNavigate();

    function validar(email: string, senha: string): string | null {
        if (!email) return 'O email é obrigatório.';
        if (!email.includes('@') || !email.includes('.')) return 'Digite um email válido.';
        if (!senha) return 'A senha é obrigatória.';
        if (senha.length < 6) return 'A senha precisa ter no mínimo 6 caracteres.';
        return null;
    }

    function handleSair() {
        localStorage.removeItem('token_admin');
        navegar('/admin/login');
    }

    useEffect(() => {
        const token = localStorage.getItem('token_admin');
        if (!token) {
            navegar('/admin/login');
        }
    }, []);

    async function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const erroValidacao = validar(email, senha);
        if (erroValidacao) {
            setErro(erroValidacao);
            return;
        }

        setErro('');
        setCarregando(true);

        try {
            const resposta = await fetch(`${import.meta.env.VITE_API_URL}/admin/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha })
            });

            if (resposta.status >= 500) { navegar('/erro-500'); return; }
            if (resposta.status === 404 || resposta.status === 400) { navegar('/erro-400'); return; }

            const dados = await resposta.json();

            if (dados.token) {
                localStorage.setItem('token_admin', dados.token);
                navegar('/admin');
            } else {
                setErro(dados.mensagem || 'Email ou senha incorretos.');
            }
        } catch {
            navegar('/erro-500');
        } finally {
            setCarregando(false);
        }
    }

    return { email, setEmail, senha, setSenha, erro, carregando, handleLogin, handleSair };
}
