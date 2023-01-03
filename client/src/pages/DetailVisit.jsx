import React from 'react'
import Menu from "../components/Menu";
import Container from 'react-bootstrap/esm/Container';
import Detail from '../components/Detail';


export default function DetailVisit ()  {
const user = JSON.parse(localStorage.getItem("user"));
const visit = JSON.parse(localStorage.getItem("visit"));

  return (
    <Container>
       <Menu/>
       <Detail userA={user} visitA={visit}/>      
    </Container>
  )
}
