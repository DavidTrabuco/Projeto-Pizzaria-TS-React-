
import { SenhaStyles } from "./styles";
import useEsqueciSenha from "../../../hooks/useEsqueciSenha";
import { NavLink } from "react-router";

export default function SenhaScreen() {
    const { email, setEmail, novaSenha, setNovaSenha, confirmarSenha, setConfirmarSenha, erro, sucesso, carregando, handleSubmit } = useEsqueciSenha();
    return (
        <>
            <section className={SenhaStyles.section}>
                <div className={SenhaStyles.card}>
                    <p className={SenhaStyles.label}>Pizza House</p>
                    <h1 className={SenhaStyles.title}>Redefinir Senha</h1>
                    <div className={SenhaStyles.divider}></div>
                    <h2 className={SenhaStyles.subtitle}>Digite seu e-mail e escolha uma nova senha</h2>

                    <form onSubmit={handleSubmit} className={SenhaStyles.form}>
                        <div className={SenhaStyles.inputGroup}>
                            <label className={SenhaStyles.inputLabel}>E-mail</label>
                            <input
                                className={SenhaStyles.input}
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className={SenhaStyles.inputGroup}>
                            <label className={SenhaStyles.inputLabel}>Nova Senha</label>
                            <input
                                className={SenhaStyles.input}
                                type="password"
                                placeholder="Digite sua nova senha"
                                value={novaSenha}
                                onChange={(e) => setNovaSenha(e.target.value)}
                            />
                        </div>

                        <div className={SenhaStyles.inputGroup}>
                            <label className={SenhaStyles.inputLabel}>Confirmar Nova Senha</label>
                            <input
                                className={SenhaStyles.input}
                                type="password"
                                placeholder="Confirme sua nova senha"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                            />
                        </div>

                        {erro && <p className={SenhaStyles.erro}>{erro}</p>}
                        {sucesso && <p className={SenhaStyles.sucess}>{sucesso}</p>}

                        <button className={SenhaStyles.button} type="submit" disabled={carregando}>
                            {carregando ? 'Aguarde...' : 'Redefinir Senha'}
                        </button>

                        <button className={SenhaStyles.buttonOutline} type="button"> 
                            <NavLink to="/login">Voltar para Login</NavLink>
                            </button>
                    </form>
                </div>
            </section>
        </>
    );
}
