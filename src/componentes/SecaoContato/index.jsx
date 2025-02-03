import Image from "next/image";
import styles from "./SecaoContato.module.css";
import Email from "../../../public/email.png";
import Fb from "../../../public/fb.png";
import Ig from "../../../public/ig.png";
import Local from "../../../public/local.png";
import Telefone from "../../../public/telefone.png";
import Tt from "../../../public/tt.png";





export default function SecaoContato() {
    return (
        <section id="contatos" className={styles.secaoContato}>
            <div className={styles.descricao}>
                <h3>Fale conosco</h3>

                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>

            <div className={styles.container}>
                <div className={styles.card}>
                    <h3>Nossos Contatos</h3>
                    <span><Image src={Local}/>Nova Iguaçu, RJ</span>
                    <span><Image src={Telefone}/>(21) 9999-9999</span>
                    <span><Image src={Email}/>contato@oticavida.com</span>
                </div>

                <div className={styles.card}>
                    <h3>Nossas Redes Sociais</h3>
                    <span><Image src={Fb}/>/OticaVida</span>
                    <span><Image src={Ig}/>@oticavidarj</span>
                    <span><Image src={Tt}/>@oticavidarj</span>
                </div>
            </div>

        </section>
    )
}