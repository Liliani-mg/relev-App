import React from "react";
import Container from "react-bootstrap/Container";
import  FuncAP from "./Subcategories/FuncAP";
import Accordion from "react-bootstrap/Accordion";


export default function Agroinsumos(visit) {
  const catId = 7;
  return (
  <Container>
    <h2>Agroinsumos</h2>
    <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Funcionamiento AP</Accordion.Header>
          <Accordion.Body>
          <FuncAP visit={visit} catId={catId} />    
          </Accordion.Body>
        </Accordion.Item>
   </Accordion>  
  </Container>
  );
}
