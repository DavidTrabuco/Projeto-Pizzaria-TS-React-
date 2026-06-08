import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

export type Admin = {
    _id: string
    email: string
}

function getEmailFromToken(): string {
    const token = localStorage.getItem("token_admin")
    if (!token) return ""
    try {
        const payload = JSON.parse(atob(token.split(".")[1]))
        return payload.email ?? ""
    } catch {
        return ""
    }
}

export default function useDashboardAdmins() {
    const [admins, setAdmins] = useState<Admin[]>([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState("")

    // convite
    const [emailConvite, setEmailConvite] = useState("")
    const [senhaConvite, setSenhaConvite] = useState("")
    const [enviando, setEnviando] = useState(false)
    const [mostrarFormConvite, setMostrarFormConvite] = useState(false)

    // edição de senha
    const [editandoId, setEditandoId] = useState<string | null>(null)
    const [senhaAtual, setSenhaAtual] = useState("")
    const [novaSenha, setNovaSenha] = useState("")
    const [salvando, setSalvando] = useState(false)
    const [sucessoEditar, setSucessoEditar] = useState("")

    const emailLogado = getEmailFromToken()
    const navegar = useNavigate()

    useEffect(() => {
        buscarAdmins()
    }, [])

    function validarConvite(email: string, senha: string): boolean {
        if (!email.trim() || !senha.trim()) {
            setErro("Email e senha são obrigatórios.")
            return false
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErro("Email inválido.")
            return false
        }
        if (senha.length < 6) {
            setErro("A senha deve ter pelo menos 6 caracteres.")
            return false
        }
        setErro("")
        return true
    }
    function validarEdicao(senhaAtual:string, novaSenha:string): boolean {
        if (!senhaAtual.trim() || !novaSenha.trim()) {
            setErro("Preencha a senha atual e a nova senha.")
            return false
        }
        if (novaSenha.length < 6) {
            setErro("A nova senha deve ter pelo menos 6 caracteres.")
            return false
        }
        if (senhaAtual === novaSenha) {
            setErro("A nova senha deve ser diferente da atual.")
            return false
        }
        setSalvando(true)
        setErro("")
        return true
    }

    async function buscarAdmins() {
        try {
            const token = localStorage.getItem("token_admin")
            const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/listar`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            if (res.status >= 500) { navegar('/erro-500'); return; }
            if (res.status === 404 || res.status === 400) { navegar('/erro-400'); return; }
            const dados = await res.json()
            setAdmins(Array.isArray(dados) ? dados : [])
        } catch {
            navegar('/erro-500');
        } finally {
            setCarregando(false)
        }
    }

    async function handleConvidar() {
        if (!validarConvite(emailConvite, senhaConvite)) return
        setEnviando(true)
        try {
            const token = localStorage.getItem("token_admin")
            const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/criar`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ email: emailConvite, senha: senhaConvite }),
            })
            if (res.status >= 500) { navegar('/erro-500'); return; }
            if (res.status === 404 || res.status === 400) { navegar('/erro-400'); return; }
            setEmailConvite("")
            setSenhaConvite("")
            setMostrarFormConvite(false)
            buscarAdmins()
        } catch {
            navegar('/erro-500');
        } finally {
            setEnviando(false)
        }
    }

    function abrirEdicao(id: string) {
        setEditandoId(id)
        setSenhaAtual("")
        setNovaSenha("")
        setSucessoEditar("")
        setErro("")
    }

    function cancelarEdicao() {
        setEditandoId(null)
        setSenhaAtual("")
        setNovaSenha("")
        setSucessoEditar("")
        setErro("")
    }

    async function handleEditar() {
        if (!validarEdicao(senhaAtual, novaSenha)) return


        
        try {
            const token = localStorage.getItem("token_admin")
            const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/editar`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ senhaAtual, novaSenha }),
            })
            if (res.status >= 500) { navegar('/erro-500'); return; }
            if (res.status === 404 || res.status === 400) { navegar('/erro-400'); return; }
            const dados = await res.json()
            if (dados.mensagem === "Senha atualizada com sucesso!") {
                setSucessoEditar(dados.mensagem)
                setSenhaAtual("")
                setNovaSenha("")
            } else {
                setErro(dados.mensagem ?? "Erro ao atualizar senha.")
            }
        } catch {
            navegar('/erro-500');
        } finally {
            setSalvando(false)
        }
    }

    return {
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
    }
}
