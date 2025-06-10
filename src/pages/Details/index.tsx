import { Header } from "../../components/Header";
import { Technologies } from "../../components/Technologies";
import styles from "./styles.module.css";
import { GithubLogo, Browser } from "@phosphor-icons/react";
import { Markdown } from "../../components/Markdown";


export function Details() {


    return (
        <main className={styles.container}>
            <Header page="details" />

            <Markdown 
                owner="DeivRicardoSS"
                repo="DeivRicardoSS"
            />

            <div className={styles.info}>
                <Technologies
                    technologies={["TypeScript", "React", "NodeJs", "CSS3"]}
                />
                <article>
                    <h3>Visualizar</h3>
                    <div>
                        <a href="#">
                            <Browser size={20} weight="duotone" />
                            <span>Projeto</span>
                        </a>
                        <a href="#">
                            <GithubLogo size={20} weight="duotone" />
                            <span>Código</span>
                        </a>
                    </div>
                </article>
            </div>

        </main>
    )
}