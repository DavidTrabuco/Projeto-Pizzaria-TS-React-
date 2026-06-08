import React, { useState } from "react";
import { useNavigate } from "react-router";

function validar(email: string, novaSenha: string, confirmar: string): string | null {
    if (!email) return 'O e-mail é obrigatório.';
    if (!email.includes('@') || !email.includes('.')) return 'Digite um e-mail válido.';
    if (!novaSenha) return 'A nova senha é obrigatória.';
    if (novaSenha.length < 6) return 'A senha precisa ter no mínimo 6 caracteres.';
    if (novaSenha !== confirmar) return 'As senhas não coincidem.';
    return null;
}

export default function useEsqueciSenha() {
    const [email, setEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erro, setErro] = useState<string | null>(null);
    const [sucesso, setSucesso] = useState<string | null>(null);
    const [carregando, setCarregando] = useState(false);
    const navegar = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const validacao = validar(email, novaSenha, confirmarSenha);
        if (validacao) {
            setErro(validacao);
            setSucesso(null);
            return;
        }

        setErro(null);
        setSucesso(null);
        setCarregando(true);

        try {
            const resposta = await fetch(`${import.meta.env.VITE_API_URL}/usuarios/redefinir-senha`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, novaSenha }),
            });

            if (resposta.status >= 500) { navegar('/erro-500'); return; }
            if (resposta.status === 404 || resposta.status === 400) { navegar('/erro-400'); return; }

            const dados = await resposta.json();

            if (resposta.ok) {
                setSucesso('Senha alterada com sucesso!');
                setEmail('');
                setNovaSenha('');
                setConfirmarSenha('');
            } else {
                setErro(dados.mensagem || 'Erro ao redefinir senha.');
            }
        } catch {
            navegar('/erro-500');
        } finally {
            setCarregando(false);
        }
    }

    return {
        email,
        setEmail,
        novaSenha,
        setNovaSenha,
        confirmarSenha,
        setConfirmarSenha,
        erro,
        sucesso,
        carregando,
        handleSubmit,
    };
}
