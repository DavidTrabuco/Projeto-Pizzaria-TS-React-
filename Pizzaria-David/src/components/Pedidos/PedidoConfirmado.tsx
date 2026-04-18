import { NavLink } from "react-router";
import { OrderStyle, OrderConfirmationStyles as S } from "./style";
import { type PedidoConfirmado } from "../../hooks/usePedidos";

interface PedidoConfirmadoProps {
    pedido: PedidoConfirmado;
}

export default function PedidoConfirmado({ pedido }: PedidoConfirmadoProps) {
    return (
        <section className={OrderStyle.section}>
            <div className={OrderStyle.card}>

                <p className={OrderStyle.label}>Pizza House</p>
                <h1 className={OrderStyle.title}>Pedido Confirmado</h1>
                <div className={OrderStyle.divider}></div>

                <div className={S.header}>
                    <span className={S.emoji}>🍕</span>
                    <p className={S.mensagem}>Pagamento confirmado! Seu pedido está sendo preparado.</p>
                </div>

                <div className={S.lista}>
                    <div className={S.infoBox}>
                        <span className={S.infoLabel}>Nº do Pedido</span>
                        <p className={S.infoNumero}>#{pedido.id}</p>
                    </div>
                    <div className={S.infoBox}>
                        <span className={S.infoLabel}>Cliente</span>
                        <p className={S.infoTexto}>{pedido.nomeCliente}</p>
                    </div>
                    <div className={S.infoBox}>
                        <span className={S.infoLabel}>Itens</span>
                        {pedido.itens.map((it, i) => (
                            <p key={i} className={S.infoItem}>• {it}</p>
                        ))}
                    </div>
                    <div className={S.infoBox}>
                        <span className={S.infoLabel}>Total</span>
                        <p className={S.infoTotal}>R$ {pedido.total.toFixed(2)}</p>
                    </div>
                    <div className={S.infoBox}>
                        <span className={S.infoLabel}>Status</span>
                        <p className={S.infoStatus}>{pedido.status}</p>
                    </div>
                </div>

                <button className={S.buttonVoltar}>
                    <NavLink to="/menu">Fazer outro pedido</NavLink>
                </button>
                <button className={S.buttonVoltar}>
                    <NavLink to="/">Voltar para o início</NavLink>
                </button>
            </div>
        </section>
    );
}
