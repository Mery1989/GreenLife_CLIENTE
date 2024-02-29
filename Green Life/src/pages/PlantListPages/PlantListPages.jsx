import axios from "axios";
import { useEffect, useState } from "react";

const PlantListPage = () => {
  //traer lista de datos que comienza con un array vacio
  let [plant, setPlants] = useState([]);

  //cuando se monte en la card, solo en el 1º montaje
  useEffect(() => {
    axios
      .get("http://localhost:5005/api/plants/getAllPlants")
      .then(({ data }) => setPlants(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul>
      {plant.map((plant) => (
        <li>{plant.name}</li>
      ))}
    </ul>
  );
};

export default PlantListPage;