import { NavLink, useNavigate } from "react-router";
import { MenuStyles } from './style';
import { Pratos } from '../../../share/data/pratos';

export default function Menu() {
    const navigate = useNavigate();

    return (
        <>
            <section className={MenuStyles.section} style={MenuStyles.sectionBg}>

                <div className={MenuStyles.header}>
                    <span className={MenuStyles.label}>MENU</span>
                    <h2 className={MenuStyles.title}>Explore Our Foods</h2>
                    <p className={MenuStyles.description}>
                        Na Pizzaria-Trabuco, nós transformamos água, farinha e paixão na verdadeira experiência da pizza artesanal. 
                        Nosso compromisso é levar até a sua mesa um produto feito com ingredientes selecionados, frescas e de 
                        altíssima qualidade.
                    </p>
                    <NavLink to='/Order'>
                        <button className={MenuStyles.buttonLogin}>Fazer pedidos</button>
                    </NavLink>
                </div>

                <div className={MenuStyles.grid}>
                    {Pratos.map((prato) => (
                        <div key={prato.id} className={MenuStyles.card}>
                            <div className={MenuStyles.cardImageWrapper}>
                                <img src={prato.img} alt={prato.cardName} className={MenuStyles.cardImage} />
                            </div>
                            <div className={MenuStyles.cardBody}>
                                <h4 className={MenuStyles.cardName}>{prato.cardName}</h4>
                                <p className={MenuStyles.cardMeta}>{prato.cardMeta}</p>
                                <div className={MenuStyles.pricing}>
                                    <span className={MenuStyles.price}>R$ {prato.preco.toFixed(2)}</span>
                                    <span className={MenuStyles.oldPrice}>{prato.cardOldprice}</span>
                                </div>
                                <button className={MenuStyles.button} onClick={() => navigate('/order', { state: { prato } })}>Pedir agora</button>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}
