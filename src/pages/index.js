import Head from "next/head";
import estilos from "@/styles/Home.module.css";
import Topo from "@/componentes/Topo";
import SecaoCapa from "@/componentes/SecaoCapa";
import SecaoProduto from "@/componentes/SecaoProduto";
import SecaoSobre from "@/componentes/SecaoSobre";
import SecaoContato from "@/componentes/SecaoContato";
import Rodape from "@/componentes/Rodape";
import ScrollToTopButton from "@/componentes/Scroll";

export default function Home() {
  return (
      <>
        <Head>
          <title>Óticas vida - Loja de óculos</title>
          <meta name="decription" content=""/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href=""/> 
        </Head>
        <main>
          <Topo/>
          <SecaoCapa/>
          <SecaoProduto/>
          <SecaoSobre/>
          <SecaoContato/>
          <Rodape/>
          <ScrollToTopButton/>
        </main>
      </>
  );
};