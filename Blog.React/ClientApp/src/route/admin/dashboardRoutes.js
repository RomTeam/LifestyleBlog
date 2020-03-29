import React from "react";
import NotFound from "../../pages/NotFound";
import ClientUI from '../../layouts/client-ui'
import DashboardPage from "../../views/admin/dashboard";
import HomePage from "../../pages/Home";
import {Dashboard,Person} from '@material-ui/icons'
import Category from '../../views/admin/category'
import CategoryActions from '../../views/admin/category-actions'

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
    path: "/category/add",
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
    path: "/client",
    name: "Client Ui",
    icon: "content_paste",
    component: ClientUI,
    layout: "/admin",
    isShow: true
  }
];

export default dashboardRoutes;
