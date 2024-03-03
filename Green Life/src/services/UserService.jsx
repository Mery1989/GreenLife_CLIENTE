import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({ baseURL: "http://localhost:5005/api/user" });
  }

 

    sendSingup = async (UserData) => {
      try {
        const response = await this.api.post("/signup", UserData, {
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
  }
  
  const userService = new UserService();
  export default userService;
