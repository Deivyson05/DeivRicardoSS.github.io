import styles from "./styles.module.css";
import { InstagramLogo, TelegramLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

export function Footer() {
    return (
        <footer className={styles.container} id="contact">
            <header>
                <div className={styles.content}>
                    <h1>Deivyson Santos</h1>
                    <span>FullStack Developer</span>
                </div>

                <div className={styles.links}>
                    <div>
                        <strong>Currículo</strong>
                        <a href="http://lattes.cnpq.br/8928054313232460" target="_blank">Lattes</a>
                        <a href="https://www.linkedin.com/in/deivyson-ricardo-33354425b?originalSubdomain=br" target="_blank">Linkedin</a>
                        <a href="https://github.com/DeivRicardoSS" target="_blank">GitHub</a>
                    </div>

                    <div>
                        <strong>Contato</strong>
                        <a href="#">deivysonr52@gmail.com</a>
                        <a href="#">deivysonrssantos@outlook.com</a>
                    </div>
                </div>
            </header>
            <footer>
                <span>© 2025 Deivyson Santos</span>
                <div>
                    <a href="https://www.instagram.com/deivs_05/" target="_blank">
                        <InstagramLogo size={30}/>
                    </a>
                    <a href="https://t.me/DeivRicardoSS" target="_blank">
                        <TelegramLogo size={30}/>
                    </a>
                    <a href="https://www.linkedin.com/in/deivyson-ricardo-33354425b?originalSubdomain=br" target="_blank">
                        <LinkedinLogo size={30}/>
                    </a>
                    <a href="https://github.com/DeivRicardoSS" target="_blank">
                        <GithubLogo size={30}/>
                    </a>
                </div>
            </footer>
        </footer>
    );
}