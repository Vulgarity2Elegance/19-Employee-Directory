import axios from "axios";

const RandomAPI = "https://randomuser.me/api/?results=20";

export default {
  getUsers: function () {
    return axios.get(RandomAPI);
  },
};
