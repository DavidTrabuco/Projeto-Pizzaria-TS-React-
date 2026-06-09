import { AdminDashboardStyles } from "./styles"
import useDashboardAdmins from "../../../hooks/useDashboardAdmins"

function getInitials(email: string): string {
    return email.slice(0, 2).toUpperCase()
}

export default function Admins() {
    const {
        admins,
        carregando,
        erro,
        emailLogado,
        emailConvite,
        setEmailConvite,
        senhaConvite,
        setSenhaConvite,
        enviando,
        mostrarFormConvite,
        setMostrarFormConvite,
        handleConvidar,
        editandoId,
        senhaAtual,
        setSenhaAtual,
        novaSenha,
        setNovaSenha,
        salvando,
        sucessoEditar,
        abrirEdicao,
        cancelarEdicao,
        handleEditar,
    } = useDashboardAdmins()

    return (
        <div className={AdminDashboardStyles.container}>
            <div className={AdminDashboardStyles.header}>
                <h1 className={AdminDashboardStyles.headerTitle}>Usuários com acesso</h1>
                <button
                    className={AdminDashboardStyles.inviteTopBtn}
                    onClick={() => setMostrarFormConvite((v) => !v)}
                >
                    ＋ Convidar
                </button>
            </div>

            {erro && <p className="text-red-400 text-sm">{erro}</p>}

            <div className={AdminDashboardStyles.usersList}>
                {carregando && (
                    <p className="text-gray-500 text-sm">Carregando...</p>
                )}

                {!carregando && admins.length === 0 && !erro && (
                    <p className="text-gray-500 text-sm">Nenhum administrador encontrado.</p>
                )}

                {admins.map((admin) => (
                    <div key={admin._id}>
                        <div className={AdminDashboardStyles.userCard}>
                            <div className={`${AdminDashboardStyles.avatar} ${AdminDashboardStyles.avatarDefault}`}>
                                {getInitials(admin.email)}
                            </div>

                            <div className={AdminDashboardStyles.userInfo}>
                                <p className={AdminDashboardStyles.userName}>{admin.email}</p>
                                {admin.email === emailLogado && (
                                    <p className="text-xs text-orange-400 mt-0.5">você</p>
                                )}
                            </div>

                            <div className={AdminDashboardStyles.userActions}>
                                {admin.email === emailLogado && (
                                    editandoId === admin._id ? (
                                        <button
                                            onClick={cancelarEdicao}
                                            className={AdminDashboardStyles.cancelBtn}
                                        >
                                            Cancelar
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => abrirEdicao(admin._id)}
                                            className={AdminDashboardStyles.editBtn}
                                        >
                                            Editar
                                        </button>
                                    )
                                )}
                            </div>
                        </div>

                        {editandoId === admin._id && (
                            <div className={AdminDashboardStyles.editSection}>
                                <h2 className={AdminDashboardStyles.inviteTitle}>Alterar senha</h2>
                                {sucessoEditar ? (
                                    <p className="text-green-400 text-sm">{sucessoEditar}</p>
                                ) : (
                                    <div className={AdminDashboardStyles.inviteForm}>
                                        <input
                                            className={AdminDashboardStyles.inviteInput}
                                            type="password"
                                            placeholder="Senha atual"
                                            value={senhaAtual}
                                            onChange={(e) => setSenhaAtual(e.target.value)}
                                        />
                                        <input
                                            className={AdminDashboardStyles.inviteInput}
                                            type="password"
                                            placeholder="Nova senha (mín. 6 caracteres)"
                                            value={novaSenha}
                                            onChange={(e) => setNovaSenha(e.target.value)}
                                        />
                                        <button
                                            className={AdminDashboardStyles.inviteSubmitBtn}
                                            onClick={handleEditar}
                                            disabled={salvando}
                                        >
                                            {salvando ? "Salvando..." : "Salvar"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {mostrarFormConvite && (
                <div className={AdminDashboardStyles.inviteSection}>
                    <h2 className={AdminDashboardStyles.inviteTitle}>Convidar novo admin</h2>
                    <div className={AdminDashboardStyles.inviteForm}>
                        <input
                            className={AdminDashboardStyles.inviteInput}
                            type="email"
                            required
                            placeholder="email@exemplo.com"
                            value={emailConvite}
                            onChange={(e) => setEmailConvite(e.target.value)}
                        />
                        <input
                            className={AdminDashboardStyles.inviteInput}
                            type="password"
                            required
                            placeholder="Senha"
                            value={senhaConvite}
                            onChange={(e) => setSenhaConvite(e.target.value)}
                        />
                        <button
                            className={AdminDashboardStyles.inviteSubmitBtn}
                            onClick={handleConvidar}
                            disabled={enviando}
                        >
                            {enviando ? "Enviando..." : "Enviar convite"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
