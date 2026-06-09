import { PedidosDashboardStyles as Pedido } from "./styles"
import useDashboardPedidos, { type StatusPedido } from "../../../hooks/useDashboardPedidos"

const LABEL_STATUS: Record<StatusPedido, string> = {
    "pendente":            "Aguardando",
    "confirmado":          "Confirmado",
    "em preparo":        "Preparando",
    "saiu para entrega": "Saiu p/ entrega",
    "entregue":            "Entregue",
}

const STATUS: Record<StatusPedido, string> = {
    "pendente":            Pedido.badgePendente,
    "confirmado":          Pedido.badgeConfirmado,
    "em preparo":        Pedido.badgeEmPreparo,
    "saiu para entrega": Pedido.badgeSaioEntrega,
    "entregue":            Pedido.badgeEntregue,
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
        <div className={Pedido.container}>

            <div className={Pedido.cardsGrid}>
                <div className={Pedido.metricCard}>
                    <p className={Pedido.metricCardHeader}>⏱ Aguardando</p>
                    <p className={Pedido.metricValue}>{totalAguardando}</p>
                </div>
                <div className={Pedido.metricCard}>
                    <p className={Pedido.metricCardHeader}>🔥 Preparando</p>
                    <p className={Pedido.metricValue}>{totalPreparando}</p>
                </div>
                <div className={Pedido.metricCard}>
                    <p className={Pedido.metricCardHeader}>✓ Entregues hoje</p>
                    <p className={Pedido.metricValue}>{totalEntregues}</p>
                </div>
                <div className={Pedido.metricCard}>
                    <p className={Pedido.metricCardHeader}>$ Faturamento</p>
                    <p className={Pedido.metricValue}>
                        R${faturamento.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </p>
                </div>
            </div>

            <div className={Pedido.filterBar}>
                <h1 className={Pedido.filterTitle}>Pedidos do dia</h1>
                <div className={Pedido.filterRight}>
                    <select
                        className={Pedido.filterSelect}
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
                    <button className={Pedido.refreshBtn} onClick={buscarPedidos}>
                        ↺ Atualizar
                    </button>
                </div>
            </div>

            {erro && <p className="text-red-400 text-sm">{erro}</p>}

            <div className={Pedido.tableWrapper}>
                <table className={Pedido.table}>
                    <thead>
                        <tr>
                            <th className={Pedido.tableTh}>#</th>
                            <th className={Pedido.tableTh}>Cliente</th>
                            <th className={Pedido.tableTh}>Itens</th>
                            <th className={Pedido.tableTh}>Total</th>
                            <th className={Pedido.tableTh}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carregando && (
                            <tr>
                                <td className={Pedido.emptyRow} colSpan={5}>
                                    Carregando...
                                </td>
                            </tr>
                        )}
                        {!carregando && pedidos.length === 0 && (
                            <tr>
                                <td className={Pedido.emptyRow} colSpan={5}>
                                    Nenhum pedido encontrado.
                                </td>
                            </tr>
                        )}
                        {pedidos.map((pedido, index) => (
                            <tr key={pedido._id} className={Pedido.tableRow}>
                                <td className={Pedido.tableTd}>
                                    #{String(index + 1).padStart(3, "0")}
                                </td>
                                <td className={Pedido.tableTd}>{pedido.nomeCliente}</td>
                                <td className={Pedido.tableTd}>{pedido.itens.join(", ")}</td>
                                <td className={Pedido.tableTd}>
                                    R${pedido.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                </td>
                                <td className={Pedido.tableTd}>
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
