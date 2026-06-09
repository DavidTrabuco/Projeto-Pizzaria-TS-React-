import { useState } from "react";
import { FAQStyle as S } from "./style";
import { FAQ } from "../../share/data/PerguntasFAQ";

export default function FAQFlutuante() {
    const [aberto, setAberto] = useState(false);
    const [itemAberto, setItemAberto] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setItemAberto(itemAberto === index ? null : index);
    };

    return (
        <>
            {aberto && (
                <div className={S.painel}>
                    <div className={S.painelHeader}>
                        <span className={S.painelTitulo}>Perguntas Frequentes</span>
                        <button className={S.painelFechar} onClick={() => setAberto(false)}>✕</button>
                    </div>

                    {FAQ.map((item, index) => (
                        <div key={index} className={S.item} onClick={() => toggleItem(index)}>
                            <p className={S.pergunta}>
                                {item.Pergunta}
                                <span className={S.seta} style={{ transform: itemAberto === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    ▼
                                </span>
                            </p>
                            {itemAberto === index && (
                                <p className={S.resposta}>{item.Resposta}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <button className={S.fab} onClick={() => setAberto(!aberto)} aria-label="Perguntas frequentes">
                {aberto ? "✕" : "?"}
            </button>
        </>
    );
}
