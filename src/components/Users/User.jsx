import React from "react";
import "./User.css";

import { UilLocationPoint, UilBell, UilSearch } from "@iconscout/react-unicons";

const User = () => {
  return (
    <div className="user">
      <UilSearch className="" />
      <input type="text" placeholder="Search..." />
      <div className="icons">
        <UilLocationPoint />
        <UilBell />
      </div>
      <div className="userProfile">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default User;
