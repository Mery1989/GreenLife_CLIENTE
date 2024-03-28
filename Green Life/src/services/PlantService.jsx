import axios from "axios";
//se centralizan todas las llamadas
class PlantService {
  constructor() {
    this.api = axios.create({ baseURL: "http://localhost:5005/api/plants" });
  }
  //todas las peticiones que comienzen con esta url se crean aqui, post, put, delete

  //todos los esquejes
  getAllPlants = () => {
    return this.api.get("/getAllPlants");
  };

  //esqueje por ID

  getOnePlant = id => {
    return this.api.get(`/getOnePlant/${id}`);
  }
  
  //crear esqueje

  savePlant = plants => {
    return this.api.post(`/savePlant/`, plants)
  }



}

const plantService = new PlantService();

export default plantService;
