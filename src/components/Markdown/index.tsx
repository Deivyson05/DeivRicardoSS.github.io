import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import styles from "./styles.module.css";

interface Props {
    owner: string;
    repo: string;
}

export function Markdown({ owner, repo }: Props) {
    const [readme, setReadme] = useState("");

    useEffect(() => {
        axios
            .get(`https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`)
            .then((res) => setReadme(res.data))
            .catch((error) => console.error("Erro ao buscar README:", error));
    }, [owner, repo]);

    return (
        <div className= {styles.container}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeRaw]}
            >{readme}</ReactMarkdown>
        </div>
    );
}