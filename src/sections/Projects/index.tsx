import styles from "./styles.module.css";

import { CardProject } from "../../components/CardProject";
import { BookOpen, Lightbulb, Devices, Database, Stack } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { projetos } from "./projetos"



export function Projects() {
    const [filter, setFilter] = useState("Todos");

    return (
        <section className={styles.container} id="projects">
            <ul>
                <li 
                    style={{ backgroundColor: filter === "Todos" ? "#0D163B" : ""}}
                    onClick={() => setFilter("Todos")}
                >
                    <BookOpen size={20} weight="regular"/>
                    Todos
                </li>
                <li
                    style={{ backgroundColor: filter === "Ideações" ? "#0D163B" : ""}}
                    onClick={() => setFilter("Ideações")}    
                >
                    <Lightbulb size={20} weight="regular"/>
                    Ideações
                </li>
                <li
                    style={{ backgroundColor: filter === "Front-End" ? "#0D163B" : ""}}
                    onClick={() => setFilter("Front-End")}
                >
                    <Devices size={20} weight="regular"/>
                    Front-End
                </li>
                <li
                    style={{ backgroundColor: filter === "Back-End" ? "#0D163B" : ""}}
                    onClick={() => setFilter("Back-End")}
                >
                    <Database size={20} weight="regular"/>
                    Back-End
                </li>
                <li
                    style={{ backgroundColor: filter === "Full-Stack" ? "#0D163B" : ""}}
                    onClick={() => setFilter("Full-Stack")}
                >
                    <Stack size={20} weight="regular"/>
                    Full-Stack
                </li>
            </ul>

            <div className={styles.content}>
                <h2>Projetos</h2>
                <span style={{ fontSize: "1.2rem"}}>{filter}</span>

                <div className={styles.projects}>
                    
                    {
                        filter === "Todos" ? 
                            projetos.map((projeto, index) => <CardProject key={index} name= {projeto.name} description={projeto.description} image={projeto.image} id={projeto.id} />)
                        :
                        filter === "Ideações" ?
                            projetos.map((projeto, index)  => projeto.type === "Ideias" && <CardProject key={index} name= {projeto.name} description={projeto.description} image={projeto.image} id={projeto.id} />)
                        :
                        filter === "Front-End" ?
                            projetos.map((projeto, index) => projeto.type === "Front-End" && <CardProject key={index} name= {projeto.name} description={projeto.description} image={projeto.image} id={projeto.id} />)
                        :
                        filter === "Back-End" ?
                            projetos.map((projeto, index) => projeto.type === "Back-End" && <CardProject key={index} name= {projeto.name} description={projeto.description} image={projeto.image} id={projeto.id} />)
                        :
                        filter === "Full-Stack" ?
                            projetos.map((projeto, index) => projeto.type === "Full-Stack" && <CardProject key={index} name= {projeto.name} description={projeto.description} image={projeto.image} id={projeto.id} />)
                        :
                        null
                    }
                </div>
            </div>


        </section>
    );
}