import styles from "./Topo.module.css";
import Logo from "../../../public/logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Topo() {
    return (
        <section className={styles.secaoTopo}>
            <div className={styles.elementosTopo}>
                <Image src={Logo} alt="logomarca" className={styles.image} />
                <nav className={styles.links}>
                    <Link href="#produtos">PRODUTOS</Link>
                    <Link href="#sobre">SOBRE</Link>
                    <Link href="#contatos">CONTATO</Link>
                </nav>
            </div>
        </section>
    );
};