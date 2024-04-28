import { Container } from "react-bootstrap";
import PlantList from "../../components/PlantList/PlantList";
import BannerPlant from "../../components/BannerPlant/BannerPlant";



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