import { NavLink } from "react-router";
import { ReservationStyle as S } from "./style";
import { mascaraTelefone } from "./utils";
import { useReservation } from "../../hooks/useReservation";

export default function Reservation() {
    const { nome, setNome, pessoas, setPessoas, data, setData, horario, setHorario, contato, setContato, erros, enviando, enviado, dataRef, horarioRef, handleSubmit, erroLogar } = useReservation();

    const estaLogado = !!localStorage.getItem('token_usuario');

    return (
        <>
            <section className={S.section}>
                <div className={S.card}>

                    <p className={S.label}>Pizza House</p>
                    <h1 className={S.title}>Reserva</h1>
                    <div className={S.divider}></div>
                    <h2 className={S.subtitle}>Faça a sua reserva</h2>
                    <br />

                    {!estaLogado && (
                        <div className={S.avisoLogin}>
                            <span>⚠️</span>
                            <span>
                                Você precisa estar logado para fazer uma reserva.{' '}
                                <NavLink to="/login" className={S.avisoLoginLink}>Fazer login</NavLink>
                            </span>
                        </div>
                    )}

                    {enviando && <p className={S.sucess}>Enviando reserva...</p>}
                    {enviado && <p className={S.sucess}>Reserva realizada com sucesso!</p>}

                    <form className={S.form} onSubmit={handleSubmit}>
                        <div className={S.inputGroup}>
                            <label className={S.inputLabel}>Nome</label>
                            <input
                                className={S.input}
                                type="text"
                                placeholder="Em qual nome estará reservado a mesa"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            {erros.nome && <span style={{ color: 'red' }}>{erros.nome}</span>}
                        </div>
                        <div className={S.inputGroup}>
                            <label className={S.inputLabel}>Pessoas</label>
                            <input
                                className={S.input}
                                type="number"
                                placeholder="Digite quantas pessoas estarão com vc"
                                value={pessoas}
                                onChange={(e) => setPessoas(e.target.value)}
                            />
                            {erros.pessoas && <span style={{ color: 'red' }}>{erros.pessoas}</span>}
                        </div>
                        <div className={S.inputGroup}>
                            <label className={S.inputLabel}>Data</label>
                            <input
                                className={S.input}
                                type="date"
                                min={new Date().toISOString().split('T')[0]}
                                value={data}
                                ref={dataRef}
                                onClick={() => dataRef.current?.showPicker()}
                                onChange={(e) => setData(e.target.value)}
                                onKeyDown={(e) => e.preventDefault()}
                            />
                            {erros.data && <span style={{ color: 'red' }}>{erros.data}</span>}
                        </div>
                        <div className={S.inputGroup}>
                            <label className={S.inputLabel}>Horário</label>
                            <input
                                className={S.input}
                                type="time"
                                min="18:00"
                                max="22:59"
                                value={horario}
                                ref={horarioRef}
                                onClick={() => horarioRef.current?.showPicker()}
                                onChange={(e) => setHorario(e.target.value)}
                                onKeyDown={(e) => e.preventDefault()}
                            />
                            {erros.horario && <span style={{ color: 'red' }}>{erros.horario}</span>}
                        </div>
                        <div className={S.inputGroup}>
                            <label className={S.inputLabel}>Contato</label>
                            <input
                                className={S.input}
                                type="tel"
                                placeholder="(XX) XXXXX-XXXX"
                                value={contato}
                                onChange={(e) => setContato(mascaraTelefone(e.target.value))}
                            />
                            {erros.contato && <span className={S.erro}>{erros.contato}</span>}
                        </div>

                        <button className={S.button} type="submit" disabled={enviando || !estaLogado}>
                            {enviando ? 'Enviando...' : 'Reservar'}
                        </button>
                        {erroLogar && <span className={S.erro}>{erroLogar}</span>}
                    </form>
                    <button className={S.buttonOutline}><NavLink to="/">Voltar para a página inicial</NavLink></button>

                </div>
            </section>
        </>
    )
}
