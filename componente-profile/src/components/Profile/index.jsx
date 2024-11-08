import styles from "./styles.module.css"

export default function Profile({nome, descricao, telefone, email}) {
    return (
        <div className={styles.container}>
            <img className={styles.foto} src="../src/assets/profile.jpg" alt="" srcset="" />
            <div className={styles.information}>
                <h1 className={styles.nome}>{nome}</h1>
                <hr className={styles.linha} />
                <p>{descricao}</p>
                <hr className={styles.linha}/>
                <p>{telefone}</p>
                <hr className={styles.linha}/>
                <p>{email}</p>
                <hr className={styles.linha}/>
                <button className={styles.botao}>GitHub</button>
                <button className={styles.botao}>Linkedin</button>
                <button className={styles.botao}>Twitter</button>
            </div>
        </div>
    )
}