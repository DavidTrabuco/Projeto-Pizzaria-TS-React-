import './index.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import AboutUsPage from './pages/AboutUsPage'
import MenuPage from './pages/MenuPage'
import AppPage from './pages/AppPage'
import NewsletterPage from './pages/NewsletterPage'
import ContactPage from './pages/ContactPage'
import Reservation from './components/Reservation/Reservation'
import Login from './pages/Login'
import AdminLogin from './components/AdminLogin/AdminLogin'
import Pedidos from './pages/Pedido'
import Cadastro from './pages/Cadastro'
import AdminPages from './pages/AdminPages'
import Dashboard from './components/Admin/Dashboard'

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/app" element={<AppPage />} />
                <Route path="/newsletter" element={<NewsletterPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/order" element={<Pedidos />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/admin" element={<AdminPages />}>
                    <Route index element={<Dashboard />} />
                    <Route path="pedidos" element={<div><h1>Pedidos</h1></div>} />
                    <Route path="reservas" element={<div><h1>Reservas</h1></div>} />
                    <Route path="cardapio" element={<div><h1>Cardápio</h1></div>} />
                    <Route path="admins" element={<div><h1>Admins</h1></div>} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
