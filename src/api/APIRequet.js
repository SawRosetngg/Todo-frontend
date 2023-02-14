import axios from "axios";

class APIRequest {
  constructor() {
    this.baseURL = "http://localhost:8080";
  }

  createProject(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.baseURL}/api/v1/projects`, payload)
        .then((response) => {
          return resolve({
            code: 1,
            status: "Success",
            message: "Successfully created project",
            payload: response.data.data,
          });
        })
        .catch((error) => {
          return reject({
            code: 0,
            status: "Fail",
            message: error,
          });
        });
    });
  }

  getProjects() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseURL}/api/v1/projects`)
        .then((response) => {
          return resolve({
            code: 1,
            status: "Success",
            message: "Project lists",
            payload: response.data.data,
          });
        })
        .catch((error) => {
          return reject({
            code: 0,
            status: "Fail",
            message: error,
            payload: [],
          });
        });
    });
  }

  getTasksByProject() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseURL}/api/v1/tasks`)
        .then((response) => {
          return resolve({
            code: 1,
            status: "Success",
            message: "Project lists",
            payload: response.data.data,
          });
        })
        .catch((error) => {
          return reject({
            code: 0,
            status: "Fail",
            message: error,
            payload: [],
          });
        });
    });
  }
}

export default APIRequest;
