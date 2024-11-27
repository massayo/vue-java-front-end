import http from "../http-common";

class EmployeeDataService {
  getAll() {
    return http.get("/employees");
  }

  get(id) {
    return http.get(`/employees/${id}`);
  }

  getByDepartment(id) {
    return http.get(`/departments/${id}/employees`);
  }

  create(iddep,data) {
    return http.post(`/departments/${iddep}/employees`, data);
  }

  update(iddep,id, data) {
    return http.put(`/employees/${id}/${iddep}`, data);
  }

  delete(id) {
    return http.delete(`/employees/${id}`);
  }
}

export default new EmployeeDataService();
