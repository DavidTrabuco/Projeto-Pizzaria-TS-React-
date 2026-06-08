import { Tela400Styles } from './style';

export default function Tela400() {
    return (
        <>
            <div className={Tela400Styles.grid}>
                <div className={Tela400Styles.card}>
                    <h1 className={Tela400Styles.title}>ERRO 404 !</h1>
                    <p className={Tela400Styles.message}>
                        OPS! A página que você está procurando não foi encontrada.
                    </p>
                    <h2 className={Tela400Styles.subtitle}>
                        Verifique o endereço digitado ou volte para a página inicial.
                    </h2>
                    <button className={Tela400Styles.button}>
                        <a href="/">Voltar para Home</a>
                    </button>
                </div>
            </div>
        </>
    )
}
