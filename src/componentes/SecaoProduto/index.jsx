import styles from "./SecaoProduto.module.css";
import Image from "next/image";
import Oculos01 from "../../../public/oculos01.png";
import Oculos02 from "../../../public/oculos02.png";
import Oculos03 from "../../../public/oculos03.png";
import Oculos04 from "../../../public/oculos04.png";


export default function SecaoProduto() {
    return (
        <section id="produtos" className={styles.secaoProduto}>
            <h3>NOSSOS PRODUTOS</h3>

            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

            <div className={styles.secaoCards}>
                <div className={styles.card}>
                    <h4>Óculos de grau</h4>
                    <Image src={Oculos01} />
                    <p>R$ 500,00</p>
                </div>
                <div className={styles.card}>
                    <h4>Óculos transition</h4>
                    <Image src={Oculos02} />
                    <p>R$ 750,00</p>
                </div>
                <div className={styles.card}>
                    <h4>Óculos de sol</h4>
                    <Image src={Oculos03} />
                    <p>R$ 700,00</p>
                </div>
                <div className={styles.card}>
                    <h4>Óculos infantil</h4>
                    <Image src={Oculos04} />
                    <p>R$ 500,00</p>
                </div>
            </div>



            <div className={styles.descricao}>
                <h3>Todos os nossos produtos incluem:</h3>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>

        </section>
    );
};