// import { LoginComponent } from "./pages/login/login.component";
// import { ListComponent } from "./pages/list/list.component";

// export const routes = [
//   { path: "", component: LoginComponent },
//   { path: "list", component: ListComponent }
// ];

// export const navigatableComponents = [
//   LoginComponent,
//   ListComponent
// ];


import {Departments} from "./pages/departments/departments";

export const routes = [
 	{ path: "", redirectTo: "/departments", terminal: true, pathMatch:"full" },
	{ path: "departments", component: Departments }
];

export const navigatableComponents = [
	Departments
];
