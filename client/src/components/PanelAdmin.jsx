import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

export default function PanelAdmin(props) {
  const navigate = useNavigate();

  function handleclick(id) {
    console.log(id);
    navigate(`/detailVisit/${id}`);
  }

  return (
    <Container>
      <h3>Panel Supervisor. Bienvenido {props.userA.name}</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Ver detalle</th>
          </tr>
        </thead>
        <tbody>
          {props.visits?.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.date}</td>
                <td>{v.state === false ? "Abierta" : "Cerrada"}</td>
                <th>
                  <Button onClick={() => handleclick(v.id)}>Detalles</Button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
