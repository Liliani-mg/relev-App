import React from "react";
import Container from "react-bootstrap/Container";
import RackPLimpieza from "./Subcategories/RackPLimpieza";
import RackPOrden from "./Subcategories/RackPOrden";
import FuncAP from "./Subcategories/FuncAP";
import Accordion from "react-bootstrap/Accordion";

export default function ExAgroinsumos(visit) {
  const catId = 2;
  return (
    <Container>
      <h2>Ex Agroinsumos</h2>
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
      </Accordion>
    </Container>
  );
}
