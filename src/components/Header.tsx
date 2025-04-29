import React, { useEffect, useState } from "react";
import DateRange from "./DateRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Resumo");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
    }
  });
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
