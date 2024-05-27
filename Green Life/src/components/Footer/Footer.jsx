import { Col, Container } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer>
            <div className='footer1'>
                <Container className='orden'>
                    <Col>
                        <Link to = "/login" className='link'><p>Green Life</p></Link>
                        <p></p>
                        <p>DIRECCION</p>
                        <p>Calle Madrid 32 Madrid, España</p>
                        <p>+12 3 0000 0000 contact@greenlife.com</p>    
                    </Col>

                    <Col>
                    <Link to = "/eventos" className='link1'><p>Eventos</p></Link>
                    </Col>

                    <Col>
                        <Link to = "/esquejes" className='link1'><p>Esquejes</p></Link>
                    </Col>

                    <Col>
                        <p>MÁS INFO</p>
                        <Link to = "/sobreNosotros" className='link2'><p>Sobre nosotros</p></Link>
                        <Link to = "/contactanos" className='link2'><p>Contáctanos</p></Link>
                    </Col>

                    <Col className='proximos-eventos'>
                    <Link to = "/" className='link1'><p>Próximos eventos</p></Link>
                    <p>Taller de abonos naturales</p>
                    <p>Conferencia ecológica</p>
                    </Col>
                    
                </Container>                

                <Container className='tamano'>
                    <Col className='orden-iconos'>
                    <Link to = "https://www.facebook.com/"><img alt="logo facebook" src='\public\icons8-facebook-nuevo-50.png'/></Link>
                    <Link to = "https://twitter.com/home?lang=es"><img alt="logo twitter"src='public\icons8-twitter-50.png'/></Link>
                    <Link to = "https://www.instagram.com/"> <img alt="logo instagram"src='\public\icons8-instagram-50.png'/></Link>
                    <Link to = "https://www.youtube.com/"><img alt="logo youtube"src='\public\icons8-youtube-50.png'/></Link>      
                                                                       
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