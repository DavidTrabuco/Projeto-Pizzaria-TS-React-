import { useState } from "react";
import { NavLink } from "react-router";
import { AdminLoginStyle } from "./styles";
import useAdminLogin from "../../hooks/useAdminLogin";

export default function AdminLogin() {
    const { email, setEmail, senha, setSenha, erro, carregando, handleLogin } = useAdminLogin();
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <>
            <section className={AdminLoginStyle.section}>
                <div className={AdminLoginStyle.card}>

                    <p className={AdminLoginStyle.label}>Pizza House</p>
                    <h1 className={AdminLoginStyle.title}>Área ADM</h1>
                    <div className={AdminLoginStyle.divider}></div>
                    <h2 className={AdminLoginStyle.subtitle}>Acesso restrito a funcionários autorizados</h2>

                    <form className={AdminLoginStyle.form} onSubmit={handleLogin}>
                        <div className={AdminLoginStyle.inputGroup}>
                            <label className={AdminLoginStyle.inputLabel}>Usuário</label>
                            <input
                                className={AdminLoginStyle.input}
                                type="text"
                                placeholder="Digite seu usuário"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={AdminLoginStyle.inputGroup}>
                            <label className={AdminLoginStyle.inputLabel}>Senha</label>
                            <div className={AdminLoginStyle.inputWrapper}>
                                <input
                                    className={AdminLoginStyle.input}
                                    type={mostrarSenha ? "text" : "password"}
                                    placeholder="Digite sua senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                    className={AdminLoginStyle.mostrarSenhaBtn}
                                >
                                    {mostrarSenha ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>

                        {erro && <p className={AdminLoginStyle.error}>{erro}</p>}

                        <button className={AdminLoginStyle.button} type="submit" disabled={carregando}>
                            {carregando ? 'Carregando...' : 'Entrar no Dashboard'}
                        </button>

                        <NavLink to="/login">
                            <button className={AdminLoginStyle.buttonOutline} type="button">
                                Voltar para o login
                            </button>
                        </NavLink>
                    </form>

                </div>
            </section>
        </>
    )
}
