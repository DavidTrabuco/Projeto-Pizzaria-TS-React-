import { PaymentStyles } from "./style";
import { OrderStyle } from "./style";
import usePagamento, { type DadosPagamento } from "../../hooks/usePagamento";

interface PedidoResumo {
    itens: string[];
    total: number;
}

interface PagamentosProps {
    pedido: PedidoResumo;
    onConfirmar: (dados: DadosPagamento) => void;
    onCancelar: () => void;
    enviando: boolean;
}

export default function Pagamentos({ pedido, onConfirmar, onCancelar, enviando }: PagamentosProps) {
    const {
        cardHolder,
        setCardHolder,
        cardNumber,
        setCardNumber,
        expiryDate,
        setExpiryDate,
        cvv,
        setCvv,
        erros,
        handleSubmit,
        formatarCartao,
        formatarValidade,
    } = usePagamento(onConfirmar);

    return (
        <section className={OrderStyle.section}>
            <div className={OrderStyle.pageWrapper}>

                <p className={OrderStyle.label}>Pizza House</p>
                <h1 className={OrderStyle.title}>Pagamento</h1>
                <div className={OrderStyle.divider}></div>

                <div className={`${PaymentStyles.resumoBox} w-full max-w-lg mb-4`}>
                    <p className={PaymentStyles.resumoLabel}>Resumo do pedido</p>
                    <p className={PaymentStyles.resumoItens}>
                        {pedido.itens.join(' • ')}
                    </p>
                    <p className={PaymentStyles.resumoTotal}>Total: R$ {pedido.total.toFixed(2)}</p>
                </div>

                <div className={PaymentStyles.modal}>
                    <form className={PaymentStyles.form} onSubmit={handleSubmit}>

                        <div className={PaymentStyles.separator}>
                            <hr className={PaymentStyles.separatorLine} />
                            <p className={PaymentStyles.separatorText}>pagar com cartão de crédito</p>
                            <hr className={PaymentStyles.separatorLine} />
                        </div>

                        <div className={PaymentStyles.creditCardForm}>

                            <div className={PaymentStyles.inputContainer}>
                                <label className={PaymentStyles.inputLabel}>Nome do titular</label>
                                <input
                                    className={PaymentStyles.input}
                                    type="text"
                                    placeholder="Nome completo como no cartão"
                                    value={cardHolder}
                                    onChange={(e) => setCardHolder(e.target.value)}
                                />
                                {erros.cardHolder && <span className={PaymentStyles.erroSpan}>{erros.cardHolder}</span>}
                            </div>

                            <div className={PaymentStyles.inputContainer}>
                                <label className={PaymentStyles.inputLabel}>Número do Cartão</label>
                                <input
                                    className={PaymentStyles.input}
                                    type="text"
                                    placeholder="0000 0000 0000 0000"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(formatarCartao(e.target.value))}
                                    maxLength={19}
                                />
                                {erros.cardNumber && <span className={PaymentStyles.erroSpan}>{erros.cardNumber}</span>}
                            </div>

                            <div className={PaymentStyles.inputContainer}>
                                <label className={PaymentStyles.inputLabel}>Validade / CVV</label>
                                <div className={PaymentStyles.splitRow}>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <input
                                            className={PaymentStyles.input}
                                            type="text"
                                            placeholder="MM/AA"
                                            value={expiryDate}
                                            onChange={(e) => setExpiryDate(formatarValidade(e.target.value))}
                                            maxLength={5}
                                        />
                                        {erros.expiryDate && <span className={PaymentStyles.erroSpan}>{erros.expiryDate}</span>}
                                    </div>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <input
                                            className={PaymentStyles.input}
                                            type="text"
                                            placeholder="CVV"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                            maxLength={4}
                                        />
                                        {erros.cvv && <span className={PaymentStyles.erroSpan}>{erros.cvv}</span>}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <button
                            className={PaymentStyles.checkoutButton}
                            type="submit"
                            disabled={enviando}
                        >
                            {enviando ? 'Processando...' : `Pagar R$ ${pedido.total.toFixed(2)}`}
                        </button>

                        <button
                            className={PaymentStyles.cancelButton}
                            type="button"
                            onClick={onCancelar}
                            disabled={enviando}
                        >
                            Voltar ao Pedido
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}
