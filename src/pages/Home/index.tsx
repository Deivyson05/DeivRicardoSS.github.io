import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { Home } from "../../sections/Home";
import { Sobre } from "../../sections/About";
import { Projetos } from "../../sections/Projetos";

export function HomePage() {
    

    return (
        <main className={styles.container}>
            <Header />
            <Home />
            <Sobre />
            <Projetos />
        </main>
    )
}