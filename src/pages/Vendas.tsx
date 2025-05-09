import React from "react";
import { useData } from "../Context/DataContext";
import VendaItem from "../components/VendaItem";

const Vendas = () => {
  const { data } = useData();
  if (data === null) return null;
  return (
    <div>
      <ul>
        {data.map((venda) => (
          <li key={venda.id}>
            <VendaItem venda={venda} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vendas;
