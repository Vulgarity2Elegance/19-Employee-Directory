import axios from "axios";

const randomMAPI = "https://randomuser.me/api/?results=100&nat=au";

export default {
  getUsers: function () {
    return axios.get(randomMAPI);
  },
};
