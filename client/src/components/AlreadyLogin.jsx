import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup"
import { Link, useNavigate } from 'react-router-dom';

function AlreadyLogin() {
    const navigate = useNavigate()
function handleclose (e){
    e.preventDefault()
    console.log();
    localStorage.clear()
    localStorage.removeItem("visit")
    navigate("/")
  }
  

  return (
    <Container  gap={2} className="col-md-5 mx-auto" fluid="md">

    <Card >
     
      <Card.Body  gap={2} className="col-md-8 mx-auto"  >
        <Card.Header><h3>Sesion Iniciada</h3></Card.Header>
        <ListGroup variant="flush">
        <ListGroup.Item> <Button onClick={handleclose} variant="primary">Cerrar sesión</Button></ListGroup.Item>
        <ListGroup.Item>  <Link to="/panel">
        <Button variant="primary">Continuar al panel</Button>
        </Link></ListGroup.Item>
       
      </ListGroup>
        
       
       
      
      </Card.Body>
    </Card>
    </Container>
  );
}

export default AlreadyLogin;