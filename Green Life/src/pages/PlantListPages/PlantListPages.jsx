import { Container } from "react-bootstrap";
import PlantList from "../../components/PlantList/PlantList";
import BannerPlant from "../../components/BannerPlant/BannerPlant";
import ModalPlant from "../../components/ModalPlant/ModalPlant";


const PlantListPage = () => {
  return (
    <Container>
      <BannerPlant/>
      <hr />
      <PlantList/>
      
      </Container>
  );
};

export default PlantListPage;