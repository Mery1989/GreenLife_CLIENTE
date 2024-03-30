import { Container, Dropdown } from "react-bootstrap";
import "./userProfilePage.css";
import ModalPlant from "../../components/ModalPlant/ModalPlant";
import ModalEvent from "../../components/ModalEvent/ModalEvent";

const UserProfilePage = () => {
  return (
    <Container>
      <div className="Profiletop">
        <div className="ProfileData">
          <h1>USUARIO</h1>
          <div className="profileRow">
            <img
              className="profileIcon"
              alt="esacio para resultado de la huella de carbono"
              src="mailIcon.png"
            />
            <p>mail</p>
          </div>
          <div className="profileRow">
            <img
              className="profileIcon"
              alt="esacio para resultado de la huella de carbono"
              src="phoneIcon.png"
            />
            <p>telf</p>
          </div>
          <div className="profileRow">
            <img
              className="profileIcon"
              alt="esacio para resultado de la huella de carbono"
              src="wordIcon.png"
            />
            <p>Localización</p>
          </div>
        </div>

        <div className="ProfileData">
          <img
            className="profilePicture"
            alt="perfil del usuario"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1711712470/pexels-heitor-verdi-2169434_ngr63m.jpg"
          />
        </div>
      </div>
      <br />
      <div className="Profiletop">
        <div className="Profilehuella">
          <h3>Huella de carbono</h3>
          <p>
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in belief.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            nisi in justo ultrices ullamcorper. Sed nec arcu risus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam finibus lorem
            libero
          </p>
          <img
            className="profilePicture"
            alt="esacio para resultado de la huella de carbono"
            src="https://res.cloudinary.com/ddtolhmab/image/upload/v1709287621/pexels-surene-palvie-2062061_3_fn7reb.jpg"
          />
        </div>
        <div className="ProfileCosas">
          <h3>Mis cosas</h3>
          <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>

          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="pestañaProfile">
              Calcular huella de carbono
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <p className="pestañaP">Aprende más sobre tus hábitos de consumo y encuentra maneras de vivir de forma más sostenible. 
                ¡Haz clic y comienza a construir un futuro más verde ahora mismo!</p>
              <Dropdown.Item href="#/action-3">boton calcular la huella de carbono</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <br />
            <br />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="pestañaProfile">
            Intercambiar nuevo  esqueje
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <p className="pestañaP">¿Quieres multiplicar tus plantas favoritas? Nuestro botón para esquejes hace que sea pan comido.<br/>
              ¡Haz clic y empieza a cultivar tu propio jardín hoy mismo!</p>
              <Dropdown.Item href="#/action-3"><ModalPlant /></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <br />
            <br />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="pestañaProfile">
            Crear evento nuevo
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <p className="pestañaP">Haz que la gestión del tiempo sea sencilla y eficaz con nuestro práctico botón para crear eventos!</p>
              <Dropdown.Item href="#/action-3"><ModalEvent /></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>




          
          
        </div>
      </div>
      <br />
      <div>
        <h3>Mis mensajes</h3>
        <h6>*Próximamente</h6>
      </div>
      <br />
      <div>
        <h3>Mis eventos</h3>
      </div>
      <br />
      <div>
        <h3>Mis esquejes</h3>
      </div>
    </Container>
  );
};

export default UserProfilePage;
