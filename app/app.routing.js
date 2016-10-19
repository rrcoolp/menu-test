// import { LoginComponent } from "./pages/login/login.component";
// import { ListComponent } from "./pages/list/list.component";
"use strict";
// export const routes = [
//   { path: "", component: LoginComponent },
//   { path: "list", component: ListComponent }
// ];
// export const navigatableComponents = [
//   LoginComponent,
//   ListComponent
// ];
var departments_1 = require("./pages/departments/departments");
exports.routes = [
    { path: "", redirectTo: "/departments", terminal: true, pathMatch: "full" },
    { path: "departments", component: departments_1.Departments }
];
exports.navigatableComponents = [
    departments_1.Departments
];
//# sourceMappingURL=app.routing.js.map