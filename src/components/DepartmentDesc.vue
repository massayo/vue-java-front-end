<template>
  <div v-if="currentDepartment" class="edit-form">
    <h4>Department</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentDepartment.name"
        />
      </div>

    </form>

    <button class="badge badge-danger mr-2"
      @click="deleteDepartment"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateDepartment"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Department...</p>
  </div>
</template>

<script>
import DepartmentDataService from "../services/DepartmentDataService";

export default {
  name: "department-desc",
  data() {
    return {
      currentDepartment: null,
      message: ''
    };
  },
  methods: {
    getDepartment(id) {
      DepartmentDataService.get(id)
        .then(response => {
          this.currentDepartment = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentDepartment.id,
        title: this.currentDepartment.title,
        description: this.currentDepartment.description,
        published: status
      };

      DepartmentDataService.update(this.currentDepartment.id, data)
        .then(response => {
          console.log(response.data);

        })
        .catch(e => {
          console.log(e);
        });
    },

    updateDepartment() {
      DepartmentDataService.update(this.currentDepartment.id, this.currentDepartment)
        .then(response => {
          console.log(response.data);
          this.message = 'The department was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteDepartment() {
      if(confirm("Do you want to delete this department ?"))
      {
        DepartmentDataService.delete(this.currentDepartment.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "departments" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  },
  mounted() {
    this.message = '';
    this.getDepartment(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>

