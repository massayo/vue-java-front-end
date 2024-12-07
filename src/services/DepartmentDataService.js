import http from "../http-common";

class DepartmentDataService {
  getAllDepartments() {
    return http.get("/departments");
  }

  get(id) {
    return http.get(`/departments/${id}`);
  }

  create(data) {
    /*let config = {
      header : {
       'Content-Type' : 'multipart/form-data'
     }
    }*/
    return http.post("/departments", data);//, config);
  }

  update(id, data) {
    return http.put(`/departments/${id}`, data);
  }

  delete(id) {
    return http.delete(`/departments/${id}`);
  }

  findByTitle(title) {
    return http.get(`/departments?title=${title}`);
  }
}

export default new DepartmentDataService();
