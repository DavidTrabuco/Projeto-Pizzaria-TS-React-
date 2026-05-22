import { PedidosStyles } from "./styles"
import useDashboardPedidos, { type StatusPedido } from "../../../hooks/useDashboardPedidos"

const LABEL_STATUS: Record<StatusPedido, string> = {
    "pendente":            "Aguardando",
    "confirmado":          "Confirmado",
    "em preparo":        "Preparando",
    "saiu para entrega": "Saiu p/ entrega",
    "entregue":            "Entregue",
}

const STATUS: Record<StatusPedido, string> = {
    "pendente":            PedidosStyles.badgePendente,
    "confirmado":          PedidosStyles.badgeConfirmado,
    "em preparo":        PedidosStyles.badgeEmPreparo,
    "saiu para entrega": PedidosStyles.badgeSaioEntrega,
    "entregue":            PedidosStyles.badgeEntregue,
}

export default function Pedidos() {
    const {
        pedidos,
        carregando,
        erro,
        filtroStatus,
        setFiltroStatus,
        buscarPedidos,
        totalAguardando,
        totalPreparando,
        totalEntregues,
        faturamento,
    } = useDashboardPedidos()

    return (
        <div className={PedidosStyles.container}>

            <div className={PedidosStyles.cardsGrid}>
                <div className={PedidosStyles.metricCard}>
                    <p className={PedidosStyles.metricCardHeader}>⏱ Aguardando</p>
                    <p className={PedidosStyles.metricValue}>{totalAguardando}</p>
                </div>
                <div className={PedidosStyles.metricCard}>
                    <p className={PedidosStyles.metricCardHeader}>🔥 Preparando</p>
                    <p className={PedidosStyles.metricValue}>{totalPreparando}</p>
                </div>
                <div className={PedidosStyles.metricCard}>
                    <p className={PedidosStyles.metricCardHeader}>✓ Entregues hoje</p>
                    <p className={PedidosStyles.metricValue}>{totalEntregues}</p>
                </div>
                <div className={PedidosStyles.metricCard}>
                    <p className={PedidosStyles.metricCardHeader}>$ Faturamento</p>
                    <p className={PedidosStyles.metricValue}>
                        R${faturamento.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </p>
                </div>
            </div>

            <div className={PedidosStyles.filterBar}>
                <h1 className={PedidosStyles.filterTitle}>Pedidos do dia</h1>
                <div className={PedidosStyles.filterRight}>
                    <select
                        className={PedidosStyles.filterSelect}
                        value={filtroStatus}
                        onChange={(e) => setFiltroStatus(e.target.value as StatusPedido | "todos")}
                    >
                        <option value="todos">Todos os status</option>
                        <option value="pendente">Aguardando</option>
                        <option value="confirmado">Confirmado</option>
                        <option value="em preparo">Preparando</option>
                        <option value="saiu para entrega">Saiu p/ entrega</option>
                        <option value="entregue">Entregue</option>
                    </select>
                    <button className={PedidosStyles.refreshBtn} onClick={buscarPedidos}>
                        ↺ Atualizar
                    </button>
                </div>
            </div>

            {erro && <p className="text-red-400 text-sm">{erro}</p>}

            <div className={PedidosStyles.tableWrapper}>
                <table className={PedidosStyles.table}>
                    <thead>
                        <tr>
                            <th className={PedidosStyles.tableTh}>#</th>
                            <th className={PedidosStyles.tableTh}>Cliente</th>
                            <th className={PedidosStyles.tableTh}>Itens</th>
                            <th className={PedidosStyles.tableTh}>Total</th>
                            <th className={PedidosStyles.tableTh}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carregando && (
                            <tr>
                                <td className={PedidosStyles.emptyRow} colSpan={5}>
                                    Carregando...
                                </td>
                            </tr>
                        )}
                        {!carregando && pedidos.length === 0 && (
                            <tr>
                                <td className={PedidosStyles.emptyRow} colSpan={5}>
                                    Nenhum pedido encontrado.
                                </td>
                            </tr>
                        )}
                        {pedidos.map((pedido, index) => (
                            <tr key={pedido._id} className={PedidosStyles.tableRow}>
                                <td className={PedidosStyles.tableTd}>
                                    #{String(index + 1).padStart(3, "0")}
                                </td>
                                <td className={PedidosStyles.tableTd}>{pedido.nomeCliente}</td>
                                <td className={PedidosStyles.tableTd}>{pedido.itens.join(", ")}</td>
                                <td className={PedidosStyles.tableTd}>
                                    R${pedido.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                </td>
                                <td className={PedidosStyles.tableTd}>
                                    <span className={STATUS[pedido.status]}>
                                        {LABEL_STATUS[pedido.status]}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
