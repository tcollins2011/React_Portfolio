import axios from "axios";

export default {
  sendEmail: function (email) {
    return axios.post("/api/email", email);
  },
};
