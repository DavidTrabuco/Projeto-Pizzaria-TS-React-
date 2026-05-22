import { DashboardStyle } from "./styles"

export default function Dashboard() {
    return (
        <>
            <div className={DashboardStyle.mainHeader}>
                <h1 className={DashboardStyle.mainTitle}>Dashboard</h1>
                <p className={DashboardStyle.mainSubtitle}>Bem-vindo de volta, admin</p>
            </div>

            <div className={DashboardStyle.cardsGrid}>
                <div className={DashboardStyle.metricCard}>
                    <p className={DashboardStyle.metricLabel}>Faturamento total</p>
                    <p className={DashboardStyle.metricValue}>R$ 0,00</p>
                    <p className={DashboardStyle.metricSub}>este mês</p>
                </div>
                <div className={DashboardStyle.metricCard}>
                    <p className={DashboardStyle.metricLabel}>Total de pedidos</p>
                    <p className={DashboardStyle.metricValue}>0</p>
                    <p className={DashboardStyle.metricSub}>hoje</p>
                </div>
                <div className={DashboardStyle.metricCard}>
                    <p className={DashboardStyle.metricLabel}>Reservas ativas</p>
                    <p className={DashboardStyle.metricValue}>0</p>
                    <p className={DashboardStyle.metricSub}>esta semana</p>
                </div>
            </div>

            <p className={DashboardStyle.sectionTitle}>Últimos pedidos</p>
            <div className={DashboardStyle.tableWrapper}>
                <table className={DashboardStyle.table}>
                    <thead>
                        <tr>
                            <th className={DashboardStyle.tableTh}>Nº</th>
                            <th className={DashboardStyle.tableTh}>Cliente</th>
                            <th className={DashboardStyle.tableTh}>Itens</th>
                            <th className={DashboardStyle.tableTh}>Total</th>
                            <th className={DashboardStyle.tableTh}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={DashboardStyle.tableTd} colSpan={5} style={{ textAlign: 'center', color: '#6b7280' }}>
                                Nenhum pedido ainda
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
