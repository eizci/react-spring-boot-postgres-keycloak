import http from "../http-common";

class ApiService {
  getAll() {
    return http.get("/restaurant");
  }

  get(id) {
    return http.get(`/restaurant/${id}`);
  }

  create(data) {
    return http.post("/restaurant", data);
  }

  update(id, data) {
    return http.put(`/restaurant/${id}`, data);
  }

  delete(id) {
    return http.delete(`/restaurant/${id}`);
  }

  deleteAll() {
    return http.delete(`/restaurant`);
  }

  searchByName(name) {
    return http.get(`/restaurant/search/${name}`);
  }
  getUserInfo(name) {
    return http.get(`/restaurant/search/${name}`);
  }
  saveUser(name) {
    return http.get(`/restaurant/search/${name}`);
  }
}

export default new ApiService();