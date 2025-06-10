import styles from "./styles.module.css";
import { ProgressBar } from "../../components/ProgressBar";

export function Habilities() {
    return (
        <section className={styles.container} id="habilities">
            <h2>Habilidades</h2>

            <div className={styles.habilities}>
                <article>
                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                        <div>
                            <h3>JavaScript</h3>
                            <span>Avançado</span>
                            <ProgressBar progress={80} />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"/>
                        <div>
                            <h3>TypeScript</h3>
                            <span>Básico</span>
                            <ProgressBar progress={40} />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"/>
                        <div>
                            <h3>C#</h3>
                            <span>Básico</span>
                            <ProgressBar progress={40} />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>
                        <div>
                            <h3>Python</h3>
                            <span>Básico</span>
                            <ProgressBar progress={40} />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"/>
                        <div>
                            <h3>NodeJs</h3>
                            <span>Intermediário</span>
                            <ProgressBar progress={60} />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                        <div>
                            <h3>ReactJs</h3>
                            <span>Básico</span>
                            <ProgressBar progress={30} />
                        </div>
                    </div>
                </article>

                <article>
                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"/>
                        <div>
                            <h3>PostgreSQL</h3>
                            <span>Básico</span>
                            <ProgressBar progress={20} />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"/>
                        <div>
                            <h3>MySQL</h3>
                            <span>Básico</span>
                            <ProgressBar progress={30} />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"/>
                        <div>
                            <h3>MongoDB</h3>
                            <span>Básico</span>
                            <ProgressBar progress={35} />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"/>
                        <div>
                            <h3>Figma</h3>
                            <span>Intermediário</span>
                            <ProgressBar progress={75} />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                        <div>
                            <h3>CSS3</h3>
                            <span>Intermediário</span>
                            <ProgressBar progress={78} />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                        <div>
                            <h3>ReactNative</h3>
                            <span>Básico</span>
                            <ProgressBar progress={20} />
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}