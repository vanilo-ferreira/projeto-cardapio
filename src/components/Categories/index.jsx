import React, { useState } from "react";
import Image from "next/image";

import styles from "./Categories.module.css";

import { produtos } from "../../data/dataProdutos";

import IconeEntradas from "../../../public/assets/entrada.png";
import IconeMassas from "../../../public/assets/massa.png";
import IconeCarnes from "../../../public/assets/carne.png";
import IconeBebidas from "../../../public/assets/bebidas.png";
import IconeSaladas from "../../../public/assets/salada.png";
import IconeSobremesas from "../../../public/assets/sobremesa.png";

const Categories = ({ handleFiltro, botaoClicado }) => {
  return (
    <div className={styles.conteinerCategories}>
      <button
        className={
          botaoClicado === "Entradas"
            ? styles.acenderButton
            : styles.apagarButton
        }
        onClick={() => handleFiltro("Entradas")}
      >
        <Image
          src={IconeEntradas}
          className={styles.categoryImage}
          alt="Icone Entradas"
        />
        <span className={styles.buttonText}>Entradas</span>
      </button>
      <button
        className={
          botaoClicado === "Massas" ? styles.acenderButton : styles.apagarButton
        }
        onClick={() => handleFiltro("Massas")}
      >
        <Image
          src={IconeMassas}
          className={styles.categoryImage}
          alt="Icone Massas"
        />
        <span className={styles.buttonText}>Massas</span>
      </button>
      <button
        className={
          botaoClicado === "Carnes" ? styles.acenderButton : styles.apagarButton
        }
        onClick={() => handleFiltro("Carnes")}
      >
        <Image
          src={IconeCarnes}
          className={styles.categoryImage}
          alt="Ícone Carnes"
        />
        <span className={styles.buttonText}>Carnes</span>
      </button>
      <button
        className={
          botaoClicado === "Bebidas"
            ? styles.acenderButton
            : styles.apagarButton
        }
        onClick={() => handleFiltro("Bebidas")}
      >
        <Image
          src={IconeBebidas}
          className={styles.categoryImage}
          alt="Icone Bebidas"
        />
        <img src={IconeBebidas} alt="" />
        <span className={styles.buttonText}>Bebidas</span>
      </button>
      <button
        className={
          botaoClicado === "Saladas"
            ? styles.acenderButton
            : styles.apagarButton
        }
        onClick={() => handleFiltro("Saladas")}
      >
        <Image
          className={styles.categoryImage}
          src={IconeSaladas}
          alt="Icone Saladas"
        />
        <span className={styles.buttonText}>Saladas</span>
      </button>
      <button
        className={
          botaoClicado === "Sobremesas"
            ? styles.acenderButton
            : styles.apagarButton
        }
        onClick={() => handleFiltro("Sobremesas")}
      >
        <Image
          className={styles.categoryImage}
          src={IconeSobremesas}
          alt="Icone Sobremesas"
        />
        <span className={styles.buttonText}>Sobremesas</span>
      </button>
    </div>
  );
};

export default Categories;
