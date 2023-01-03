import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const { REACT_APP_API_URL = "http://localhost:3001" } = process.env;

export default function Login() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleRedirect = (link) => navigate(link);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  async function login(input) {
    console.log(input);
    await axios
      .post(REACT_APP_API_URL + "/auth/login", input)
      .then((response) => {
        const respuesta = response.data;
        localStorage.setItem("user", JSON.stringify(respuesta.body));
        response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();
    login(input);
    handleRedirect("/panel");
    // if (input.email.length === 0 || input.password.length === 0) {
    //   alert("complete email y contraseña");
    // } else {
    //   login(input);
    //   if (user) {
    //     if (!user.roleId) {
    //       alert("usuario o contraseña invalidos");
    //     } else if (user.roleId != 1){
    //       handleRedirect("/");
    //     }
    //   }
    // }
  }

  function handleChange(e) {
    e.preventDefault();
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setInput(newInput);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="email"
            type="email"
            placeholder="Ingresa tu email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="password"
            type="password"
            placeholder="Contraseña"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>

        <Button
          variant="secondary"
          type="button"
          handleClick={() => handleRedirect("/register")}
        >
          Registrarse
        </Button>
      </Form>
    </Container>
  );
}
