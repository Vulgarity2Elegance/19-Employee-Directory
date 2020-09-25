import axios from "axios";

const RandomAPI = "https://randomuser.me/api/";

export default {
  getUsers: function () {
    return axios.get(RandomAPI);
  },
};
