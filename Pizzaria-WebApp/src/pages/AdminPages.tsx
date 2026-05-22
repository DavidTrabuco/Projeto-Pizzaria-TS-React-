import { Outlet, NavLink } from "react-router"
import { DashboardStyle } from "../components/Admin/styles"
import useAdminLogin from "../hooks/useAdminLogin"

export default function AdminPages() {
    const { handleSair } = useAdminLogin()

    return (
        <div className={DashboardStyle.layout}>
            <aside className={DashboardStyle.sidebar}>
                <div className={DashboardStyle.sidebarLogo}>
                    <p className={DashboardStyle.sidebarLogoLabel}>PIZZA HOUSE</p>
                    <h2 className={DashboardStyle.sidebarLogoTitle}>Área ADM</h2>
                </div>

                <nav className={DashboardStyle.sidebarNav}>
                    <NavLink
                        to="/admin"
                        end
                        className={({ isActive }) =>
                            isActive ? DashboardStyle.sidebarNavItemActive : DashboardStyle.sidebarNavItem
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/admin/pedidos"
                        className={({ isActive }) =>
                            isActive ? DashboardStyle.sidebarNavItemActive : DashboardStyle.sidebarNavItem
                        }
                    >
                        Pedidos
                    </NavLink>
                    <NavLink
                        to="/admin/reservas"
                        className={({ isActive }) =>
                            isActive ? DashboardStyle.sidebarNavItemActive : DashboardStyle.sidebarNavItem
                        }
                    >
                        Reservas
                    </NavLink>
                    <NavLink
                        to="/admin/cardapio"
                        className={({ isActive }) =>
                            isActive ? DashboardStyle.sidebarNavItemActive : DashboardStyle.sidebarNavItem
                        }
                    >
                        Cardápio
                    </NavLink>
                    <NavLink
                        to="/admin/admins"
                        className={({ isActive }) =>
                            isActive ? DashboardStyle.sidebarNavItemActive : DashboardStyle.sidebarNavItem
                        }
                    >
                        Admins
                    </NavLink>
                </nav>

                <button onClick={handleSair} className={DashboardStyle.sidebarLogout}>
                    ↩ Sair
                </button>
            </aside>

            <main className={DashboardStyle.main}>
                <Outlet />
            </main>
        </div>
    )
}
