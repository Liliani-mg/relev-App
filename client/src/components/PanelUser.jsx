import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const { REACT_APP_API_URL = "http://localhost:3001" } = process.env;

export default function PanelUser(props) {
  const navigate = useNavigate();

  async function getVisit() {
    await axios
      .get(`${REACT_APP_API_URL}/visits/panelUser`)
      .then((response) => {
        const respuesta = response.data;
        localStorage.setItem("visit", JSON.stringify(respuesta.body));
        response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const visit = JSON.parse(localStorage.getItem("visit"));
  const renderDate = visit?.date.slice(0, 10);

  useEffect(() => {
    getVisit();
    console.log(visit);
  }, []);

  function handleclick(e) {
    e.preventDefault();
    navigate(`/editvisit/${visit.id}`);
  }
  function handlerclickredirect(e) {
    e.preventDefault();
    navigate("/newvisit");
  }

  return (
    <Container>
      <h3>Panel usuario. Bienvenido {props.userU?.name}</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {visit ? (
            <tr>
              <td>{visit?.id}</td>
              <td>{renderDate}</td>
              <td>{visit?.state === false ? "Abierta" : "Cerrada"}</td>
              <th>
              <Button onClick={handlerclickredirect}>
                  Ir a registrar nueva visita
                </Button>
              </th>
            </tr>
          ) : (
            <tr>
              <td>-</td>
              <td>No hay visita</td>
              <td>-</td>
              <td>
                {" "}
                <Button onClick={handlerclickredirect}>
                  Ir a registrar nueva visita
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
