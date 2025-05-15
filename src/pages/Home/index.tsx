import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { Home } from "../../sections/Home";
import { Sobre } from "../../sections/About";
import { Projetos } from "../../sections/Projetos";
import { Footer } from "../../components/Footer";
import { Habilities } from "../../sections/Habilities";

export function HomePage() {
    

    return (
        <main className={styles.container}>
            <Header />
            <Home />
            <Sobre />
            <Projetos />
            <Habilities />
            <Footer />
        </main>
    )
}