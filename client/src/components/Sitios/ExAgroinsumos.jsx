import React from "react";
import Container from "react-bootstrap/Container";
import  RackPLimpieza from "./Subcategories/RackPLimpieza";
import  RackPOrden from "./Subcategories/RackPOrden";
import  FuncAP from "./Subcategories/FuncAP";

export default function ExAgroinsumos(visit) {
  const catId = 2;
  return (
  <Container>
    <h2>Ex Agroinsumos</h2>
    <RackPLimpieza visit={visit} catId={catId} />
      <RackPOrden visit={visit} catId={catId} />
      <FuncAP visit={visit} catId={catId} />
  </Container>
  );
}
