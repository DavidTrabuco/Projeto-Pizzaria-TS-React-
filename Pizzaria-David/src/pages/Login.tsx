import { useNavigate } from 'react-router'
import LoginModal from '../components/Login/Login'

export default function LoginPage() {
    const navigate = useNavigate()

    return (
        <LoginModal
            isOpen={true}
            onClose={() => navigate('/')}
        />
    )
}
