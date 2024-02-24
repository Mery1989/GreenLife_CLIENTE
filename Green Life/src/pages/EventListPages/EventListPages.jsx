import axios from "axios";
import { useEffect, useState } from "react";

const EventListPage = () => {
  //traer lisata de datos que comienza con un array vacio
  let [eventos, setEventos] = useState([]);

  //cuando se monte en la card, solo en el 1º montaje
  useEffect(() => {
        axios
        .get('http://localhost:5005/api/event/getAllEvents')
        .then (response => setEventos(response.data))
        .catch (err => console.log(err))
    }, [])

  return <h1>LOS EVENTOOOOSSSS</h1>;
};

export default EventListPage;
