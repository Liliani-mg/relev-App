import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardError() {
const image = "https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp"

  return (
    <Container className='auto'>

    <Card >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Pagina no se encontró</Card.Title>
        <Card.Text>
          Error 404
        </Card.Text>
        <Link to="/">
        <Button variant="primary">Volver a Home</Button>
        </Link>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default CardError;