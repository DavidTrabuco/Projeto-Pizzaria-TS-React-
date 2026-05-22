import { AdminStyles } from "./styles"
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
        <div className={AdminStyles.container}>
            <div className={AdminStyles.header}>
                <h1 className={AdminStyles.headerTitle}>Usuários com acesso</h1>
                <button
                    className={AdminStyles.inviteTopBtn}
                    onClick={() => setMostrarFormConvite((v) => !v)}
                >
                    ＋ Convidar
                </button>
            </div>

            {erro && <p className="text-red-400 text-sm">{erro}</p>}

            <div className={AdminStyles.usersList}>
                {carregando && (
                    <p className="text-gray-500 text-sm">Carregando...</p>
                )}

                {!carregando && admins.length === 0 && !erro && (
                    <p className="text-gray-500 text-sm">Nenhum administrador encontrado.</p>
                )}

                {admins.map((admin) => (
                    <div key={admin._id}>
                        <div className={AdminStyles.userCard}>
                            <div className={`${AdminStyles.avatar} ${AdminStyles.avatarDefault}`}>
                                {getInitials(admin.email)}
                            </div>

                            <div className={AdminStyles.userInfo}>
                                <p className={AdminStyles.userName}>{admin.email}</p>
                                {admin.email === emailLogado && (
                                    <p className="text-xs text-orange-400 mt-0.5">você</p>
                                )}
                            </div>

                            <div className={AdminStyles.userActions}>
                                {admin.email === emailLogado && (
                                    editandoId === admin._id ? (
                                        <button
                                            onClick={cancelarEdicao}
                                            className={AdminStyles.cancelBtn}
                                        >
                                            Cancelar
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => abrirEdicao(admin._id)}
                                            className={AdminStyles.editBtn}
                                        >
                                            Editar
                                        </button>
                                    )
                                )}
                            </div>
                        </div>

                        {editandoId === admin._id && (
                            <div className={AdminStyles.editSection}>
                                <h2 className={AdminStyles.inviteTitle}>Alterar senha</h2>
                                {sucessoEditar ? (
                                    <p className="text-green-400 text-sm">{sucessoEditar}</p>
                                ) : (
                                    <div className={AdminStyles.inviteForm}>
                                        <input
                                            className={AdminStyles.inviteInput}
                                            type="password"
                                            placeholder="Senha atual"
                                            value={senhaAtual}
                                            onChange={(e) => setSenhaAtual(e.target.value)}
                                        />
                                        <input
                                            className={AdminStyles.inviteInput}
                                            type="password"
                                            placeholder="Nova senha (mín. 6 caracteres)"
                                            value={novaSenha}
                                            onChange={(e) => setNovaSenha(e.target.value)}
                                        />
                                        <button
                                            className={AdminStyles.inviteSubmitBtn}
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
                <div className={AdminStyles.inviteSection}>
                    <h2 className={AdminStyles.inviteTitle}>Convidar novo admin</h2>
                    <div className={AdminStyles.inviteForm}>
                        <input
                            className={AdminStyles.inviteInput}
                            type="email"
                            required
                            placeholder="email@exemplo.com"
                            value={emailConvite}
                            onChange={(e) => setEmailConvite(e.target.value)}
                        />
                        <input
                            className={AdminStyles.inviteInput}
                            type="password"
                            required
                            placeholder="Senha"
                            value={senhaConvite}
                            onChange={(e) => setSenhaConvite(e.target.value)}
                        />
                        <button
                            className={AdminStyles.inviteSubmitBtn}
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
