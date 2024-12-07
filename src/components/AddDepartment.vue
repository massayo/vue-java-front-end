<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <form enctype="multipart/form-data" method="post">
        <div class="form-group">
          <label for="name">Select file</label>
          <input
            type="file"
            class="form-control"
            id="file"
            required
            @change="initFile"
            name="file"
            ref="file"
          />
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="department.name"
            name="name"
          />
        </div>
        <div class="form-group">
          <label for="name">Surname</label>
          <input
            type="text"
            class="form-control"
            id="surname"
            required
            v-model="department.surname"
            name="name"
          />
        </div>
      </form>
      <button @click="saveDepartment" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newDepartment">Add</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import DepartmentDataService from "../services/DepartmentDataService";

export default {
  name: "add-department",
  data() {
    return {
      department: {
        id: null,
        name: "",
        surname: ""
      },
      submitted: false,
      files: null
    };
  },
  methods: {
    initFile() {
        this.files = this.$refs.file.files[0];
        //this.files = e.target.files[0];
      },
    saveDepartment() {
      var data = new FormData();
      data.append('file_name', this.files);//document.getElementById('file'));//this.files);
      data.append('name', this.department.name);
      data.append('surname', this.department.surname);

      let config = {
      header : {
       'Content-Type' : 'multipart/form-data'
     }
    }

    axios.post("http://localhost:8081/api/departments",data,config)
    .then(response => {
          this.department.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
      /*DepartmentDataService.create(data,config)
        .then(response => {
          this.department.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });


        axios({
url:’http://your.rest.ap.’,
data:this.formData
method:’POST’
headers:{
Accpet: ’application/json’
‘content-type’ : ’multipart/form-data’
}, })
        */


    },

    newDepartment() {
      this.submitted = false;
      this.department = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
