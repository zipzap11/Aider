import React, { useState } from "react";
import classes from "./Header.module.css";
import { ReactComponent as Logo } from "./Assets/logo4.svg";
import UserHeader from "./UserHeader";
import LoginHeader from "./LoginHeader";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Logo className={classes.logo} />
        <div className={classes.headerRight}>
          {isLogin && <UserHeader />}
          {!isLogin && <LoginHeader />}
        </div>
      </div>
    </div>
  );
}

export default Header;
