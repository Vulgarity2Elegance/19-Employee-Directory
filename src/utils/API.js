import axios from "axios";

const randomMAPI = "https://randomuser.me/api/?results=20&nat=au";

export default {
  getUsers: function () {
    return axios.get(randomMAPI);
  },
};
