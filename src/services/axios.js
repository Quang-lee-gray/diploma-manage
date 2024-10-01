import axios from "axios";
const loginApi = (username, password) => {
  return axios.post("http://localhost:8000/login", {
    username: username,
    password: password,
  });
};

export { loginApi };
