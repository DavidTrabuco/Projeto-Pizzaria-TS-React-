import { NavLink } from "react-router";
import { LoginStyle } from "./styles";
import useUsuarioLogin from "../../hooks/useLogin";

interface LoginProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Login({ isOpen, onClose }: LoginProps) {
    const { email, setEmail, senha, setSenha, erro, carregando, handleLogin, mostrarSenha, setMostrarSenha } = useUsuarioLogin();

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className={LoginStyle.backdrop} onClick={handleBackdropClick}>
            <div className={LoginStyle.card}>

                <button className={LoginStyle.closeBtn} onClick={onClose}>✕</button>

                <p className={LoginStyle.label}>Pizza House</p>
                <h1 className={LoginStyle.title}>Login</h1>
                <div className={LoginStyle.divider}></div>
                <h2 className={LoginStyle.subtitle}>Acesse sua conta para gerenciar suas reservas</h2>

                <form className={LoginStyle.form} onSubmit={handleLogin}>
                    <div className={LoginStyle.inputGroup}>
                        <label className={LoginStyle.inputLabel}>E-mail</label>
                        <input
                            className={LoginStyle.input}
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {erro && <p className={LoginStyle.error}>{erro}</p>}
                    </div>
                    <div className={LoginStyle.inputGroup}>
                        <label className={LoginStyle.inputLabel}>Senha</label>
                        <div className="relative">
                            <input
                                className={LoginStyle.input}
                                type={mostrarSenha ? "text" : "password"}
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                                className={LoginStyle.mostrarSenhaBtn}
                            >
                                {mostrarSenha ? "🙈" : "👁️"}
                            </button>
                        </div>
                        <NavLink to="/cadastro" className={LoginStyle.anchor} onClick={onClose}>
                            Sua primeira vez - Se cadastre
                        </NavLink>
                    </div>

                    <button className={LoginStyle.button} type="submit" disabled={carregando}>
                        {carregando ? 'Entrando...' : 'Acessar'}
                    </button>

                    <button className={LoginStyle.buttonOutline} type="button" onClick={onClose}>
                        Cancelar
                    </button>

                </form>

                <NavLink to="/admin/login" className={LoginStyle.anchor} onClick={onClose}>
                    Sou funcionário — acesso administrativo
                </NavLink>

            </div>
        </div>
    );
}
