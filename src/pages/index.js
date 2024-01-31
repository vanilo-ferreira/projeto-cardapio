import Head from "next/head";

import styles from "../styles/Home.module.css"

import Categories from "../components/Categories";
import SearchField from "../components/SearchField";
import Card from "../components/Cards";

import { produtos } from "../data/dataProdutos";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Cardápio Restaurante</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <header>
        <div className={styles.topo}>
          <h1>RESTAURANT</h1>
          <p>De Pratos clássicos a criações supreendentes, <br/>
            nosso cardápio é um requinte de sabores <br/>
            refinados.
          </p>
        </div>
      </header>
      <Categories />
      <SearchField />

      <div className={styles.cardapio}>
        <h2>Cardápio</h2>
        <div className={styles.boxCards}>
          {produtos.map((produto) => (
            <Card
              key={produto.id}
              imagem={produto.imagem}
              nome={produto.nome}
              categoria={produto.categoria}
              descricao={produto.descricao}
              preco={produto.preco}
            />
          ))}
        </div>
      </div>
    </>
  );
}
