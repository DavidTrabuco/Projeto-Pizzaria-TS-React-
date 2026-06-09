import { AboutUsStyles } from "./styles";
import PhotoPizza from "../../../share/Photo/PhotoPizza.jpg";
import PhotoCoffe from "../../../share/Photo/PhotoCoffe.jpg";
import PhotoMaking from "../../../share/Photo/PhotoMaking.jpg";

export default function AboutUs() {
    return (
        <section className={AboutUsStyles.section} style={AboutUsStyles.sectionBg}>

            <div className={AboutUsStyles.sectionHeader}>
                <span className={AboutUsStyles.sectionLabel}>OUR STORY</span>
                <div className={AboutUsStyles.sectionDivider} />
            </div>

            <div className={AboutUsStyles.rowReverse}>
                <div className={AboutUsStyles.textBlock}>
                    <span className={AboutUsStyles.label}>ABOUT US</span>
                    <h3 className={AboutUsStyles.title}>
                        We Invite You to Visit Our Pizzaria House
                    </h3>
                    <p className={AboutUsStyles.paragraph}>
                        Do molho de tomate artesanal aos queijos e embutidos nobres, cada item do nosso cardápio é escolhido a dedo. 
                        Combinamos a tradição das receitas clássicas com a criatividade de sabores exclusivos que você só encontra aqui.
                    </p>
                    <button className={AboutUsStyles.button}>READ MORE</button>
                </div>
                <div className={AboutUsStyles.imageBlock}>
                    <img src={PhotoPizza} alt="Chef preparing dish" className={AboutUsStyles.image} />
                </div>
            </div>

            <div className={AboutUsStyles.row}>
                <div className={AboutUsStyles.imageBlock}>
                    <img src={PhotoCoffe} alt="Chef plating food" className={AboutUsStyles.image} />
                </div>
                <div className={AboutUsStyles.textBlock}>
                    <span className={AboutUsStyles.label}>COFFEE MENU</span>
                    <h3 className={AboutUsStyles.title}>Quality Kava Beans with our Barist</h3>
                    <p className={AboutUsStyles.paragraph}>
                       Uma boa pizza começa pela base. Nossa massa passa por um processo de longa fermentação, o que garante uma textura 
                       incrivelmente leve, bordas aeradas, crocantes por fora e macias por dentro.
                        Além de muito mais saborosa, ela é de fácil digestão para que você aproveite cada pedaço sem pressa.
                    </p>
                    <button className={AboutUsStyles.button}>READ MORE</button>
                </div>
            </div>

            <div className={AboutUsStyles.rowReverse}>
                <div className={AboutUsStyles.textBlock}>
                    <span className={AboutUsStyles.label}>OUR TEAM</span>
                    <h3 className={AboutUsStyles.title}>
                        Use the Tips & Recipes of Our Pizzaiolo
                    </h3>
                    <p className={AboutUsStyles.paragraph}>
                       Bateu a vontade e não quer sair de casa? Deixe com a gente! Nossa equipe de entrega é treinada para que a sua pizza chegue rápida,
                        intacta e saindo fumaça. Utilizamos embalagens térmicas especiais que preservam a crocância da borda e mantêm o queijo perfeitamente derretido. Clique no botão abaixo e faça o seu pedido em poucos minutos!
                    </p>
                    <button className={AboutUsStyles.button}>READ MORE</button>
                </div>
                <div className={AboutUsStyles.imageBlock}>
                    <img src={PhotoMaking} alt="Barista making coffee" className={AboutUsStyles.image} />
                </div>
            </div>

        </section>
    );
}
