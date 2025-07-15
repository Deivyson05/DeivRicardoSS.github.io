import { List, House, User, Kanban, X, Phone } from "@phosphor-icons/react";
import { useState } from "react";
import styles from "./styles.module.css";

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [margin, setMargin] = useState(-4);
    const [opacity, setOpacity] = useState(0);

    const handleOpen = () => {
        setIsOpen(!isOpen);
        setMargin(isOpen ? -4 : 1);
        setOpacity(isOpen ? 0 : 1);
    };

    return (
        <div className={styles.container}>
            <a href="#home" style={{ marginBottom: `${margin}rem`, opacity: `${opacity}`}}>
                <House size={32} weight="regular" />
            
            </a>
            <a href="#about" style={{ marginBottom: `${margin}rem`, opacity: `${opacity}`}}>
                <User size={32} weight="regular" />
             
            </a>
            <a href="#projects" style={{ marginBottom: `${margin}rem`, opacity: `${opacity}`}}>
                <Kanban size={32} weight="regular" />
                
            </a>
            <a href="#contact" style={{ marginBottom: `${margin}rem`, opacity: `${opacity}`}}>
                <Phone size={32} weight="regular" />
                
            </a>
            <button onClick={handleOpen} >
                {
                    isOpen
                    ? <X size={32} weight="regular" />
                    : <List size={32} weight="regular" />
                }
            </button>
        </div>
    )
}

