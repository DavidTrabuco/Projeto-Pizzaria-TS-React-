import { useState } from "react"
import { NavLink } from "react-router"
import { CadastroStyle } from "./style"
import { useCadastro } from "../../hooks/useCadastro"
import { mascaraTelefone } from "./utils"

export default function Cadastro() {
    const { nome, setNome, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, contato, setContato, erros, enviado, handleSubmit } = useCadastro();
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirm, setMostrarConfirm] = useState(false);

    return (
        <>
            <section className={CadastroStyle.section}>
                <div className={CadastroStyle.card}>

                    <p className={CadastroStyle.label}>Pizza House</p>
                    <h1 className={CadastroStyle.title}>Cadastro</h1>
                    <div className={CadastroStyle.divider}></div>
                    <h2 className={CadastroStyle.subtitle}>Cadastre sua conta para gerenciar suas reservas</h2>

                    {enviado && (
                        <p className={CadastroStyle.sucess}>Cadastro realizado com sucesso!</p>
                    )}

                    <form className={CadastroStyle.form} onSubmit={handleSubmit}>
                        <div className={CadastroStyle.inputGroup}>
                            <label className={CadastroStyle.inputLabel}>Digite seu nome para cadastro</label>
                            <input
                                className={CadastroStyle.input}
                                type="text"
                                placeholder="Digite seu nome "
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            {erros.nome && <span style={{ color: 'red' }} className={CadastroStyle.erro}>{erros.nome}</span>}
                        </div>
                        <div className={CadastroStyle.inputGroup}>
                            <label className={CadastroStyle.inputLabel}>Digite um email para cadastro</label>
                            <input
                                className={CadastroStyle.input}
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {erros.email && <span style={{ color: 'red' }} className={CadastroStyle.erro}>{erros.email}</span>}
                        </div>

                        <div className={CadastroStyle.inputGroup}>
                            <label className={CadastroStyle.inputLabel}>Senha</label>
                            <div className="relative">
                                <input
                                    className={CadastroStyle.input}
                                    type={mostrarSenha ? "text" : "password"}
                                    placeholder="Digite sua senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                    className={CadastroStyle.mostrarSenhaBtn}
                                >
                                    {mostrarSenha ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>

                        <div className={CadastroStyle.inputGroup}>
                            <label className={CadastroStyle.inputLabel}>Confirmar senha</label>
                            <div className="relative">
                                <input
                                    className={CadastroStyle.input}
                                    type={mostrarConfirm ? "text" : "password"}
                                    placeholder="Confirmar sua senha"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setMostrarConfirm(!mostrarConfirm)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-colors duration-200"
                                >
                                    {mostrarConfirm ? "🙈" : "👁️"}
                                </button>
                            </div>
                            {erros.senha && <span style={{ color: 'red' }} className={CadastroStyle.erro}>{erros.senha}</span>}
                        </div>
                        <div className={CadastroStyle.inputGroup}>
                            <label className={CadastroStyle.inputLabel}>Digite um telefone para caso de problemas na entrega</label>
                            <input
                                className={CadastroStyle.input}
                                type="tel"
                                placeholder="(XX) XXXXX-XXXX"
                                value={contato}
                                onChange={(e) => setContato(mascaraTelefone(e.target.value))}
                            />
                            {erros.contato && <span style={{ color: 'red' }} className={CadastroStyle.erro}>{erros.contato}</span>}
                        </div>

                        <button className={CadastroStyle.button} type="submit">
                            Cadastrar
                        </button>

                        <NavLink to="/">
                            <button className={CadastroStyle.buttonOutline} type="button">
                                Voltar para a página inicial
                            </button>
                        </NavLink>
                    </form>

                </div>
            </section>
        </>
    )
}
