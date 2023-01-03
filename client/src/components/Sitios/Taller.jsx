import React from "react";
import Container from "react-bootstrap/Container";
import  RackPLimpieza from "./Subcategories/RackPLimpieza";
import  RackPOrden from "./Subcategories/RackPOrden";
import  FuncAP from "./Subcategories/FuncAP";
import  FuncTelef from "./Subcategories/FuncTelef";


export default function Taller(visit) {
  const catId = 3;
  return (
  <Container>
    <h2>Taller</h2>
    <RackPLimpieza visit={visit} catId={catId} />
      <RackPOrden visit={visit} catId={catId} />
      <FuncAP visit={visit} catId={catId} />
      <FuncTelef visit={visit} catId={catId} />
  </Container>
  );
}
