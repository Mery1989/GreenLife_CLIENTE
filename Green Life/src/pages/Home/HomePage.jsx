import { Container } from "react-bootstrap"
import Carrousel from "../../components/Carrousel/Carrousel"
import Plants from "../../components/Plants/Plants"
import Events from "../../components/Events/Events"
import Calculator from "../../components/Calculator/Calculator"

const HomePage = () => {
  return (
    <>
      <Carrousel />
      <Container>
        <Events />
        <Plants />
        <Calculator />
      </Container>
    </>
  );
};

export default HomePage
