import axios from "axios";
//se centralizan todas las llamadas
class EventService {
  constructor() {
    this.api = axios.create({ baseURL: "http://localhost:5005/api/eventos" });
  }
  //todas las peticiones que comienzen con esta url se crean aqui, post, put, delete
  getAllEvents = () => {
    return this.api.get("/getAllEvents");
  };
}

const eventService = new EventService();

export default eventService;
