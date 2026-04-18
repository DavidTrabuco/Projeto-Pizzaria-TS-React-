import { NavLink } from "react-router";
import { HomeStyles } from "./style";

export default function Home() {
    return (
        <section className={HomeStyles.section} style={HomeStyles.sectionBackground}>

            <div className={HomeStyles.overlay} />

            <div className={HomeStyles.content}>
                <h3 className={HomeStyles.subtitle}>HELLO, NEW FRIEND</h3>
                <h1 className={HomeStyles.title}>Welcome to Our Pizzaria</h1>

                <div className={HomeStyles.buttonGroup}>
                    <button className={HomeStyles.buttonBookTable}><NavLink to="/reservation">BOOK A TABLE</NavLink></button>
                    <button className={HomeStyles.buttonOpenMenu}><NavLink to="/menu">OPEN MENU</NavLink></button>
                </div>
            </div>

        </section>
    );
}
