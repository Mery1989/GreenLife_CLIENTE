import axios from "axios";
import { useEffect, useState } from "react";

const EventListPage = () => {
  //traer lisata de datos que comienza con un array vacio
  let [event, setEventos] = useState([]);

  //cuando se monte en la card, solo en el 1º montaje
  useEffect(() => {
    axios
      .get("http://localhost:5005/api/eventos/getAllEvents")
      .then(({ data }) => setEventos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul>
      {event.map((event) => (
        <li>{event.name}</li>
      ))}
    </ul>
  );
};

export default EventListPage;
