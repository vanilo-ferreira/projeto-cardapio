import styles from "./Cards.module.css";
import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className={styles.card}>
        <Image
          className={styles.cardImage}
          src={props.imagem}
          alt="Imagem do produto"
        />
      <div className={styles.cardText}>
        <h3>{props.nome}</h3>
        <h4>{props.categoria}</h4>
        <p>{props.descricao}</p>
        <div>
          <p>R$ {props.preco}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
