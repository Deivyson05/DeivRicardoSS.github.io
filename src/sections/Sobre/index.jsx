import styles from "./styles.module.css";
import React from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Game } from "../../components/Game";

export function Sobre() {
    const {t, i18n} = useTranslation();

    return (
        <section className={styles.container}>
            <div className={styles.context}>
                <h2>{t('about.title')}</h2>
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
                <p>{t('about.p4')}</p>
            </div>

            <Game/>
        </section>
    );
}