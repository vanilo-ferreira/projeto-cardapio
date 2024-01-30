import React from "react";
import Image from "next/image";

import IconeEntradas from "../../../public/assets/entrada.png";
import IconeMassas from "../../../public/assets/massa.png";
import IconeCarnes from "../../../public/assets/carne.png";
import IconeBebidas from "../../../public/assets/bebidas.png";
import IconeSaladas from "../../../public/assets/salada.png";
import IconeSobremesas from "../../../public/assets/sobremesa.png";

const Categories = () => {
  return (
    <div>
      <button>
        <Image
          src={IconeEntradas}
          width={20}
          height={20}
          alt="Icone Entradas"
        />
      </button>
      <button>
        <Image src={IconeMassas} width={20} height={20} alt="Icone Massas" />
        Massas
      </button>
      <button>
        <Image src={IconeCarnes} width={20} height={20} alt="Ícone Carnes" />
        Carnes
      </button>
      <button>
        <Image src={IconeBebidas} width={20} height={20} alt="Icone Bebidas" />
        <img src={IconeBebidas} alt="" />
        Bebidas
      </button>
      <button>
        <Image src={IconeSaladas} width={20} height={20} alt="Icone Saladas" />
        Saladas
      </button>
      <button>
        <Image
          src={IconeSobremesas}
          width={20}
          height={20}
          alt="Icone Sobremesas"
        />
        Sobremesas
      </button>
    </div>
  );
};

export default Categories;
