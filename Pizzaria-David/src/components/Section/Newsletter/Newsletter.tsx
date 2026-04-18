import { NewsletterStyles } from "./style";
import PhotoPizza from "../../../share/Photo/PhotoPizza.jpg";
import PhotoCoffe from "../../../share/Photo/PhotoCoffe.jpg";
import PhotoMaking from "../../../share/Photo/PhotoMaking.jpg";
import AuthorAvatar from "../../../share/Photo/PhotoSmileWithAcellphone.jpg";

interface NewsletterItem {
    id: number;
    cardDate: string;
    cardTitle: string;
    author: string;
    imgAuthor: string;
    cardImage: string;
}

const newsletter: NewsletterItem[] = [
    {
        id: 1,
        cardDate: "Maio 15, 2025",
        cardTitle: "Nova Borda Recheada com Catupiry e Cheddar",
        author: "Lucas Mendes",
        imgAuthor: AuthorAvatar,
        cardImage: PhotoPizza,
    },
    {
        id: 2,
        cardDate: "Maio 10, 2025",
        cardTitle: "Calabresa Especial com Cebola Caramelizada",
        author: "Lucas Mendes",
        imgAuthor: AuthorAvatar,
        cardImage: PhotoCoffe,
    },
    {
        id: 3,
        cardDate: "Abril 28, 2025",
        cardTitle: "Chegou a Pizza de Chocolate com Morango Fresco",
        author: "Lucas Mendes",
        imgAuthor: AuthorAvatar,
        cardImage: PhotoMaking,
    },
]

export default function Newsletter() {
    return (
        <section className={NewsletterStyles.section} style={NewsletterStyles.sectionBg}>

            <div className={NewsletterStyles.header}>
                <h2 className={NewsletterStyles.title}>Recent News</h2>
                <div className={NewsletterStyles.titleUnderline} />
            </div>

            <div className={NewsletterStyles.grid}>
                {newsletter.map((item) => (
                    <div key={item.id} className={NewsletterStyles.card}>
                        <img src={item.cardImage} alt={item.cardTitle} className={NewsletterStyles.cardImage} />
                        <span className={NewsletterStyles.cardDate}>{item.cardDate}</span>
                        <h3 className={NewsletterStyles.cardTitle}>{item.cardTitle}</h3>
                        <div className={NewsletterStyles.author}>
                            <img src={item.imgAuthor} alt="Foto do autor" className={NewsletterStyles.authorAvatar} />
                            <span className={NewsletterStyles.authorName}>{item.author}</span>
                        </div>
                        <div className={NewsletterStyles.getInTouch}>
                            <button className={NewsletterStyles.getInTouchLabel}>GET IN TOUCH</button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
