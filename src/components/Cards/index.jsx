import styles from "./Cards.module.css";
import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div>
      <Image src={props.imagem} width={300} height={200} alt="Imagem do produto" />
      <h3>{props.nome}</h3>
      <h4>{props.categoria}</h4>
      <p>{props.descricao}</p>
      <p>R$ {props.preco}</p>
    </div>
  );
};

export default Card;
