<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">bezKoder</router-link>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Add</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/departments" class="nav-link">Departments</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add-department" class="nav-link">Add Department</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/employees" class="nav-link">Employees</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add-employee" class="nav-link">Add Employee</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/dep-employees" class="nav-link">Employee by dep</router-link>
          </li>

        </div>
      </nav>
    </div>
    <br>
    <div class="container mt-3" style="width:600px">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

