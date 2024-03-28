import axios from "axios";
//se centralizan todas las llamadas
class EventService {
  constructor() {
    this.api = axios.create({ baseURL: "http://localhost:5005/api/eventos" });
  }
  //todas las peticiones que comienzen con esta url se crean aqui, post, put, delete
  
  //todos los eventos
  getAllEvents = () => {
    return this.api.get("/getAllEvents");
  };

  //evento por ID

  getOneEvent = id => {
    return this.api.get(`/getOneEvent/${id}`);
  }

  //crear Evento

  saveEvento = events => {
    return this.api.post(`/saveEvento/`, events)
  }
}

const eventService = new EventService();

export default eventService;
