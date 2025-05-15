import styles from "./styles.module.css";
import { InstagramLogo, TelegramLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

export function Footer() {
    return (
        <footer className={styles.container}>
            <header>
                <div className={styles.content}>
                    <h1>Deivyson Santos</h1>
                    <span>FullStack Developer</span>
                </div>

                <div className={styles.links}>
                    <div>
                        <strong>Currículo</strong>
                        <a href="#">Lattes</a>
                        <a href="#">Linkedin</a>
                        <a href="#">GitHub</a>
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
                    <a href="#">
                        <InstagramLogo size={30}/>
                    </a>
                    <a href="#">
                        <TelegramLogo size={30}/>
                    </a>
                    <a href="#">
                        <LinkedinLogo size={30}/>
                    </a>
                    <a href="#">
                        <GithubLogo size={30}/>
                    </a>
                </div>
            </footer>
        </footer>
    );
}