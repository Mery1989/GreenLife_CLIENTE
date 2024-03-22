import './Profile.css';
import Card from 'react-bootstrap/Card';

function Profile() {
  return (
    <Card className='custom-card'>
      <Card.Img className = "custom-img" variant="top" src="fotoReyes.jpg"/>
      <Card.Body className='contentBody'>
        <Card.Title>Mª Reyes Torres</Card.Title>
        <Card.Text>
          Fundadora
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Profile;

