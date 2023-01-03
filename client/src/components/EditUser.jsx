import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

export default function EditUser() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Equipo</Form.Label>
          <Form.Select
          //   value={type}
          //   onChange={(e) => setType(e.currentTarget.value)}
          >
            <option value="">Selecciona un equipo</option>
            <option value="TELECOMUNICACIONES">Telecomunicaciones</option>
            <option value="MICROINFORMATICA">Microinformatica</option>
            <option value="SUPERVISOR">Supervisor</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control type="text-muted" placeholder="Nombre y Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Direccion de email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Contraseña">
            <Form.Control type="password" placeholder="Contraseña" />
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          Editar 
        </Button>
      </Form>
    </Container>
  );
}