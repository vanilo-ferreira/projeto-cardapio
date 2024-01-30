import Head from "next/head";

import styles from "../styles/Home.module.css"

import Categories from "../components/Categories";
import SearchField from "../components/SearchField";

export default function Home() {
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
          <p>De Pratos clássicos a criações supreendentes,
            nosso cardápio é um requinte de sabores refinados.
          </p>
        </div>
      </header>
      <Categories />
      <SearchField /> 
    </>
  );
}
