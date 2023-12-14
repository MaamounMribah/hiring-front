import axios from 'axios';
const USER_API_BASE_URL ="http://localhost:8090/api/v1/users/all";

class UserService{
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
createUser(user){
    return axios.post("http://localhost:8090/api/v1/users/create",user);

}
getUserById(id) {
    return axios.get(`http://localhost:8090/api/v1/users/getUserById/${id}`);
  }
updateUser(id, user) {
    return axios.put(`http://localhost:8090/api/v1/users/updateUser/${id}`, user);
    // Assurez-vous que l'URL de mise à jour est correcte et correspond à votre API
  }
}
export default new UserService()