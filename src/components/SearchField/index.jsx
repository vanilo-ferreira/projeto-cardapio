import React from "react";

import styles from "./SearchField.module.css";

const SearchField = () => {
  return (
    <div className={styles.searchField}>
      <input
        className={styles.input}
        type="search"
        id="searchField"
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
      ></input>
    </div>
  );
};

export default SearchField;
