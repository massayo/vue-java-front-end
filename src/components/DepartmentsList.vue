<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="name"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Departments List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(department, index) in departments"
          :key="index"
          @click="setActiveDepartment(department, index)"
        >
          {{ department.name }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllDepartments">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentDepartment">
        <h4>Department</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentDepartment.name }}
        </div>


        <router-link :to="'/departments/' + currentDepartment.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Department...</p>
      </div>
    </div>
  </div>
</template>

<script>
import DepartmentDataService from "../services/DepartmentDataService";

export default {
  name: "departments-list",
  data() {
    return {
      departments: [],
      currentDepartment: null,
      currentIndex: -1,
      name: ""
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

    refreshList() {
      this.retrieveDepartments();
      this.currentDepartment = null;
      this.currentIndex = -1;
    },

    setActiveDepartment(department, index) {
      this.currentDepartment = department;
      this.currentIndex = department ? index : -1;
    },


    removeAllDepartments() {
      if(confirm("Do you want to delete all departments ?"))
      {
        /*DepartmentDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });*/
      }
    },

    searchTitle() {
      /*
      DepartmentDataService.findByTitle(this.title)
        .then(response => {
          this.departments = response.data;
          this.setActiveDepartment(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });*/
    }
  },
  mounted() {
    this.retrieveDepartments();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 1200px;
  margin: auto;
}
</style>
