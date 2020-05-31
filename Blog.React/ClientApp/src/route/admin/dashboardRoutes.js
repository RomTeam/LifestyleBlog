import React from "react";
import DashboardPage from "../../views/admin/dashboard";
import {Dashboard,Person} from '@material-ui/icons'
import Category from '../../views/admin/category'
import CategoryActions from '../../views/admin/categoryActions'
import CategoryDetails from "../../views/admin/categoryDetails";
import Users from "../../views/admin/users";
import UserDetails from "../../views/admin/userDetails";
import UserActions from "../../views/admin/userActions";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    isShow: true
  },
  {
    path: "/category/details/:id",
    name: "Category Details",
    icon: Person,
    component: CategoryDetails,
    layout: "/admin",
    isShow: false
  },
  {
    path: "/category/addupdate/:id",
    name: "Category",
    icon: Person,
    component: CategoryActions,
    layout: "/admin",
    isShow: false
  },
  {
    path: "/category/addupdate",
    name: "Category",
    icon: Person,
    component: CategoryActions,
    layout: "/admin",
    isShow: false
  },
  {
    path: "/category",
    name: "Category",
    icon: Person,
    component: Category,
    layout: "/admin",
    isShow: true
  },
  {
    path: "/users/details/:id",
    name: "User Details",
    icon: Person,
    component: UserDetails,
    layout: "/admin",
    isShow: false
  },
  {
    path: "/users/addupdate/:id",
    name: "Add/Update User",
    icon: Person,
    component: UserActions,
    layout: "/admin",
    isShow: false
  },
  {
    path: "/users/addupdate",
    name: "Add/Update User",
    icon: Person,
    component: UserActions,
    layout: "/admin",
    isShow: false
  },
  {
    path: "/users",
    name: "Users",
    icon: Person,
    component: Users,
    layout: "/admin",
    isShow: true
  }
];

export default dashboardRoutes;
