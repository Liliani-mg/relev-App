import React from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const { REACT_APP_API_URL = "http://localhost:3001" } = process.env;

export default function Detail({ visitA, userA }) {
  const { id } = useParams();

  const visitDetail = JSON.parse(localStorage.getItem("visitDetail"));
  const renderDate = visitDetail?.date.slice(0, 10);

  console.log(visitDetail);
  useEffect(() => {
    getVisitDetail(id);

    return () => {
      localStorage.removeItem("visitDetail");
    };
  }, []);

  async function getVisitDetail(id) {
    await axios
      .get(`${REACT_APP_API_URL}/visits/${id}`)
      .then((response) => {
        const respuesta = response.data;
        localStorage.setItem("visitDetail", JSON.stringify(respuesta.body));
        response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function renderCatname(id) {
    switch (id) {
      case 1:
        return "Casa principal";
      case 2:
        return "Ex Agroinsumos";
      case 3:
        return "Taller";
      case 4:
        return "Hangar";
      case 5:
        return "Hangar Oficina";
      case 6:
        return "Balanza";
      case 7:
        return "Agroinsumos";
      case 8:
        return "Camaras";
      default:
        break;
    }
  }
  function renderSubname(id) {
    switch (id) {
      case 1:
        return "Rack Principal (limpieza)";
      case 2:
        return "Rack Principal (Orden)";
      case 3:
        return "Funcionamiento AP";
      case 4:
        return "Funcionamiento teléfono";
      case 5:
        return "UPS";
      case 6:
        return "Limpiar PC";
      case 7:
        return "Acomodar cables";
      case 8:
        return "Chequear visualización";
      default:
        break;
    }
  }

  return (
    <Container>
      <h2>
        {renderDate} - {visitDetail?.location}
      </h2>
      <h4> Estado: {visitDetail?.state === true ? "Cerrado" : "Abierto"}</h4>
      <h3>Inspecciones</h3>
      {visitDetail && (
        <Card>
          <Card.Body>
            <Card.Title>{renderCatname(1)}</Card.Title>
            {visitDetail.Inspections.map((e) => {
              if (e.categoryId === 1) {
                return (
                  <>
                    <Card.Text>
                      {renderSubname(e.subcategoryId)} -{" "}
                      {e.response === true ? "SI" : "NO"}
                    </Card.Text>
                    {e.image && <Card.Img src={e.image}></Card.Img>}
                    <Card.Text>Observaciones: {e.observation}</Card.Text>
                  </>
                );
              }
            })}
          </Card.Body>
          <Card.Body>
            <Card.Title>{renderCatname(2)}</Card.Title>
            {visitDetail.Inspections.map((e) => {
              if (e.categoryId === 2) {
                return (
                  <>
                    <Card.Text>
                      {renderSubname(e.subcategoryId)} -{" "}
                      {e.response === true ? "SI" : "NO"}
                    </Card.Text>
                    {e.image && <Card.Img src={e.image}></Card.Img>}
                    <Card.Text>Observaciones: {e.observation}</Card.Text>
                  </>
                );
              }
            })}
          </Card.Body>
          <Card.Body>
            <Card.Title>{renderCatname(3)}</Card.Title>
            {visitDetail.Inspections.map((e) => {
              if (e.categoryId === 3) {
                return (
                  <>
                    <Card.Text>
                      {renderSubname(e.subcategoryId)} -{" "}
                      {e.response === true ? "SI" : "NO"}
                    </Card.Text>
                    {e.image && <Card.Img src={e.image}></Card.Img>}
                    <Card.Text>Observaciones: {e.observation}</Card.Text>
                  </>
                );
              }
            })}
          </Card.Body>
          <Card.Body>
            <Card.Title>{renderCatname(4)}</Card.Title>
            {visitDetail.Inspections.map((e) => {
              if (e.categoryId === 4) {
                return (
                  <>
                    <Card.Text>
                      {renderSubname(e.subcategoryId)} -{" "}
                      {e.response === true ? "SI" : "NO"}
                    </Card.Text>
                    {e.image && <Card.Img src={e.image}></Card.Img>}
                    <Card.Text>Observaciones: {e.observation}</Card.Text>
                  </>
                );
              }
            })}
          </Card.Body>
          <Card.Body>
            <Card.Title>{renderCatname(5)}</Card.Title>
            {visitDetail.Inspections.map((e) => {
              if (e.categoryId === 5) {
                return (
                  <>
                    <Card.Text>
                      {renderSubname(e.subcategoryId)} -{" "}
                      {e.response === true ? "SI" : "NO"}
                    </Card.Text>
                    {e.image && <Card.Img src={e.image}></Card.Img>}
                    <Card.Text>Observaciones: {e.observation}</Card.Text>
                  </>
                );
              }
            })}
          </Card.Body>
          <Card.Body>
            <Card.Title>{renderCatname(6)}</Card.Title>
            {visitDetail.Inspections.map((e) => {
              if (e.categoryId === 6) {
                return (
                  <>
                    <Card.Text>
                      {renderSubname(e.subcategoryId)} -{" "}
                      {e.response === true ? "SI" : "NO"}
                    </Card.Text>
                    {e.image && <Card.Img src={e.image}></Card.Img>}
                    <Card.Text>Observaciones: {e.observation}</Card.Text>
                  </>
                );
              }
            })}
          </Card.Body>
          <Card.Body>
            <Card.Title>{renderCatname(7)}</Card.Title>
            {visitDetail.Inspections.map((e) => {
              if (e.categoryId === 7) {
                return (
                  <>
                    <Card.Text>
                      {renderSubname(e.subcategoryId)} -{" "}
                      {e.response === true ? "SI" : "NO"}
                    </Card.Text>
                    {e.image && <Card.Img src={e.image}></Card.Img>}
                    <Card.Text>Observaciones: {e.observation}</Card.Text>
                  </>
                );
              }
            })}
          </Card.Body>
          <Card.Body>
            <Card.Title>{renderCatname(8)}</Card.Title>
            {visitDetail.Inspections.map((e) => {
              if (e.categoryId === 8) {
                return (
                  <>
                    <Card.Text>
                      {renderSubname(e.subcategoryId)} -{" "}
                      {e.response === true ? "SI" : "NO"}
                    </Card.Text>
                    {e.image && <Card.Img src={e.image}></Card.Img>}
                    <Card.Text>Observaciones: {e.observation}</Card.Text>
                  </>
                );
              }
            })}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
