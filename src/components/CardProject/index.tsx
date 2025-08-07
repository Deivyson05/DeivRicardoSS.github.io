import style from "./styles.module.css";

interface CardProjectProps {
    key: number;
    id: string;
    name: string;
    description: string;
    image: string;
}

export function CardProject({ id, name, description, image }: CardProjectProps) {
    return (
        <article className={style.container}
            onClick={() => window.location.href = `/details/${id}`}
        >
            <img src={image} alt="capa" />
            <h3>{name}</h3>
            <span>{description}</span>
        </article>
    );
}