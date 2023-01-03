import React from "react";
import Container from "react-bootstrap/Container";
import  RackPLimpieza from "./Subcategories/RackPLimpieza";
import  RackPOrden from "./Subcategories/RackPOrden";
import  FuncAP from "./Subcategories/FuncAP";
import  FuncTelef from "./Subcategories/FuncTelef";


export default function Hangar(visit) {
  const catId = 4;
  return (
  <Container>
    <h2>Hangar</h2>
    <RackPLimpieza visit={visit} catId={catId} />
      <RackPOrden visit={visit} catId={catId} />
      <FuncAP visit={visit} catId={catId} />
      <FuncTelef visit={visit} catId={catId} />
  </Container>
  );
}
