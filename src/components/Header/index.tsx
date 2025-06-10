import { Sun, Moon } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import Image from "../../assets/cara.png";
import { setData, getData } from "../../core/lStorage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Header({ page = "home" }: { page?: string }) {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(getData("theme") || "light");
    useEffect(() => {
        setData("theme", theme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const alterTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const handleNavigation = (id) => {
        if (page === "home") {
            window.location.href = `#${id}`;
        } else {
            navigate("/");
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };


    return (
        <header className={styles.container}>
            <img src={Image} alt="logo" />
            <nav>
                <a onClick={() => handleNavigation("home")}>Home</a>
                <a onClick={() => handleNavigation("about")}>Sobre</a>
                <a onClick={() => handleNavigation("projects")}>Projetos</a>
                <a onClick={() => handleNavigation("habilities")}>Habilidades</a>
                <a onClick={() => handleNavigation("contact")}>Contato</a>
            </nav>

            <button>
                {
                    theme === "light" ? (
                        <Sun onClick={alterTheme} size={32} />
                    ) : (
                        <Moon onClick={alterTheme} size={32} />
                    )
                }
            </button>
        </header>
    );
}