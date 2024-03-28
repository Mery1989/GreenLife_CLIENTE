import { useEffect, useState } from "react";
import {Row, Col } from "react-bootstrap";
import PlantCard from "../PlantCard/PlantCard";
import plantService from "../../services/PlantService";


const PlantList = () => {


    let [plant, setPlants] = useState([]);


    useEffect(() => {
      plantService
        .getAllPlants()
        .then(({ data }) => setPlants(data))
        .catch((err) => console.log(err));

    }, []);
 
return(


    <Row>
        {plant.map((plant) => {
          return ( <Col md={4} key={plant._id}> <PlantCard {...plant}/></Col>);
        })}
      </Row>


)
}


export default PlantList