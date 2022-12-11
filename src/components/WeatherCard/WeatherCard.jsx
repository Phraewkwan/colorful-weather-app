import React from "react";
import "./WeatherCard.css";
import { UilLocationPoint, UilWind, UilTear } from "@iconscout/react-unicons";

const WeatherCard = () => {
  return (
    <div className="WeatherCard">
      <div className="weather-card">
        <div className="city">
          <UilLocationPoint />
          <h3>Bangkok</h3>
        </div>
        <div className="weatherDetails">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3721/3721881.png"
            alt=""
          />
          <h5 className="date">Today, 17 November</h5>
          <h1>29°</h1>
          <h4>Sunny</h4>
        </div>

        <div className="weather__container">
          <div className="wind_Left">
            <div className="wind_detailsLeft">
              <UilWind />
              <h5>wind</h5>
            </div>
            <div className="hu_detailsLeft">
              <UilTear />
              <h5>Hum</h5>
            </div>
          </div>

          <span>|</span>

          <div className="num_right">
            <div className="winAndHu_detailsRight">
              <div className="win_num">
                <h5>19km/h</h5>
              </div>
              <div className="hu_num">
                <h5>22%</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
