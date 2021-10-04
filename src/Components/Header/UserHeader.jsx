import React, { useState } from "react";
import classes from "./UserHeader.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsActive from "@mui/icons-material/NotificationsActive";
import { Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import ProfileDropdown from "../HoverDropdown/ProfileDropdown";
import { useSelector } from "react-redux";

function UserHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const username = useSelector((state) => state.user.username);
  const point = useSelector((state) => state.user.point);

  const openHandler = () => {
    setShowDropdown(true);
  };

  const closeHandler = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className={classes.notificationIcon}>
        <Badge badgeContent={"!"} color="error" variant="">
          <NotificationsActive fontSize="large" />
        </Badge>
      </div>
      <Link className={classes.link} to="/profile">
        <div
          onMouseOver={openHandler}
          onMouseLeave={closeHandler}
          className={classes.profileBadge}
        >
          <Avatar className={classes.avatar} />
          <div className={classes.displayName}>
            <h3>{username}</h3>
            <p>{point}pts</p>
          </div>
          <ArrowDropDownIcon className={classes.dropdown} />
          {showDropdown && <ProfileDropdown />}
        </div>
      </Link>
    </>
  );
}

export default UserHeader;
