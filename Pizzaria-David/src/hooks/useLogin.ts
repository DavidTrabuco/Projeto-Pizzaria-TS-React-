import { useState, type FormEvent, type MouseEvent } from 'react';

function validar(email: string, senha: string): string | null {
    if (!email) return 'O email é obrigatório.';
    if (!email.includes('@') || !email.includes('.')) return 'Digite um email válido.';
    if (!senha) return 'A senha é obrigatória.';
    if (senha.length < 6) return 'A senha precisa ter no mínimo 6 caracteres.';
    return null;
}

export default function useUsuarioLogin(onClose?: () => void) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose?.();
    };

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
            const resposta = await fetch('http://localhost:3000/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha })
            });

            const dados = await resposta.json();

            if (dados.token) {
                localStorage.setItem('token_usuario', dados.token);
                window.location.href = '/';
            } else {
                setErro(dados.mensagem || 'Email ou senha incorretos.');
            }
        } catch {
            setErro('Erro ao conectar com o servidor.');
        } finally {
            setCarregando(false);
        }
    }

    return { email, setEmail, senha, setSenha, erro, carregando, handleLogin, handleBackdropClick, mostrarSenha, setMostrarSenha };
}
