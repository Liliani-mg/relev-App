import React from "react";
import Container from "react-bootstrap/Container";
import  CheqVisual from "./Subcategories/CheqVisual";


export default function Camaras(visit) {
  const catId = 8;
  return (
  <Container>
    <h2>Camaras</h2>

      <CheqVisual visit={visit} catId={catId} />
   
  </Container>
  );
}
