import { useState, useEffect } from "react"

export type StatusPedido = "pendente" | "confirmado" | "em preparo" | "saiu para entrega" | "entregue"

export interface Pedido {
    _id: string
    nomeCliente: string
    itens: string[]
    total: number
    status: StatusPedido
}

export default function useDashboardPedidos() {
    const [pedidos, setPedidos] = useState<Pedido[]>([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState("")
    const [filtroStatus, setFiltroStatus] = useState<StatusPedido | "todos">("todos")

    useEffect(() => {
        buscarPedidos()
    }, [])

    async function buscarPedidos() {
        setCarregando(true)
        try {
            const token = localStorage.getItem("token_admin")
            const res = await fetch(`${import.meta.env.VITE_API_URL}/pedidos`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            const dados = await res.json()
            setPedidos(Array.isArray(dados) ? dados : [])
        } catch {
            setErro("Erro ao carregar pedidos.")
        } finally {
            setCarregando(false)
        }
    }

    const pedidosFiltrados = filtroStatus === "todos"
        ? pedidos
        : pedidos.filter((p) => p.status === filtroStatus)

    const totalAguardando  = pedidos.filter((p) => p.status === "pendente").length
    const totalPreparando  = pedidos.filter((p) => p.status === "pendente").length
    const totalEntregues   = pedidos.filter((p) => p.status === "confirmado").length
    const faturamento      = pedidos.filter((p) => p.status === "confirmado").reduce((acc, p) => acc + p.total, 0)

    return {
        pedidos: pedidosFiltrados,
        carregando,
        erro,
        filtroStatus,
        setFiltroStatus,
        buscarPedidos,
        totalAguardando,
        totalPreparando,
        totalEntregues,
        faturamento,
    }
}
