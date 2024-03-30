import { Container } from "react-bootstrap";
import FormSingup from "../../components/UserSingup/UserSingup/UserSingup";
import "./UserSingupPages.css";

const UserSingupPage = () => {
  return (
    <Container>
      <h2 className="formularioH2">Formulario de registro</h2>
      <div className="formrow">
        <img
          alt="maceta con hojas verdes"
          className="imageForm"
          src="./../../../public/userform.png"
        />
        <FormSingup />
      </div>
    </Container>
  );
};

export default UserSingupPage;
