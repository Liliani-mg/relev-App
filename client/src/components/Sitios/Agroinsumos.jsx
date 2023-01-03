import React from "react";
import Container from "react-bootstrap/Container";
import  FuncAP from "./Subcategories/FuncAP";


export default function Agroinsumos(visit) {
  const catId = 7;
  return (
  <Container>
    <h2>Agroinsumos</h2>

      <FuncAP visit={visit} catId={catId} />
   
  </Container>
  );
}
