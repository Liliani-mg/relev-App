import React from "react";
import Container from "react-bootstrap/Container";
import  RackPLimpieza from "./Subcategories/RackPLimpieza";
import  RackPOrden from "./Subcategories/RackPOrden";
import  FuncAP from "./Subcategories/FuncAP";
import  FuncTelef from "./Subcategories/FuncTelef";
import  UPS from "./Subcategories/UPS";
import  LimpiarPc from "./Subcategories/LimpiarPc";

export default function Balanza(visit) {
  const catId = 6;
  return (
  <Container>
    <h2>Balanza</h2>
    <RackPLimpieza visit={visit} catId={catId} />
      <RackPOrden visit={visit} catId={catId} />
      <FuncAP visit={visit} catId={catId} />
      <FuncTelef visit={visit} catId={catId} />
      <LimpiarPc visit={visit} catId={catId} />
      <UPS visit={visit} catId={catId} />
  </Container>
  );
}
