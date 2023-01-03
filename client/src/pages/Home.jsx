import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import { Link, useNavigate } from "react-router-dom";
import AlreadyLogin from "../components/AlreadyLogin";

export default function Landing() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const isLogin = user?.id
  const image =
    "https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-pagina-inicio-sesion_335657-3875.jpg?w=2000";
    console.log(user)
  return (
    <>
      {user ? (
       
        <AlreadyLogin />
      ) : (
        <Container>
          <Row xs={1} md={2} lg={2}>
            <Col>
              <Image fluid src={image} />
            </Col>

            <Col style={{ padding: 50, marginTop: 200 }}>
              <Link to="/login">
                <Button style={{ marginRight: 30 }} variant="primary" size="lg">
                  Iniciar Sesion
                </Button>
              </Link>
              {/* <Link to="/register">
              <Button variant="primary" size="lg">
                Registrarse
              </Button>
            </Link> */}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
