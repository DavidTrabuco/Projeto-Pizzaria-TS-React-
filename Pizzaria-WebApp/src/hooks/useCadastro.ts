import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

export function useCadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contato, setContato] = useState('');
    const [erros, setErros] = useState<Record<string, string>>({});
    const [enviado, setenviado] = useState(false);
    const navigate = useNavigate();

    function validar(): Record<string, string> {
        const novosErros: Record<string, string> = {};

        if (!nome.trim()) {
            novosErros.nome = 'Nome é obrigatório';
        } else if (/\d/.test(nome)) {
            novosErros.nome = 'Nome não pode conter números';
        }

        if (!email.trim()) {
            novosErros.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            novosErros.email = 'Email inválido';
        }

        if (!password.trim()) {
            novosErros.senha = 'Senha é obrigatória';
        } else if (password.length < 6) {
            novosErros.senha = 'A senha precisa ter pelo menos 6 caracteres';
        } else if (password !== confirmPassword) {
            novosErros.senha = 'As senhas não coincidem';
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

        const novosErros = validar();

        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros);
            return;
        }

        setErros({});

        try {
            const resposta = await fetch(`${import.meta.env.VITE_API_URL}/usuarios/cadastrar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, senha: password, telefone: contato })
            });

            if (resposta.status >= 500) { navigate('/erro-500'); return; }
            if (resposta.status === 404 || resposta.status === 400) { navigate('/erro-400'); return; }

            const dados = await resposta.json();

            if (dados.token) {
                localStorage.setItem('token_usuario', dados.token);
                setenviado(true);
                navigate('/');
            } else {
                setErros({ geral: dados.mensagem || 'Erro ao cadastrar.' });
            }
        } catch {
            navigate('/erro-500');
        }
    }

    return { nome, setNome, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, contato, setContato, erros, enviado, handleSubmit };
}
