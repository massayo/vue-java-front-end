<template>
  <div v-if="currentEmployee" class="edit-form">
    <h4>Employee</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentEmployee.name"
        />
      </div>
      <div class="form-group">
        <label for="department">Department</label>
        <select v-model="currentEmployee.dep"
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
    </form>

    <button class="badge badge-danger mr-2"
      @click="deleteEmployee"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateEmployee"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Employee...</p>
  </div>
</template>

<script>
import EmployeeDataService from "../services/EmployeeDataService";
import DepartmentDataService from "../services/DepartmentDataService";

export default {
  name: "employee-desc",
  data() {
    return {
      departments: [],
      employee: [],
      currentEmployee: null,
      message: ''
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
    getEmployee(id) {
      EmployeeDataService.get(id)
        .then(response => {
          this.currentEmployee = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    /*updatePublished(status) {
      var data = {
        id: this.currentEmployee.id,
        title: this.currentEmployee.title,
        description: this.currentEmployee.description,
        published: status
      };

      EmployeeDataService.update(this.currentEmployee.id, data)
        .then(response => {
          console.log(response.data);

        })
        .catch(e => {
          console.log(e);
        });
    },
    */
    updateEmployee() {
      EmployeeDataService.update(this.currentEmployee.dep,this.currentEmployee.id, this.currentEmployee)
        .then(response => {
          console.log(response.data);
          this.message = 'The employee was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteEmployee() {
      if(confirm("Do you want to delete this employee ?"))
      {
        EmployeeDataService.delete(this.currentEmployee.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "employees" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  },
  mounted() {
    this.message = '';
    this.getEmployee(this.$route.params.id);
    this.retrieveDepartments();
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>

