import { useDashboardReservas, extrairData, extrairHorario, type Reserva } from "../../../hooks/useDashboardReservas";
import { ReservasStyles as S } from "./styles";
import { mascaraTelefone } from "./utils";

const DIAS_SEMANA = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const MESES = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

function BadgeStatus({ status }: { status: Reserva['status'] }) {
    const classe =
        status === 'confirmada' ? S.badgeConfirmada :
        status === 'cancelada'  ? S.badgeCancelada  : S.badgePendente;
    const label =
        status === 'confirmada' ? 'Confirmada' :
        status === 'cancelada'  ? 'Cancelada'  : 'Pendente';
    return <span className={classe}>{label}</span>;
}

export default function Reservas() {
    const {
        nome, setNome, pessoas, setPessoas,
        data, setData, horario, setHorario, contato, setContato,
        erros, enviando, handleSubmit,
        mesSelecionado, mesAnterior, proximoMes,
        primeiroDia, diasNoMes, reservasPorDia,
        reservasMes, confirmarReserva, recusarReserva, cancelarReserva,
        carregando, erroApi, buscarReservas,
        modalAberto, modalDetalhes, abrirModal, fecharModal, mostrarDetalhes, setMostrarDetalhes
    } = useDashboardReservas();

    return (
        <div className={S.container}>
            <div className={S.layout}>

                {/* ── CALENDÁRIO ─────────────────────────────────── */}
                <div className={S.calendarSection}>
                    <div className={S.calendarHeader}>
                        <h2 className={S.calendarTitle}>
                            {MESES[mesSelecionado.getMonth()]} {mesSelecionado.getFullYear()}
                        </h2>
                        <div className={S.calendarNav}>
                            <button className={S.calendarNavBtn} onClick={mesAnterior}>‹</button>
                            <button className={S.calendarNavBtn} onClick={proximoMes}>›</button>
                        </div>
                    </div>

                    <div className={S.calendarGrid}>
                        {DIAS_SEMANA.map(d => (
                            <div key={d} className={S.calendarDayLabel}>{d}</div>
                        ))}

                        {Array.from({ length: primeiroDia }).map((_, i) => (
                            <div key={`vazio-${i}`} className={S.calendarDayEmpty} />
                        ))}

                        {Array.from({ length: diasNoMes }, (_, i) => i + 1).map(dia => {
                            const count = reservasPorDia[dia] || 0;
                            return (
                                <div key={dia} className={count > 0 ? S.calendarDayHighlighted : S.calendarDay}>
                                    <span>{dia}</span>
                                    {count > 0 && (
                                        <span className={S.calendarDayCount}>{count} res.</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── LISTA DE RESERVAS ──────────────────────────── */}
                <div className={S.listSection}>
                    <div className={S.listHeader}>
                        <h2 className={S.listTitle}>Reservas pendentes</h2>
                        <button className={S.novaBtn} onClick={abrirModal}>+ Nova</button>
                    </div>

                    <div className={S.list}>
                        {carregando && (
                            <p className="text-sm text-gray-400 text-center py-8 animate-pulse">
                                Carregando reservas...
                            </p>
                        )}

                        {!carregando && erroApi && (
                            <div className="text-center py-8 space-y-3">
                                <p className="text-sm text-red-400">{erroApi}</p>
                                <button
                                    onClick={buscarReservas}
                                    className="text-xs text-gray-400 border border-gray-700 px-4 py-2 rounded-xl hover:border-gray-500 transition-all cursor-pointer"
                                >
                                    Tentar novamente
                                </button>
                            </div>
                        )}

                        {!carregando && !erroApi && reservasMes.length === 0 && (
                            <p className="text-sm text-gray-500 text-center py-8">
                                Nenhuma reserva neste mês.
                            </p>
                        )}

                        {!carregando && reservasMes.map(reserva => (
                            <div key={reserva._id} className={S.reservaCard}>
                                <div className={S.reservaCardHeader}>
                                    <div>
                                        <p className={S.reservaNome}>{reserva.nome}</p>
                                        <p className={S.reservaMeta}>
                                            {extrairData(reserva.dataHorario)} · {extrairHorario(reserva.dataHorario)} · Mesa {reserva.mesa} · {reserva.pessoas} pessoas
                                        </p>
                                    </div>
                                    <BadgeStatus status={reserva.status ?? 'pendente'} />
                                </div>

                                {(reserva.status ?? 'pendente') === 'pendente' && (
                                    <div className={S.reservaActions}>
                                        <button className={S.btnConfirmar} onClick={() => confirmarReserva(reserva._id)}>
                                            Confirmar
                                        </button>
                                        <button className={S.btnRecusar} onClick={() => recusarReserva(reserva._id)}>
                                            Recusar
                                        </button>
                                    </div>
                                )}

                                {reserva.status === 'confirmada' && (
                                    <div className={S.reservaActions}>
                                        <button className={S.btnDetalhes} onClick={() => modalDetalhes(reserva)}>
                                            Detalhes
                                        </button>
                                        <button className={S.btnCancelar} onClick={() => cancelarReserva(reserva._id)}>
                                            Cancelar
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── MODAL: DETALHES DA RESERVA ─────────────────────── */}
            {mostrarDetalhes && (
                <div className={S.modalOverlay} onClick={() => setMostrarDetalhes('')}>
                    <div className={S.modal} onClick={e => e.stopPropagation()}>
                        <h2 className={S.modalTitle}>Detalhes da Reserva</h2>
                        <pre className="text-sm text-gray-300 whitespace-pre-wrap leading-6">
                            {mostrarDetalhes}
                        </pre>
                        <div className={S.modalActions}>
                            <button className={S.modalBtnCancel} onClick={() => setMostrarDetalhes('')}>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── MODAL: NOVA RESERVA ─────────────────────────────── */}
            {modalAberto && (
                <div className={S.modalOverlay} onClick={fecharModal}>
                    <div className={S.modal} onClick={e => e.stopPropagation()}>
                        <h2 className={S.modalTitle}>Nova Reserva</h2>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className={S.modalGroup}>
                                <label className={S.modalLabel}>Nome</label>
                                <input
                                    className={S.modalInput}
                                    placeholder="Nome completo"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                                {erros.nome && <span className={S.modalError}>{erros.nome}</span>}
                            </div>

                            <div className={S.modalRow}>
                                <div className={S.modalGroup}>
                                    <label className={S.modalLabel}>Data</label>
                                    <input
                                        className={S.modalInput}
                                        type="date"
                                        value={data}
                                        onChange={e => setData(e.target.value)}
                                    />
                                    {erros.data && <span className={S.modalError}>{erros.data}</span>}
                                </div>
                                <div className={S.modalGroup}>
                                    <label className={S.modalLabel}>Horário</label>
                                    <input
                                        className={S.modalInput}
                                        type="time"
                                        value={horario}
                                        onChange={e => setHorario(e.target.value)}
                                    />
                                    {erros.horario && <span className={S.modalError}>{erros.horario}</span>}
                                </div>
                            </div>

                            <div className={S.modalRow}>
                                <div className={S.modalGroup}>
                                    <label className={S.modalLabel}>Pessoas</label>
                                    <input
                                        className={S.modalInput}
                                        type="number"
                                        min={1}
                                        max={20}
                                        placeholder="Ex: 4"
                                        value={pessoas}
                                        onChange={e => setPessoas(e.target.value)}
                                    />
                                    {erros.pessoas && <span className={S.modalError}>{erros.pessoas}</span>}
                                </div>
                                <div className={S.modalGroup}>
                                    <label className={S.modalLabel}>Contato</label>
                                    <input
                                        className={S.modalInput}
                                        placeholder="(11) 99999-0000"
                                        value={contato}
                                        onChange={e => setContato(mascaraTelefone(e.target.value))}
                                    />
                                    {erros.contato && <span className={S.modalError}>{erros.contato}</span>}
                                </div>
                            </div>

                            <div className={S.modalActions}>
                                <button type="button" className={S.modalBtnCancel} onClick={fecharModal}>
                                    Cancelar
                                </button>
                                <button type="submit" className={S.modalBtnSubmit} disabled={enviando}>
                                    {enviando ? 'Salvando...' : 'Criar Reserva'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
