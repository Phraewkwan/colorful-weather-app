import React from "react";
import "./TimeCity.css";
import { UilLocationPoint, UilSun, UilSunset } from "@iconscout/react-unicons";

const TimeCity = () => {
  return (
    <div className="TimeCity">
      <div className="cityAndTime">
        <div className="cityName">
          <UilLocationPoint />
          <h5>Bangkok</h5>
        </div>
        <div className="city__sunrise">
          <UilSun />
          <h5>05:00 AM</h5>
        </div>
        <div className="city__sunset">
          <UilSunset />
          <h5>19:00 PM</h5>
        </div>
      </div>
    </div>
  );
};

export default TimeCity;
