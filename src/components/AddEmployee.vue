<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="employee.name"
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="department">Department</label>
        <select v-model="employee.dep_selected"
          class="form-control"
          id="dep_selected"
          required
          name="dep_selected">
          <option disabled value="">Please select one</option>
          <option
          v-for="(department, index) in departments"
          :key="index"
          :value="department.id"
          >
          {{ department.name }}
          </option>
        </select>
      </div>

      <button @click="saveEmployee" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newEmployee">Add</button>
    </div>
  </div>
</template>

<script>
import EmployeeDataService from "../services/EmployeeDataService";
import DepartmentDataService from "../services/DepartmentDataService";

export default {
  name: "add-employee",
  data() {
    return {
      departments: [],
      employee: {
        id: null,
        name: ""
      },
      submitted: false,
      dep_selected: null
    };
  },
  methods: {
    retrieveDepartments() {
      DepartmentDataService.getAllDepartments()
        .then(response => {
          this.departments = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    saveEmployee() {
      var data = {
        name: this.employee.name
      };

      EmployeeDataService.create(this.employee.dep_selected, data)
        .then(response => {
          this.employee.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newEmployee() {
      this.submitted = false;
      this.employee = {};
    }
  },
  mounted() {
    this.retrieveDepartments();
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
