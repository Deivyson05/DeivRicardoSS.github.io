import { Sun, Moon } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import Image from "../../assets/cara.png";
import { setData, getData } from "../../core/lStorage";
import { useState } from "react";

export function Header() {
    const [theme, setTheme] = useState(getData("theme") || "light");

    return (
        <header className={styles.container}>
            <img src={Image} alt="logo" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Projetos</a>
                <a href="#">Habilidades</a>
            </nav>

            <button>
                {
                    theme === "light" ? (
                        <Sun onClick={() => {setData("theme", "dark-theme"); setTheme("dark")}} size={32}/>
                    ) : (
                        <Moon onClick={() => {setData("theme", "light"); setTheme("light")}} size={32}/>
                    )
                }
            </button>
        </header>
    );
}