import axios from "axios";

class Api {
  // baseURL = "";
  api = axios.create({ baseURL: "http://localhost:8000/api"});

  async getProjects() {
    const { data } = await this.api.get("/project");


    //changed to data
    return data;
  }

  async createProject(payload) {
    const response = await this.api.post("/project", payload);
    return response;
  }

  async updateProject(payload, id) {
    const response = await this.api.put(`/project/${id}`, payload);
    return response;
  }

  async deleteProject(id) {
    const response = await this.api.delete(`/project/${id}`);
    return response;
  }
}

export default Api;
