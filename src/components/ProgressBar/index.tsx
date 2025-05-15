import styles from "./styles.module.css";

export function ProgressBar({ progress }: { progress: number }) {
    return (
        <div className={styles.container}>
            <div
                className={styles.bar}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    )
}