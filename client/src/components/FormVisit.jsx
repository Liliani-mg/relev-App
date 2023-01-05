import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import CasaPrincipal from "./Sitios/CasaPincipal";
import Agroinsumos from "./Sitios/Agroinsumos";
import Balanza from "./Sitios/Balanza";
import Taller from "./Sitios/Taller";
import Hangar from "./Sitios/Hangar";
import HangarOficina from "./Sitios/HangarOficina";
import ExAgroinsumos from "./Sitios/ExAgroinsumos";
import Camaras from "./Sitios/Camaras";
const { REACT_APP_API_URL = "http://localhost:3001" } = process.env;

export default function FormVisit() {
  const user = JSON.parse(localStorage.getItem("user"));
  const visitCR = JSON.parse(localStorage.getItem("newvisit"));

  let actualDate = new Date().toISOString();
  const dateT = actualDate.slice(0, 10);

  const [input, setInput] = useState({
    userId: user.id,
    date: dateT,
    state: false,
    location: "",
  });
  const [visit, setvisit] = useState({});

  async function createVisit(input) {
    console.log(input);
    await axios
      .post(REACT_APP_API_URL + "/visits", input)
      .then((response) => {
        const respuesta = response.data.body;
        localStorage.setItem("newvisit", JSON.stringify(respuesta))
        return respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function editVisit(id , visit) {
    await axios
      .put(REACT_APP_API_URL + "/visits/" + id, visit)
      .then((response) => {
        const respuesta = response.data
        const estado = respuesta.state
        setvisit({
          ...visit,
         estado,
        });
        return respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createVisit(input);
    if(visitCR !== undefined) alert("Se abrio una nueva visita, puede seguir registrando")
  }
  function handleClickEdit(e) {
    e.preventDefault();
    editVisit(visitCR.id, visit);
  }

  
  function handleChangeLocation(e) {
    e.preventDefault();
    const newInput = {
      ...input,
      location: e.target.value,
    };
    setInput(newInput);
  }
    
  function handleChangeState(e) {
    e.preventDefault();
    const newInput = {
      ...visit,
      state: e.target.value,
    };
    setvisit(newInput);
  
  }

const localidad = visitCR.location

  return (
    <Container>
      <h1>Registrar una Visita</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ubicación</Form.Label>
          <Form.Control
          onChange={handleChangeLocation}
            name="location"
            type="text"
            placeholder={visitCR ? localidad : "Ingresa localidad"}
          />
          <Button disabled={visitCR ? true : false} type="submit">Abrir visita</Button>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <CasaPrincipal visit={visitCR} />
          <Agroinsumos visit={visit} />
          <Balanza visit={visit} />
          <ExAgroinsumos visit={visit} />
          <Camaras visit={visit} />
          <Hangar visit={visit} />
          <HangarOficina visit={visit} />
          <Taller visit={visit} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Cerrar/Terminar visita</Form.Label>
          <Form.Select
           onChange={handleChangeState}
            name="state"
            label="Terminar visita"
          >
            
                <option name="state" value={true}>
                  SI
                </option>
                <option name="state" value={false}>
                  NO
                </option>
          </Form.Select>
        </Form.Group>
        <Button onClick={handleClickEdit} >Guardar</Button>
      </Form>
    </Container>
  );
}
