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
                        Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
                        Facilisis eget cras semper sit enim. Turpis aliquet at ac eu donec.
                        Sagittis vestibulum at quis non massa netus.
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
                        Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
                        Facilisis eget cras semper sit enim. Turpis aliquet at ac eu donec.
                        Sagittis vestibulum at quis non massa netus.
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
                        Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
                        Facilisis eget cras semper sit enim. Turpis aliquet at ac eu donec.
                        Sagittis vestibulum at quis non massa netus.
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
