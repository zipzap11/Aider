import React from "react";
import classes from "./UserHeader.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsActive from "@mui/icons-material/NotificationsActive";
import { Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";

function UserHeader() {
  return (
    <>
      <div className={classes.notificationIcon}>
        <Badge badgeContent={1} color="error" variant="">
          <NotificationsActive style={{ color: "white" }} />
        </Badge>
      </div>
      <div className={classes.profileBadge}>
        <Avatar className={classes.avatar} />
        <div className={classes.display}>
          <h3>Francisco</h3>
          <p>100pts</p>
        </div>
        <ArrowDropDownIcon className={classes.dropdown} />
      </div>
    </>
  );
}

export default UserHeader;
