import Welcome from "./init/Welcome";
import Profile from "./init/Profile";
import Settings from "./init/Settings";

import SeeAllEmployees from "./employees/SeeAllEmployees";
import AddEmployee from "./employees/AddEmployee";
import UpdateEmployee from "./employees/UpdateEmployee";
import DeleteEmployee from "./employees/DeleteEmployee";

import PendingDemands from "./demands/PendingDemands";
import AcceptedDemands from "./demands/AcceptedDemands";
import NotAcceptedDemands from "./demands/NotAcceptedDemands";

import "./main-content.scss";


// TODO: CHANGES ROUTES
const routes = [
  {
    path: "/dashboard",
    component: Welcome,
  },
  {
    path: "/dashboard/profile",
    component: Profile,
  },
  {
    path: "/dashboard/settings",
    component: Settings,
  },


  {
    path: "/dashboard/see-all-employees",
    component: SeeAllEmployees,
  },
  {
    path: "/dashboard/add-employee",
    component: AddEmployee,
  },
  {
    path: "/dashboard/update-employee",
    component: UpdateEmployee,
  },
  {
    path: "/dashboard/delete-employee",
    component: DeleteEmployee,
  },

  
  {
    path: "/dashboard/pending-demands",
    component: PendingDemands,
  },
  {
    path: "/dashboard/accepted-demands",
    component: AcceptedDemands,
  },
  {
    path: "/dashboard/not-accepted-demands",
    component: NotAcceptedDemands,
  },
];

export default routes;
