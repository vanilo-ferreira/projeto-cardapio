import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";

const SearchField = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
};

export default SearchField;
