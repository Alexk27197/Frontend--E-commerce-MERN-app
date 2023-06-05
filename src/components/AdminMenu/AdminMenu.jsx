import React from "react";
import "./AdminMenu.css";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="admin-menu-cotainer">
      <div className="menu-left">
        <h2 className="admin-panel-title">Admin-Panel</h2>
        <ul className="admin-list">
          <li>
            <NavLink
              exact
              to="/dashboard/admin/create-category"
              activeClassName="active"
            >
              Create Category
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/dashboard/admin/create-product"
              activeClassName="active"
            >
              Create Product
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/dashboard/admin/users" activeClassName="active">
              Users
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="menu-right">right</div>
    </div>
  );
};

export default AdminMenu;
