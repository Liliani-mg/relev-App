import React from "react";
import Container from "react-bootstrap/Container";
import  CheqVisual from "./Subcategories/CheqVisual";
import Accordion from "react-bootstrap/Accordion";


export default function Camaras(visit) {
  const catId = 8;
  return (
  <Container>
    <h2>Camaras</h2>
    <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Chequear visualización</Accordion.Header>
          <Accordion.Body>
          <CheqVisual visit={visit} catId={catId} />
         </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  </Container>
  );
}
