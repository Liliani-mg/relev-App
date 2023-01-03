import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Nav from "react-bootstrap/Nav";
import { useNavigate } from 'react-router-dom';

export default function Menu ()  {
  const navigate = useNavigate();

function handleclose (e){
  e.preventDefault()
  console.log();
  localStorage.clear()
  navigate("/")
}
 
  return (
    <Container>
     
          <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
       
      </Nav.Item>
    
    </Nav>
   
    </Container>
  )
}
