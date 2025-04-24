
import styles from "./styles.module.css";
import Image from "../../assets/cara.png";

export function Header() {
    

    return (
        <header className={styles.container}>
            <img src={Image} alt="logo" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Projetos</a>
                <a href="#">Habilidades</a>
            </nav>

            <a href="#" className={styles.btn}>Contato</a>
        </header>
    );
}