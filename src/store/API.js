import axios from "axios";
import { getItem } from "./storage";

const instance = axios.create({
  baseURL: "https://strengthbud.com/api/",
  responseType: "json"
});

class APIError extends Error {
  constructor({ message, fields }) {
    super();
    this.message = message;
    this.fields = fields;
  }
}

// Set the AUTH token for any request
instance.interceptors.request.use(config => {
  const user = getItem("@USER");
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

instance.interceptors.response.use(
  response => {
    if (response.data) {
      if (response.data.success) {
        return response.data.data;
      } else {
        if (response.data.message) {
          throw new Error(response.data.message);
        } else {
          throw new Error("Data error format returned incorrectly");
        }
      }
    } else {
      throw new Error("No data object");
    }
  },
  function(error) {
    let message = "Something went wrong",
      fields = [];
    if (error.response && error.response.data) {
      console.warn(error.response.data);
      if (error.response.data) {
        message = error.response.data.message || message;
        fields = error.response.data.fields || fields;
      }
    } else {
      console.warn(error);
    }
    throw new APIError({ message, fields });
  }
);

export default instance;
