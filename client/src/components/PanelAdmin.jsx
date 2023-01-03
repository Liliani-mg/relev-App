import React from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const { REACT_APP_API_URL = "http://localhost:3001" } = process.env;

export default function PanelAdmin(props) {
  const navigate = useNavigate();
  const visits = JSON.parse(localStorage.getItem("visits"));

  async function getVisits() {
    await axios
      .get(`${REACT_APP_API_URL}/visits`)
      .then((response) => {
        const respuesta = response.data;
        localStorage.setItem("visits", JSON.stringify(respuesta.body));
        response;
      })
      .catch((error) => {
        console.log(error);
        alert("error al encontrar visitas");
      });
  }

  useEffect(() => {
    getVisits();
}, []);

  function handleclick(e, id) {
    e.preventDefault(e)
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
          {
            visits?.map((e,i) => {
              return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.date}</td>
                <td>{e.state === false ? "Abierta" : "Cerrada"}</td>
                <th>
                  <Button onClick={()=>{handleclick(e.id)}}>Detalles</Button>
                </th>
              </tr>
              )
            })}
        </tbody>
      </Table>
    </Container>
  );
}
