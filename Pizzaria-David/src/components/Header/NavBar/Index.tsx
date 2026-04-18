import { NavBarStyles } from "./styles"
import logo from "../../../share/Logo/Logo.png";
import { NavLink } from "react-router";
import Login from "../../Login/Login";
import useNavbar from "../../../hooks/useNavbar";

interface NavItem {
    nome: string;
    to: string;
}

const links: NavItem[] = [
    { nome: "Home", to: "/" },
    { nome: "About Us", to: "/about" },
    { nome: "Menu", to: "/menu" },
    { nome: "App", to: "/app" },
    { nome: "Newsletter", to: "/newsletter" },
    { nome: "Contact", to: "/contact" },
]

export default function Index() {
    const { menuAberto, setMenuAberto, loginOpen, setLoginOpen, nomeUsuario, fecharMenu, handleSair } = useNavbar();
    return (
        <>
            <nav className={NavBarStyles.backgroundColor}>
                <ul className={NavBarStyles.default}>

                    <li>
                        <NavLink to="/">
                            <img src={logo} alt="Logo da Pizzaria" className={NavBarStyles.NavbarLogo} />
                        </NavLink>
                    </li>

                    <li>
                        <ul className={NavBarStyles.navCenter}>
                            {links.map((link) => (
                                <li key={link.to}>
                                    <NavLink to={link.to} className={NavBarStyles.itemMenuTheme}>
                                        {link.nome}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className={NavBarStyles.buttonGroup}>
                        <NavLink to="/reservation">
                            <button className={NavBarStyles.button}>Reservation</button>
                        </NavLink>

                        {nomeUsuario ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <button
                                    className={NavBarStyles.buttonLogin}
                                    onClick={handleSair}
                                >
                                    Sair
                                </button>
                                <span className={NavBarStyles.itemMenuTheme}>
                                    Olá, {nomeUsuario}!
                                </span>
                            </div>
                        ) : (
                            <button
                                className={NavBarStyles.buttonLogin}
                                onClick={() => setLoginOpen(true)}
                            >
                                Fazer Login
                            </button>
                        )}

                        <button
                            className={NavBarStyles.hamburger}
                            onClick={() => setMenuAberto(!menuAberto)}
                        >
                            <span className={NavBarStyles.hamburgerLine}></span>
                            <span className={NavBarStyles.hamburgerLine}></span>
                            <span className={NavBarStyles.hamburgerLine}></span>
                        </button>
                    </li>

                </ul>

                {menuAberto && (
                    <div className={NavBarStyles.mobileMenu}>
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={NavBarStyles.mobileLink}
                                onClick={fecharMenu}
                            >
                                {link.nome}
                            </NavLink>
                        ))}
                        {nomeUsuario ? (
                            <a className={NavBarStyles.mobileLink} onClick={handleSair}>Sair</a>
                        ) : (
                            <a className={NavBarStyles.mobileLink} onClick={() => { setLoginOpen(true); fecharMenu(); }}>Fazer Login</a>
                        )}
                        <a href="/reservation" className={NavBarStyles.mobileLink} onClick={fecharMenu}>Fazer Reserva</a>
                    </div>
                )}
            </nav>

            <Login
                isOpen={loginOpen}
                onClose={() => setLoginOpen(false)}
            />
        </>
    )
}
