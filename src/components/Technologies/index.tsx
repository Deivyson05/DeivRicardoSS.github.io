interface Props {
    technologies: string[];
}
import styles from "./styles.module.css";

export function Technologies({ technologies }: Props) {
    return (
        <article className={styles.container}>
            <h3>Tecnologias</h3>
            <ul>
                {technologies.map((tech, index) => {
                    switch (tech) {
                        case "JavaScript":
                            return (
                                <li key={index} style={{ backgroundColor: "#A9BD34", borderLeftColor: "#D4DE9C"}}>{tech}</li>
                            )
                        case "TypeScript":
                            return (
                                <li key={index} style={{ backgroundColor: "#364DAA", borderLeftColor: "#5683D6"}}>{tech}</li>
                            )
                        case "React":
                            return (
                                <li key={index} style={{ backgroundColor: "#A9BD34", borderLeftColor: "#D4DE9C"}}>{tech}</li>
                            )
                        case "NodeJs":
                            return (
                                <li key={index} style={{ backgroundColor: "#19602B", borderLeftColor: "#2FB150"}}>{tech}</li>
                            )
                        case "CSS3":
                            return (
                                <li key={index} style={{ backgroundColor: "#201960", borderLeftColor: "#857BDD"}}>{tech}</li>
                            )
                        default:
                            return (
                                <li key={index} style={{ backgroundColor: "#A9BD34", borderLeftColor: "#D4DE9C"}}>{tech}</li>
                            )
                    }
                })}
            </ul>
        </article>
    );
}