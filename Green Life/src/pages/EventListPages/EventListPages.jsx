import { useEffect, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import BannerEvent from "../../components/Banner/EventBanner";
import EventList from "../../components/EventList/EventList";
import eventService from "../../services/EventService";
import EventCreateForm from "../../components/EventCreateForm/EventCreateForm";

const EventListPage = () => {

  const [events, setEvent] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() =>  {loadEvents()}, [])
  
  const loadEvents = () => {
    eventService
      .getAllEvents()
      .then(({ data }) => setEvent(data))
      .catch((err) => console.log(err));
  };

  //cierra y abre el modal
  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);

  return (
    <>
      <Container>
        <BannerEvent />
        <hr />
        <EventList events={events} />
        <center>
          <Button onClick={handleModalOpen} className="DetailButton">
            Crear nuevo evento
          </Button>
        </center>
      </Container>

      <Modal show={showModal} onHide={handleModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Crea un evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventCreateForm closeModal={handleModalClose} refreshEvents={loadEvents} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EventListPage;
