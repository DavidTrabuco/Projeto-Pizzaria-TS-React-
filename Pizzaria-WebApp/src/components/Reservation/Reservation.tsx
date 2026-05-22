import { NavLink } from "react-router";
import { ReservationStyle } from "./style";
import { mascaraTelefone } from "./utils";
import { useReservation } from "../../hooks/useReservation";

export default function Reservation() {
    const { nome, setNome, pessoas, setPessoas, data, setData, horario, setHorario, contato, setContato, erros, enviando, enviado, dataRef, horarioRef, handleSubmit, erroLogar } = useReservation();

    return (
        <>
            <section className={ReservationStyle.section}>
                <div className={ReservationStyle.card}>

                    <p className={ReservationStyle.label}>Pizza House</p>
                    <h1 className={ReservationStyle.title}>Reserva</h1>
                    <div className={ReservationStyle.divider}></div>
                    <h2 className={ReservationStyle.subtitle}>Faça a sua reserva</h2>
                    <br />
                    {enviando && <p className={ReservationStyle.sucess}>Enviando reserva...</p>}
                    {enviado && <p className={ReservationStyle.sucess}>Reserva realizada com sucesso!</p>}

                    <form className={ReservationStyle.form} onSubmit={handleSubmit}>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Nome</label>
                            <input
                                className={ReservationStyle.input}
                                type="text"
                                placeholder="Em qual nome estará reservado a mesa"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            {erros.nome && <span style={{ color: 'red' }}>{erros.nome}</span>}
                        </div>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Pessoas</label>
                            <input
                                className={ReservationStyle.input}
                                type="number"
                                placeholder="Digite quantas pessoas estarão com vc"
                                value={pessoas}
                                onChange={(e) => setPessoas(e.target.value)}
                            />
                            {erros.pessoas && <span style={{ color: 'red' }}>{erros.pessoas}</span>}
                        </div>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Data</label>
                            <input
                                className={ReservationStyle.input}
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
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Horário</label>
                            <input
                                className={ReservationStyle.input}
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
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Contato</label>
                            <input
                                className={ReservationStyle.input}
                                type="tel"
                                placeholder="(XX) XXXXX-XXXX"
                                value={contato}
                                onChange={(e) => setContato(mascaraTelefone(e.target.value))}
                            />
                            {erros.contato && <span style={{ color: 'red' }}>{erros.contato}</span>}
                        </div>

                        <button className={ReservationStyle.button} type="submit" disabled={enviando}>
                            {enviando ? 'Enviando...' : 'Reservar'}
                        </button>
                        {erroLogar && <span className={ReservationStyle.erro}>{erroLogar}</span>}
                    </form>
                    <button className={ReservationStyle.buttonOutline}><NavLink to="/">Voltar para a página inicial</NavLink></button>

                </div>
            </section>
        </>
    )
}
