import { useTranslation } from "react-i18next";
import "../../i18n";
import styles from "./styles.module.css";
import Image from "../../assets/cara.png";

export function Header() {
    const {t, i18n} = useTranslation();
    

    return (
        <header className={styles.container}>
            <img src={Image} alt="logo" />
            <nav>
                <a href="#">{t('header.nav.home')}</a>
                <a href="#">{t('header.nav.about')}</a>
                <a href="#">{t('header.nav.projects')}</a>
                <a href="#">{t('header.nav.habilities')}</a>
            </nav>

            <a href="#" className={styles.btn}>{t('header.button.contact')}</a>
        </header>
    );
}