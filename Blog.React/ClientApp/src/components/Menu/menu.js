import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const menus = [
  {
    to: "/",
    label: "Trang chủ",
    activeWhenExact: true
  },
  {
    to: "/product",
    label: "Quản lý sản phẩm",
    activeWhenExact: true
  },
  {
    to: '/material-ui',
    label: 'Material UI',
    activeWhenExact: true
  }
];

const CustomLink = ({ to, label, activeWhenExact }) => {
  let match = useRouteMatch();
  let classActive = match ? "active" : "";
  return (
    <Link className={"nav-item nav-link " + classActive} to={to}>
      {label}
    </Link>
  );
};

class Menu extends Component {
  showMenus = menus => {
    let result = null;
    result = menus.map((menu, index) => {
      return <CustomLink key={index} to={menu.to} label={menu.label} activeWhenExact={menu.activeWhenExact} />
    })
    return result;
  };

  render() {
    return (
      <div className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          {this.showMenus(menus)}
        </div>
      </div>
    );
  }
}

export default Menu;
