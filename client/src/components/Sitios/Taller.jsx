import React from "react";
import Container from "react-bootstrap/Container";
import  RackPLimpieza from "./Subcategories/RackPLimpieza";
import  RackPOrden from "./Subcategories/RackPOrden";
import  FuncAP from "./Subcategories/FuncAP";
import  FuncTelef from "./Subcategories/FuncTelef";
import Accordion from "react-bootstrap/Accordion";


export default function Taller(visit) {
  const catId = 3;
  return (
  <Container>
    <h2>Taller</h2>
    <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Rack Principal Limpieza</Accordion.Header>
          <Accordion.Body>
            <RackPLimpieza visit={visit} catId={catId} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Rack Principal Orden</Accordion.Header>
          <Accordion.Body>
            <RackPOrden visit={visit} catId={catId} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Funcionamiento AP</Accordion.Header>
          <Accordion.Body>
            <FuncAP visit={visit} catId={catId} />
          </Accordion.Body>
        </Accordion.Item>
   
      <Accordion.Item eventKey="3">
        <Accordion.Header>Funcionamiento Telefono</Accordion.Header>
        <Accordion.Body>
          <FuncTelef visit={visit} catId={catId} />
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
  </Container>
  );
}
