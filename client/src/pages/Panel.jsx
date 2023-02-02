import React, { useEffect } from "react";
import axios from "axios";
import Menu from "../components/Menu";
import PanelAdmin from "../components/PanelAdmin";
import PanelUser from "../components/PanelUser";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
const { REACT_APP_API_URL = "http://localhost:3001" } = process.env;

export default function Panel() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const visits = JSON.parse(localStorage.getItem("visits"));
  // const [stateVisit, setStateVisit]= useState ({})
  // setStateVisit(visits)
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

  function handleclose(e) {
    e.preventDefault();
    console.log();
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <Container>
      <Menu />
      {user && user.roleId === 3 ? (
        <PanelAdmin visits={visits} userA={user} />
      ) : (
        <PanelUser userU={user} />
      )}
      <Button type="button" onClick={handleclose}>
        Cerrar sesión
      </Button>
    </Container>
  );
}
