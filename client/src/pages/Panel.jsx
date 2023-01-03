import React from 'react'
import Menu from "../components/Menu";
import PanelAdmin from '../components/PanelAdmin';
import PanelUser from '../components/PanelUser';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';


export default function Panel ()  {
const user = JSON.parse(localStorage.getItem("user"));
const navigate = useNavigate();

function handleclose (e){
  e.preventDefault()
  console.log();
  localStorage.removeItem("user")
  navigate("/")
}

  return (
    <Container>
       <Menu/>
       {
        user && user.roleId === 3 
        ? <PanelAdmin userA={user}/>
        : <PanelUser userU={user}/>
       }
       <Button type="button" onClick={handleclose}>Cerrar sesión</Button>
    </Container>
  )
}
