import React from "react";
import Container from "react-bootstrap/Container";
import AcomCables from "./Subcategories/AcomCables";
import LimpiarPc from "./Subcategories/LimpiarPc";
import FuncTelef from "./Subcategories/FuncTelef";
import Accordion from "react-bootstrap/Accordion";

export default function HangarOficina(visit) {
  const catId = 5;
  return (
    <Container>
      <h2>Hangar Oficina</h2>
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Funcionamiento Telefono</Accordion.Header>
          <Accordion.Body>
            <FuncTelef visit={visit} catId={catId} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Acomodar cables</Accordion.Header>
          <Accordion.Body>
            <AcomCables visit={visit} catId={catId} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Limpiar PC</Accordion.Header>
          <Accordion.Body>
            <LimpiarPc visit={visit} catId={catId} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
