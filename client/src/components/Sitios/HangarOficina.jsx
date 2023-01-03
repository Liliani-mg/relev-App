import React from "react";
import Container from "react-bootstrap/Container";
import  AcomCables from "./Subcategories/AcomCables";
import  LimpiarPc from "./Subcategories/LimpiarPc";
import  FuncTelef from "./Subcategories/FuncTelef";


export default function HangarOficina(visit) {
  const catId = 5;
  return (
  <Container>
    <h2>Hangar Oficina</h2>
    <LimpiarPc visit={visit} catId={catId} />
      <AcomCables visit={visit} catId={catId} />
      <FuncTelef visit={visit} catId={catId} />
  </Container>
  );
}
