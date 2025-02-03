import styles from "./SecaoSobre.module.css";
import Image from "next/image";
import Image01 from "../../../public/atendimento.png"
import Image02 from "../../../public/loja.png"

export default function SecaoSobre() {
    return (
        <section id="sobre" className={styles.secaoSobre}>
            <div className={styles.descricao}>
                <h3>QUEM SOMOS NÓS?</h3>

                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>


            <div className={styles.secaoCards}>
                <Image src={Image01} className={styles.cardImagem}></Image>
                <div className={styles.card}>
                    <h4>NOSSAS FILIAIS</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div className={styles.card}>
                    <h4>ATENDIMENTO FLEXIVEL</h4>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>
                <Image src={Image02} className={styles.cardImagem}></Image>
            </div>
        </section>
    );
};