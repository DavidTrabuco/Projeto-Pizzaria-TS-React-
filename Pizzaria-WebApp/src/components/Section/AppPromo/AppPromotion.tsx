import { AppPromotionStyles } from "./style";
import Photo from "../../../share/Photo/PhotoSmileWithACellphone.jpg";

export default function AppPromotion() {
    return (
        <>
            <section className={AppPromotionStyles.section} style={AppPromotionStyles.sectionBg}>

                <div className={AppPromotionStyles.left}>
                    <span className={AppPromotionStyles.badge}>PEÇA SUA PIZZA FAVORITA</span>

                    <h2 className={AppPromotionStyles.title}>
                        De qualquer lugar, a qualquer hora!
                    </h2>

                    <p className={AppPromotionStyles.description}>
                        Sua pizzaria está no 99Food e no iFood — agora é só escolher, pedir e
                        receber quentinha em casa, no trabalho ou onde quiser.
                    </p>

                    <ul className={AppPromotionStyles.list}>
                        <li className={AppPromotionStyles.listItem}>
                            <span className={AppPromotionStyles.listIcon}>✓</span>
                            Peça sua pizza favorita a partir de qualquer lugar
                        </li>
                        <li className={AppPromotionStyles.listItem}>
                            <span className={AppPromotionStyles.listIcon}>✓</span>
                            Entrega rápida e segura
                        </li>
                        <li className={AppPromotionStyles.listItem}>
                            <span className={AppPromotionStyles.listIcon}>✓</span>
                            Promoções exclusivas e cupons do app
                        </li>
                        <li className={AppPromotionStyles.listItem}>
                            <span className={AppPromotionStyles.listIcon}>✓</span>
                            Acompanhe o pedido em tempo real
                        </li>
                        <li className={AppPromotionStyles.listItem}>
                            <span className={AppPromotionStyles.listIcon}>✓</span>
                            Pagamento fácil (pix, cartão, carteira digital)
                        </li>
                        <li className={AppPromotionStyles.listItem}>
                            <span className={AppPromotionStyles.listIcon}>✓</span>
                            Primeira compra com desconto especial
                        </li>
                    </ul>

                    <p className={AppPromotionStyles.cta}>Escolha sua plataforma preferida e peça agora!</p>

                    <div className={AppPromotionStyles.buttons}>
                        <button className={AppPromotionStyles.btn}>
                            <span>📱</span>
                            <span className={AppPromotionStyles.btnLabel}>
                                <span className={AppPromotionStyles.btnSub}>DISPONÍVEL NO</span>
                                <span className={AppPromotionStyles.btnName}>99Food</span>
                            </span>
                        </button>

                        <button className={AppPromotionStyles.btn}>
                            <span>📱</span>
                            <span className={AppPromotionStyles.btnLabel}>
                                <span className={AppPromotionStyles.btnSub}>DISPONÍVEL NO</span>
                                <span className={AppPromotionStyles.btnName}>iFood</span>
                            </span>
                        </button>
                    </div>
                </div>

                <div className={AppPromotionStyles.right}>
                    <img
                        src={Photo}
                        alt="Celular mostrando pedido de pizza no app"
                        className={AppPromotionStyles.image}
                    />
                </div>

            </section>
        </>
    )
}
