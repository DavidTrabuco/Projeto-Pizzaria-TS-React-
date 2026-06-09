import './index.css'
import { Routes, Route } from 'react-router'
import FAQFlutuante from './components/Information/FAQ/FAQ'
import Home from './pages/Home'
import AboutUsPage from './pages/AboutUsPage'
import MenuPage from './pages/MenuPage'
import AppPage from './pages/AppPage'
import NewsletterPage from './pages/NewsletterPage'
import ContactPage from './pages/ContactPage'
import Reservation from './components/Reservation/Reservation'
import Login from './pages/Login'
import SenhaScreen from './pages/EsqueceuSenha'
import AdminLogin from './components/AdminLogin/AdminLogin'
import Pedidos from './pages/Pedido'
import Cadastro from './pages/Cadastro'
import AdminPages from './pages/AdminPages'
import Dashboard from './components/Admin/Dashboard'
import DashboardAdmin from './pages/DashboardAdmins'
import DashboardPedidosPage from './pages/DasboardPedidos'
import DashboardReservasPages from './pages/DashboardReservas'
import Tela500 from './components/Information/Tela_500'
import Tela400 from './components/Information/Tela_400'

//teste de comit aqui
function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <FAQFlutuante />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/app" element={<AppPage />} />
                <Route path="/newsletter" element={<NewsletterPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/esqueciSenha" element={<SenhaScreen />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/order" element={<Pedidos />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/admin" element={<AdminPages />}>
                    <Route index element={<Dashboard />} />
                    <Route path="pedidos" element={<DashboardPedidosPage />} />
                    <Route path="reservas" element={<div><DashboardReservasPages /></div>} />
                    <Route path="cardapio" element={<div><h1>Cardápio</h1></div>} />
                    <Route path="admins" element={<DashboardAdmin />} />
                </Route>
                <Route path="/erro-500" element={<Tela500 />} />
                <Route path="/erro-400" element={<Tela400 />} />
                <Route path="*" element={<Tela400 />} />
            </Routes>
        </div>
    )
}

export default App
