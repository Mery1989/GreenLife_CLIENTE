import axios from "axios";

class LoginService {
  constructor() {
    this.api = axios.create({ baseURL: "http://localhost:5005/api/user" });
  }

  sendSignup = async (userData) => {
    try {
      const response = await this.api.post("/login", userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Respuesta del servidor:', response.data);
      return response.data; 
    } catch (error) {
      console.error('Error al realizar el login:', error.response.data);
      throw error; 
    }
  };
}

const loginService = new LoginService();
export default loginService;
