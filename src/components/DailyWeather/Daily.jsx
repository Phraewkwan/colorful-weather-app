import React from "react";
import "./Daily.css";

import { UilSun } from "@iconscout/react-unicons";
import Card from "../Cards/Card";

const Daily = () => {
  return (
    <div className="daily">
      <div className="dailyTimeHeader">
        <h1>17:52 pm</h1>
        <h5>Monday, 21 November, 2022</h5>
        <div className="HeaderText">
          <UilSun />
          <h2>Good morning, Olivia!</h2>
        </div>
      </div>

      <div className="card_Container">
        <Card />
      </div>
    </div>
  );
};

export default Daily;
