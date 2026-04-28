import { NavLink } from "react-router";
import { OrderStyle as S } from "./style";
import { usePedidos } from "../../hooks/usePedidos";
import { Pratos } from "../../share/data/pratos";
import PedidoConfirmado from "./PedidoConfirmado";
import Pagamentos from "./Pagamentos";

export default function Pedidos() {
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

                <p className={S.sectionLabel}>Selecione os itens</p>
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

                <div className={S.card}>
                    <h2 className={S.subtitle}>Resumo do Pedido</h2>

                    <form className={S.form} onSubmit={handleSubmit}>

                        <div className={S.inputGroup}>
                            <label className={S.inputLabel}>Nome</label>
                            <input
                                className={S.input}
                                type="text"
                                placeholder="Seu nome completo"
                                value={nomeCliente}
                                onChange={(e) => setNomeCliente(e.target.value)}
                            />
                            {erros.nomeCliente && <span className={S.erroSpan}>{erros.nomeCliente}</span>}
                        </div>

                        <div className={S.inputGroup}>
                            <label className={S.inputLabel}>Itens Selecionados</label>
                            {itens.length === 0 ? (
                                <p className={S.itemVazio}>Nenhum item selecionado ainda</p>
                            ) : (
                                <ul>
                                    {itens.map((it, index) => (
                                        <li key={index} className={S.itemLinha}>
                                            <span>• {it.nome}</span>
                                            <div className={S.itemActions}>
                                                <span className={S.itemPreco}>R$ {it.preco.toFixed(2)}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => removerItem(index)}
                                                    className={S.itemRemover}
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {erros.itens && <span className={S.erroSpan}>{erros.itens}</span>}
                        </div>

                        <div className={S.inputGroup}>
                            <label className={S.inputLabel}>Total</label>
                            <input
                                className={S.inputReadOnly}
                                type="text"
                                value={`R$ ${totalCalculado.toFixed(2)}`}
                                readOnly
                            />
                        </div>

                        <div className={S.inputGroup}>
                            <label className={S.inputLabel}>Status</label>
                            <input
                                className={S.inputReadOnly}
                                type="text"
                                value="pendente"
                                readOnly
                            />
                        </div>

                        <button className={S.button} type="submit" disabled={enviando}>
                            Ir para Pagamento
                        </button>
                    </form>

                    <button className={S.buttonVoltar}>
                        <NavLink to="/menu">Voltar para o Menu</NavLink>
                    </button>
                </div>
            </div>
        </section>
    );
}
