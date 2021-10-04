import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/userSlice";

function ProfileDropdown() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    signOut(auth);
    dispatch(logout());
  };

  return (
    <ul>
      <li>
        <button></button>
      </li>
      <li>
        <button></button>
      </li>
      <li>
        <button></button>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  );
}

export default ProfileDropdown;
