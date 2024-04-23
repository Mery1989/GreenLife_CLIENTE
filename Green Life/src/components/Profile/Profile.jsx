import './Profile.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Profile() {
  return (

    <div className='profilebox'>    
      <Card className='custom-card '>
      <Card.Img className = "custom-img" variant="top" src="fotoReyes.jpg"/>
      <Card.Body className='contentBody'>
        <Card.Title>Mª Reyes Torres</Card.Title>
        <Card.Text>
          Fundadora
        </Card.Text>
        <Link to="/">
              <img
                className="profileIcono"
                src="public/blackFacebook.png"
                alt="Green Life Logo"
              />
              <img
                className="profileIcono"
                src="public/blackTwitter.png"
                alt="Green Life Logo"
              />
            </Link>
      </Card.Body>
    </Card>

    <Card className='custom-card '>
      <Card.Img className = "custom-img" variant="top" src="fotoReyes.jpg"/>
      <Card.Body className='contentBody'>
        <Card.Title>Laura del Valle</Card.Title>
        <Card.Text>
          Fundadora
        </Card.Text>
        <Link to="/">
              <img
                className="profileIcono"
                src="public/blackFacebook.png"
                alt="Green Life Logo"
              />
              <img
                className="profileIcono"
                src="public/blackTwitter.png"
                alt="Green Life Logo"
              />
            </Link>
      </Card.Body>
    </Card>

    <Card className='custom-card '>
      <Card.Img className = "custom-img" variant="top" src="fotoMelo.jpg"/>
      <Card.Body className='contentBody'>
        <Card.Title>Antonio Melo</Card.Title>
        <Card.Text>
          Fundador
        </Card.Text>
        <Link to="/">
              <img
                className="profileIcono"
                src="public/blackFacebook.png"
                alt="Green Life Logo"
              />
              <img
                className="profileIcono"
                src="public/blackTwitter.png"
                alt="Green Life Logo"
              />
            </Link>
      </Card.Body>
    </Card>

    <Card className='custom-card '>
      <Card.Img className = "custom-img" variant="top" src="fotoReyes.jpg"/>
      <Card.Body className='contentBody'>
        <Card.Title>María Márquez</Card.Title>
        <Card.Text>
          Fundadora
        </Card.Text>
        <Card.Link > 
          <Link to="/">
              <img
                className="profileIcono"
                src="public/blackFacebook.png"
                alt="Green Life Logo"
              />
              <img
                className="profileIcono"
                src="public/blackTwitter.png"
                alt="Green Life Logo"
              />
            </Link>
          </Card.Link>
        
      </Card.Body>
    </Card>

    </div>



  );
}

export default Profile;

