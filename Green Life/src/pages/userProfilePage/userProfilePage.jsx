import { useState, useEffect } from "react";
import { Container, Dropdown } from "react-bootstrap";
import "./userProfilePage.css";
import ModalPlant from "../../components/ModalPlant/ModalPlant";
import ModalEvent from "../../components/ModalEvent/ModalEvent";
import ModalCalculator from "../../components/ModalHuella/ModalCalculator";
import userService from "../../services/UserService";
import { useParams } from "react-router-dom"; 

const UserProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const { username } = useParams(); // Obtén el nombre de usuario de los parámetros de la URL

  useEffect(() => {
    // Hacer la solicitud para obtener los datos del perfil del usuario
    const fetchUserProfile = async () => {
      try {
        const userProfile = await userService.getUserProfile(username);
        setUserData(userProfile);
      } catch (error) {
        console.error("Error al obtener el perfil del usuario:", error);
      }
    };

    fetchUserProfile();
  }, [username]); // Agrega username como dependencia para que useEffect se ejecute cuando cambie
   // Función para formatear la fecha de nacimiento en formato europeo (DD/MM/YYYY)
  const formatDateOfBirth = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Container>
      <div className="Profiletop">
        <div className="ProfileData">
        {userData && (
            <>
              <h1>{userData.username}</h1>  
              <div className="profileRow">
                  <img
                    className="profileIcon"
                    alt="Icono de correo electrónico"
                    src="./../../../public/mailIcon.png"
                  />

                <p>{userData.email}</p>
              </div>
              <div className="profileRow">
                  <img
                    className="profileIcon"
                    alt="Icono de correo electrónico"
                    src="./../../../public/name.svg"
                  />

                <p>{userData.name}</p>
              </div>
              <div className="profileRow">
                  <img
                    className="profileIcon"
                    alt="Icono de correo electrónico"
                    src="./../../../public/birth.svg"
                  />

                <p>{formatDateOfBirth(userData.datebirth)}</p>
              </div>
              
              <div className="profileRow">
              <img
                className="profileIcon"
                alt="Icono de ubicación"
                src="./../../../public/wordIcon.png"
              />

                <p>{userData.location}</p>
              </div>
            </>
          )}
        </div>

        <div className="ProfileData">
        <img
            className="profilePicture"
            alt="Perfil del usuario"
            src="./../../../public/imagenPerfil.jpg"
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
              <Dropdown.Item href="#/action-3"><ModalCalculator/></Dropdown.Item>
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