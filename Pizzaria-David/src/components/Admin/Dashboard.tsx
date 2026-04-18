import { NavLink } from "react-router"
import { DashboardStyle } from "./styles"
import useAdminLogin from "../../hooks/useAdminLogin";

export default function Dashboard() {

    const { handleSair } = useAdminLogin();
    return (
        <div className={DashboardStyle.layout}>
            <aside className={DashboardStyle.sidebar}>
                <div className={DashboardStyle.sidebarLogo}>
                    <p className={DashboardStyle.sidebarLogoLabel}>PIZZA HOUSE</p>
                    <h2 className={DashboardStyle.sidebarLogoTitle}>Área ADM</h2>
                </div>

                <nav className={DashboardStyle.sidebarNav}>
                    <NavLink to="/admin">
                        Dashboard
                    </NavLink>
                    <NavLink to="/admin/pedidos" className={({ isActive }) => isActive ? DashboardStyle.sidebarNavItemActive : DashboardStyle.sidebarNavItem}>
                        Pedidos
                    </NavLink>
                    <NavLink to="/admin/reservas" className={({ isActive }) => isActive ? DashboardStyle.sidebarNavItemActive : DashboardStyle.sidebarNavItem}>
                        Reservas
                    </NavLink>
                    <NavLink to="/admin/cardapio" className={({ isActive }) => isActive ? DashboardStyle.sidebarNavItemActive : DashboardStyle.sidebarNavItem}>
                        Cardápio
                    </NavLink>
                    <NavLink to="/admin/admins" className={({ isActive }) => isActive ? DashboardStyle.sidebarNavItemActive : DashboardStyle.sidebarNavItem}>
                        Admins
                    </NavLink>
                </nav>

                <button onClick={handleSair} className={DashboardStyle.sidebarLogout}>
                    ↩ Sair
                </button>
            </aside>

            <main className={DashboardStyle.main}>
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
            </main>
        </div>
    )
}
