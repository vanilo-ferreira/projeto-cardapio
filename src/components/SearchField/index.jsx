import React from "react";

import styles from "./SearchField.module.css";

const SearchField = ({ textoBuscaDigitado, handleBusca }) => {
  return (
    <div className={styles.searchField}>
      <input
        className={styles.input}
        type="text"
        value={textoBuscaDigitado}
        onChange={(event) => handleBusca(event.target.value)}
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
      ></input>
    </div>
  );
};

export default SearchField;
