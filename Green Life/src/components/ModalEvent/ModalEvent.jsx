import { useEffect, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import eventService from "../../services/EventService";
import EventCreateForm from "../../components/EventCreateForm/EventCreateForm";

const ModalEvent = () => {

  console.log("EventListPage renderizado");

  const [events, setEvent] = useState([])
  const [showModal, setShowModal] = useState(false)


  //que quieres hacer cuando cargue (cargar el componente)
  useEffect(() => {
    loadEvents()
  }, [])

  //montar los eventos
  const loadEvents = () => {
    eventService
      .getAllEvents()
      .then(({ data }) =>{
        console.log("Lista de eventos cargada:", data);
        setEvent(data)
      })
      .catch(err => console.log(err))
  }

  //cierra y abre el modal
  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);

  return (
    <>
      <Container>
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

export default ModalEvent;
