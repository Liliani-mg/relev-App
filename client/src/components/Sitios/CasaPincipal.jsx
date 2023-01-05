import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import RackPLimpieza from "./Subcategories/RackPLimpieza";
import RackPOrden from "./Subcategories/RackPOrden";
import FuncAP from "./Subcategories/FuncAP";
import FuncTelef from "./Subcategories/FuncTelef";
import UPS from "./Subcategories/UPS";

export default function CasaPrincipal(visit) {
  const catId = 1;

  return (
    <Container>
      <h2>Casa Principal</h2>
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
      <Accordion.Item eventKey="4">
        <Accordion.Header>UPS</Accordion.Header>
        <Accordion.Body>
          <UPS visit={visit} catId={catId} />
        </Accordion.Body>
      </Accordion.Item>   
      </Accordion>
    </Container>
  );
}
