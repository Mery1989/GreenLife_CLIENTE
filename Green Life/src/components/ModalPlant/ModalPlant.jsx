import { Container, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import plantService from "../../services/PlantService";
import PlantCreateForm from "../../components/PlantCreateForm/PlantCreateForm";


const ModalPlant = () => {

  const [plants, setPlant] = useState([])
  const [showModal, setShowModal] = useState(false)

  
  //que quieres hacer cuando cargue (cargar el componente)
  useEffect(() => {
    loadPlants()
  }, [])

  //montar los eventos
  const loadPlants = () => {
    plantService
      .getAllPlants()
      .then(({ data }) =>{
        console.log("Lista de esquejes cargada:", data);
        setPlant(data)
      })
      .catch(err => console.log(err))
  }

  //cierra y abre el modal
  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);
  
  return (
    <Container>
      <center>
          <Button onClick={handleModalOpen} className="DetailButton">
            Crear nuevo esqueje
          </Button>
      </center>

        

      <Modal show={showModal} onHide={handleModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Crea un esqueje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PlantCreateForm closeModal={handleModalClose} refreshPlants={loadPlants} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ModalPlant;