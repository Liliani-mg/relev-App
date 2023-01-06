import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const { REACT_APP_API_URL = "http://localhost:3001" } = process.env;


export default function Register() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleRedirect = (link) => navigate(link);

  const [input, setInput] = useState({
    email: "",
    name: "",
    roleId: 2,
    areaId: 0,
    password: "",
  });

  async function register(input) {
    console.log(input);
    await axios
      .post(REACT_APP_API_URL + "/users/register", input)
      .then((response) => {
        const respuesta = response.data;
        console.log(respuesta, "REGISTRO RESPUESTA");
        localStorage.setItem("user", JSON.stringify(respuesta.body));
        handleRedirect("/panel");
        response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();
    register(input);
    console.log("handle SUBMIT",user);
    //handleRedirect("/panel");
  }

  function handleChange(e) {
    e.preventDefault();
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    };
    console.log(newInput)
    setInput(newInput);
  }

  function handleArea(e) {
    e.preventDefault();
    const newInput = {
      ...input,
      areaId: e.target.value,
    };
    console.log(newInput)
    setInput(newInput);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Equipo</Form.Label>
          <Form.Select onChange={(e) => handleArea(e)}>
            <option value="">Selecciona un equipo</option>
            <option name="areaId" value={1} >Telecomunicaciones</option>
            <option  name="areaId" value={2}>Microinformatica</option>
          
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control onChange={(e) => handleChange(e)} name="name" type="text-muted" placeholder="Nombre y Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Direccion de email"
            className="mb-3"
          >
            <Form.Control onChange={(e) => handleChange(e)} name="email" type="email" placeholder="nombre@ejemplo.com" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Contraseña">
            <Form.Control onChange={(e) => handleChange(e)} name="password"  type="password" placeholder="Contraseña" />
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrarme
        </Button>
      </Form>
    </Container>
  );
}
