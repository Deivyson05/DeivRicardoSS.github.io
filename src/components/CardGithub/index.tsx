import styles from "./styles.module.css";
import { GithubSvg } from "./githubSvg";

export function CardGithub() {
    return (
        <a href="https://github.com/DeivRicardoSS" className={styles.container} target="_blank">
            <GithubSvg className={styles.githubSvg}/>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/131066052?v=4" alt="DeivRicardoSS" />
            <h3>DeivRicardoSS</h3>
            <span>Repositórios - 35</span>
            <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height="40" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="40" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height="40" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" height="40" />
            </div>
            
        </a>
    );
}