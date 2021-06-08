import axios from 'axios';

// https://randomuser.me/api/?results=5000
const userAPI = {
    get: function() {
        return axios.get('https://randomuser.me/api/?results=500&inc=name,email,id');
    }
}

export default userAPI;
  