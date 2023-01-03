import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';
import  RackPLimpieza from "./Subcategories/RackPLimpieza";
import  RackPOrden from "./Subcategories/RackPOrden";
import  FuncAP from "./Subcategories/FuncAP";
import  FuncTelef from "./Subcategories/FuncTelef";
import  UPS from "./Subcategories/UPS";



export default function CasaPrincipal(visit) {
  const catId = 1;

  return (
    <Container>
      <h2>Casa Principal</h2>
      <RackPLimpieza visit={visit} catId={catId} />
      <RackPOrden visit={visit} catId={catId} />
      <FuncAP visit={visit} catId={catId} />
      <FuncTelef visit={visit} catId={catId} />
      <UPS visit={visit} catId={catId} />
    </Container>
  );
}
