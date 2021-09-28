import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
function Navigation() {
  return (
    <div className={classes.nav}>
      <ul className={classes.list}>
        <li>
          <NavLink exact activeClassName={classes.active} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName={classes.active} to="/blogs">
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/forums">
            Forums
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName={classes.active} to="/jobs">
            Jobs
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
