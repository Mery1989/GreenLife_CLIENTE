import { Col, Container } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer>
            <div className='footer1'>
                <Container className='orden'>
                    <Col>
                        <Link to = "/" className='link'><p>Green Life</p></Link>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>DIRECCION</p>
                        <p>+12 3 0000 0000 contact@greenlife.com</p>    
                    </Col>

                    <Col>
                    <Link to = "/" className='link'><p>Eventos</p></Link>
                    </Col>

                    <Col>
                        <Link to = "/" className='link'><p>Esquejes</p></Link>
                    </Col>

                    <Col>
                        <p>MÁS INFO</p>
                        <Link to = "/" className='link1'><p>Sobre nosotros</p></Link>
                        <Link to = "/" className='link1'><p>Contáctanos</p></Link>
                    </Col>

                    <Col className='proximos-eventos'>
                    <Link to = "/" className='link'><p>Próximos eventos</p></Link>
                    </Col>
                </Container>                

                <Container>
                    <Col className='orden-iconos'>
                     <img src='\public\icons8-facebook-nuevo-50.png'/>
                     <img src='public\icons8-twitter-50.png'/>
                     <img src='\public\icons8-instagram-50.png'/>
                     <img src='\public\icons8-youtube-50.png'/>                                                           
                    </Col>
                </Container>
            </div>

            <div className='footer2'>
                <p>GreenLife© - All rights reserved </p>
            </div>
        </footer>
    );
}
export default Footer;