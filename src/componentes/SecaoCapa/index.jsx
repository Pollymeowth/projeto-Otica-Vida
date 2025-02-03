import styles from "./SecaoCapa.module.css";

export default function SecaoCapa() {
    return (
        <>
            <div className={styles.secaoCapa}>
                <div className={styles.container}>
                    <div className={styles.conteudoSecaoCapa}>
                        <p>Preços baixos em</p>
                        <h1>ÓCULOS DE GRAU E DE SOL</h1>
                        <p>Você só encontra aqui</p>
                    </div>
                </div>
            </div>
        </>
    )
}