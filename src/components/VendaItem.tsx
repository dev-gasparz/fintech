import React from "react";
import { IVenda } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="venda box">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
      <div>
        <span>{venda.nome}</span>
      </div>
      <div>
        <span>
          {venda.preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
};

export default VendaItem;
