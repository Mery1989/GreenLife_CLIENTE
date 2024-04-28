import { Container } from "react-bootstrap";
import BannerEvent from "../../components/Banner/EventBanner";
import EventList from "../../components/EventList/EventList";
import ModalEvent from "../../components/ModalEvent/ModalEvent";

const EventListPage = () => {

  return (
    <>
      <Container>
        <BannerEvent />
        <hr />
        <EventList/>
        
        </Container>
    </>
  );
};

export default EventListPage;

