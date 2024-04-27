import axios from "axios";

class HuellaService {
  constructor() {
    this.api = axios.create({ baseURL: "http://localhost:5005/api/huella" });
  }

  getAllHuella = () => {
    return this.api.get("/getAllHuella");
  };

  saveHuella = (huella) => {
    return this.api.post("/saveHuella", huella);
  };

  getOneHuella = id => {
    return this.api.get(`/getOneHuella/${id}`);
  }
}

const huellaService = new HuellaService();

export default huellaService;
