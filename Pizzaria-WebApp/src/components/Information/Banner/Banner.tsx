import { BannerStyles } from "./style";

interface BannerProps {
    onClose: () => void;
}

export default function Banner({ onClose }: BannerProps) {
    return (
        <div className={BannerStyles.container} role="alert">
            <div className={BannerStyles.iconWrapper}>⚠️</div>

            <div className={BannerStyles.textWrapper}>
                <p className={BannerStyles.title}>Aviso de Portfólio</p>
                <p className={BannerStyles.message}>
                    Este é um projeto de portfólio. Não insira dados pessoais reais — as informações são armazenadas em banco de dados e podem ser apagadas a qualquer momento.
                </p>
            </div>

            <button className={BannerStyles.closeButton} onClick={onClose}>
                Entendi
            </button>
        </div>
    );
}
