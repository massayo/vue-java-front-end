import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/TutorialsList.vue")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/TutorialDesc.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial.vue")
  },
  {
    path: "/departments",
    name: "departments",
    component: () => import("./components/DepartmentsList.vue")
  },
  {
    path: "/departments/:id",
    name: "department-details",
    component: () => import("./components/DepartmentDesc.vue")
  },
  {
    path: "/add-department",
    name: "add-department",
    component: () => import("./components/AddDepartment.vue")
  },
  {
    path: "/employees",
    name: "employees",
    component: () => import("./components/EmployeesList.vue")
  },
  {
    path: "/employees/:id",
    name: "employee-details",
    component: () => import("./components/EmployeeDesc.vue")
  },
  {
    path: "/add-employee",
    name: "add-employee",
    component: () => import("./components/AddEmployee.vue")
  },
  {
    path: "/departments/:id/employees",
    name: "employes-by-dep",
    component: () => import("./components/EmployeeListByDepartment.vue")
  },
  {
    path: "/dep-employees",
    name: "dep-employees",
    component: () => import("./components/DepEmployees.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
