import { FooterStyle } from "./style";

const HourOpen = () => {
    return (
        <div className={FooterStyle.hourCard}>
            <h3 className={FooterStyle.hourBrand}>Pizzaria David </h3>
            <p className={FooterStyle.hourSub}>Fast Food Restaurant</p>
            <p className={FooterStyle.hourSchedule}>Tuesday – Saturday: 12:00pm – 23:00pm<br />Closed on Sunday</p>
            <p className={FooterStyle.hourRating}>5 star rated on TripAdvisor</p>
        </div>
    )
}

const About = () => {
    return (
        <>
            <h4 className={FooterStyle.colTitle}>About</h4>
            <ul className={FooterStyle.colList}>
                <li className={FooterStyle.colItemTheme}><a href="#">Fredoka One</a></li>
                <li className={FooterStyle.colItemTheme}><a href="#">Special Dish</a></li>
                <li className={FooterStyle.colItemTheme}><a href="#">Reservation</a></li>
                <li className={FooterStyle.colItemTheme}><a href="#">Contact</a></li>
            </ul>
        </>
    )
}

const Menu = () => {
    return (
        <>
            <h4 className={FooterStyle.colTitle}>Menu</h4>
            <ul className={FooterStyle.colList}>
                <li className={FooterStyle.colItemTheme}><a href="#">Steaks</a></li>
                <li className={FooterStyle.colItemTheme}><a href="#">Burgers</a></li>
                <li className={FooterStyle.colItemTheme}><a href="#">Coctails</a></li>
                <li className={FooterStyle.colItemTheme}><a href="#">Bar B Q</a></li>
                <li className={FooterStyle.colItemTheme}><a href="#">Desserts</a></li>
            </ul>
        </>
    )
}

const Newsletter = () => {
    return (
        <>
            <div>
                <h4 className={FooterStyle.newsletterTitle}>Newsletter</h4>
                <p className={FooterStyle.newsletterText}>Get recent news and updates.</p>
                <input className={FooterStyle.newsletterInput} type="email" placeholder="Email Address" required />
                <button type="submit" className={FooterStyle.newsletterBtn}>Subscribe</button>
            </div>
        </>
    )
}

export default function Index() {
    return (
        <footer className={FooterStyle.footer} style={FooterStyle.footerStyle}>

            <div className={FooterStyle.grid}>
                <HourOpen />
                <About />
                <Menu />
                <Newsletter />
            </div>

            <p className={FooterStyle.copyright}>© 2024 Pizzaria David . All rights reserved.</p>

        </footer>
    )
}
