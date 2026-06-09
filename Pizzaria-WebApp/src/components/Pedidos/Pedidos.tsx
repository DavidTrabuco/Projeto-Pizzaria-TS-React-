import { useState } from "react";
import { NavLink } from "react-router";
import { OrderStyle as S } from "./style";
import { usePedidos } from "../../hooks/usePedidos";
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
        pedidoConfirmado,categoriaFiltro,setCategoriaFiltro, pratosFiltrados
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
                    <NavLink to="/menu" className={S.buttonVoltarSmall}>← Voltar</NavLink>
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
                            <span className={S.cartBadge}>{itens.reduce((acc, i) => acc + i.quantidade, 0)}</span>
                        )}
                    </div>
                </div>
                <div className={S.buttonGrid}>
                    <button onClick={() => setCategoriaFiltro("Todos")} className={categoriaFiltro === "Todos" ? S.buttonOutlineActive : S.buttonOutline}>
                        Todos
                    </button>
                    <button onClick={() => setCategoriaFiltro("Pizza")} className={categoriaFiltro === "Pizza" ? S.buttonOutlineActive : S.buttonOutline}>
                        Pizza
                    </button>
                    <button onClick={() => setCategoriaFiltro("Sobremesa")} className={categoriaFiltro === "Sobremesa" ? S.buttonOutlineActive : S.buttonOutline}>
                        Sobremesa
                    </button>
                    <button onClick={() => setCategoriaFiltro("Bebidas")} className={categoriaFiltro === "Bebidas" ? S.buttonOutlineActive : S.buttonOutline}>
                        Bebidas
                    </button>
                </div>

                
                <div className={S.menuGrid}>
                    {pratosFiltrados.map((prato) => (
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

                
            </div>

           

            <Carrinho
                isOpen={carrinhoAberto}
                onClose={() => setCarrinhoAberto(false)}
                nomeCliente={nomeCliente}
                setNomeCliente={setNomeCliente}
                itens={itens}
                adicionarItem={adicionarItem}
                removerItem={removerItem}
                totalCalculado={totalCalculado}
                erros={erros}
                enviando={enviando}
                handleSubmit={handleSubmit}
            />
        </section>
    );
}
