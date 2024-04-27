import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({ baseURL: "http://localhost:5005/api/user" });
  }

  sendSingup = async (userData) => {
    try {
      const response = await this.api.post("/signup", userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Respuesta del servidor:', response.data);
      return response.data; 
    } catch (error) {
      console.error('Error al enviar el evento:', error.response.data);
      throw error; 
    }
  };

 getUserProfile = async (username) => {
    try {
      const response = await this.api.get(`/user/${username}/profile`);
      return response.data; 
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error.response.data);
      throw error; 
    }
  };
}
  
const userService = new UserService();
export default userService;
