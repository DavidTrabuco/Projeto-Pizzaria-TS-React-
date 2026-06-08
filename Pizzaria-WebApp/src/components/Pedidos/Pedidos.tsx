import { useState } from "react";
import { NavLink } from "react-router";
import { OrderStyle as S } from "./style";
import { usePedidos } from "../../hooks/usePedidos";
import { Pratos } from "../../share/data/pratos";
import PedidoConfirmado from "./PedidoConfirmado";
import Pagamentos from "./Pagamentos";
import Carrinho from "./Carrinho";

export default function Pedidos() {
    const [carrinhoAberto, setCarrinhoAberto] = useState(false);

    const {
        nomeCliente, setNomeCliente,
        itens, adicionarItem, removerItem,
        totalCalculado,
        erros, enviando, handleSubmit,
        pedidoPendente, handlePagamento, cancelarPagamento,
        pedidoConfirmado,
    } = usePedidos();

    if (pedidoConfirmado) {
        return <PedidoConfirmado pedido={pedidoConfirmado} />;
    }

    if (pedidoPendente) {
        return (
            <Pagamentos
                pedido={pedidoPendente}
                onConfirmar={handlePagamento}
                onCancelar={cancelarPagamento}
                enviando={enviando}
            />
        );
    }

    return (
        <section className={S.section}>
            <div className={S.pageWrapper}>

                <p className={S.label}>Pizza House</p>
                <h1 className={S.title}>Fazer Pedido</h1>
                <div className={S.divider}></div>

                <div className={S.sectionRow}>
                    <p className={S.sectionLabel}>Selecione os itens</p>
                    <div className={S.cartBtnWrapper}>
                        <button
                            onClick={() => setCarrinhoAberto(true)}
                            aria-label="Abrir carrinho"
                            className={S.cartBtnGrid}
                        >
                            🛒
                        </button>
                        {itens.length > 0 && (
                            <span className={S.cartBadge}>{itens.length}</span>
                        )}
                    </div>
                </div>
                <div className={S.menuGrid}>
                    {Pratos.map((prato) => (
                        <button
                            key={prato.id}
                            type="button"
                            onClick={() => adicionarItem(prato.cardName, prato.preco)}
                            className={S.menuCard}
                        >
                            <img src={prato.img} alt={prato.cardName} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                            <div className={S.menuCardBody}>
                                <p className={S.menuCardName}>{prato.cardName}</p>
                                <p className={S.menuCardPrice}>R$ {prato.preco.toFixed(2)}</p>
                            </div>
                        </button>
                    ))}
                </div>

                <NavLink to="/menu" className={S.buttonVoltar}>Voltar para o Menu</NavLink>
            </div>

           

            <Carrinho
                isOpen={carrinhoAberto}
                onClose={() => setCarrinhoAberto(false)}
                nomeCliente={nomeCliente}
                setNomeCliente={setNomeCliente}
                itens={itens}
                removerItem={removerItem}
                totalCalculado={totalCalculado}
                erros={erros}
                enviando={enviando}
                handleSubmit={handleSubmit}
            />
        </section>
    );
}
