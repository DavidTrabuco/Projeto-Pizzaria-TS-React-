import { Tela500Styles } from "./style";

export default function Tela500() {


    return (
        <>

            <div className={Tela500Styles.grid}>

                <div className={Tela500Styles.card}> 


                  <h1 className={Tela500Styles.title}>ERRO 500 ! </h1>
                   <p className={Tela500Styles.message}> OPS! Acho que deu errado no servidor, tente novamente mais tarde. </p>
                   <h2 className={Tela500Styles.subtitle}>Estamos tentando resolver o problema !! O Dev Junior está tentando rs  </h2>
                   <button className={Tela500Styles.button}><a href="/">Voltar para Home</a></button>

                 </div>


            </div>








        </>


    )
}