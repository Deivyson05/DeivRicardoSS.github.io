import styles from "./styles.module.css";
import Image from "../../assets/cara.png";

export function Home() {
    return (
        <section className={styles.container}>
            <img src={Image} alt="" />
            <div className={styles.content}>
                <h1>Deivyson Santos</h1>
                <div></div>
                <span>FullStack Developer</span>
            </div>
        </section>
    )
}