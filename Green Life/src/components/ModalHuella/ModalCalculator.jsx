import { Container, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import CalculatorForm from "../CalculatorForm/CalculatorForm";


const ModalCalculator = () => {

  
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: ''
});

const handleChange = (event) => {

    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que necesites con los datos del formulario
    console.log(formData);
};

  //cierra y abre el modal
  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);
  
  return (
    <Container>
      <center>
          <Button onClick={handleModalOpen} className="DetailButton">
            Calcula tu huella de Carbono
          </Button>
      </center>

        

      <Modal show={showModal} onHide={handleModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Calcula tu huella de Carbono</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CalculatorForm closeModal={handleModalClose}/>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ModalCalculator;