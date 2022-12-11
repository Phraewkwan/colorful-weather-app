import React from "react";
import "./City.css";
import {
  UilLocationPoint,
  UilEllipsisV,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
const City = () => {
  return (
    <div className="City">
      <div className="city__content">
        <div className="city__header">
          <UilLocationPoint />
          <h5>Hua Hin</h5>
        </div>
        <UilEllipsisV />
      </div>

      <div className="sun">
        <div className="sunrise">
          <div className="sunrise__details">
            <UilSun />
            <div className="sunrise__time">
              <span>Sunrise</span>
              <h5>15:30 PM</h5>
            </div>
          </div>
        </div>
        <div className="sunset">
          <div className="sunset__details">
            <UilSunset />
            <div className="sunset__time">
              <span>Sunset</span>
              <h5>20:30 PM</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
