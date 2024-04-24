import { Container } from "react-bootstrap"
import Carrousel from "../../components/Carrousel/Carrousel"
import Plants from "../../components/Plants/Plants"
import Events from "../../components/Events/Events"
import Calculator from "../../components/Calculator/Calculator"
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
      <Carrousel/>
      <Container className="HomeCards">
        <Events/>
        <Plants />
      </Container>
      <Calculator />
    </>
  );
};

export default HomePage
