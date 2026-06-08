import { OrderStyle as S } from "./style";
import type { ItemPedido } from "../../hooks/usePedidos";
import type { FormEvent } from "react";

interface CarrinhoProps {
    isOpen: boolean;
    onClose: () => void;
    nomeCliente: string;
    setNomeCliente: (v: string) => void;
    itens: ItemPedido[];
    removerItem: (index: number) => void;
    totalCalculado: number;
    erros: Record<string, string>;
    enviando: boolean;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function Carrinho({
    isOpen,
    onClose,
    nomeCliente,
    setNomeCliente,
    itens,
    removerItem,
    totalCalculado,
    erros,
    enviando,
    handleSubmit,
}: CarrinhoProps) {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className={S.backdrop} onClick={handleBackdropClick}>
            <div className={S.card}>
                <button className={S.closeBtn} onClick={onClose}>✕</button>

                <p className={S.label}>Pizza House</p>
                <h2 className={S.subtitle}>Resumo do Pedido</h2>
                <div className={S.divider}></div>

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

                    <button className={S.button} type="submit" disabled={enviando}>
                        Ir para Pagamento
                    </button>

                    <button className={S.buttonCancelar} type="button" onClick={onClose}>
                        Cancelar
                    </button>

                </form>
            </div>
        </div>
    );
}
