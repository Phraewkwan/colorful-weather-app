import React from "react";
import "./SmallWeatherCard.css";

import { UilLocationPoint, UilWind, UilTear } from "@iconscout/react-unicons";

const SmallWeatherCard = (props) => {

    console.log(props)
  return (
    <div
      className="SmallWeatherCard"
      style={{ backgroundColor: `${props.bgcolor}` }}
    >
      <div className="weatherLeft">
        <div className="windDeatails">
          <div className="windDe">
            <UilWind />
            <h5>Wind</h5>
          </div>
          <span>|</span>
          <div className="windNum">
            <h5>15 km/h</h5>
          </div>
        </div>

        <div className="huDeatails">
          <div className="huDe">
            <UilTear />
            <h5>Humi</h5>
          </div>
          <span> |</span>
          <div className="huNum">
            <h5>27%</h5>
          </div>
        </div>
      </div>

      <div className="cityRight">
        <div className="citySmallCard">
          <UilLocationPoint />
          <h5>Hua Hin</h5>
        </div>
        <h2>26°</h2>
      </div>
    </div>
  );
};

export default SmallWeatherCard;
