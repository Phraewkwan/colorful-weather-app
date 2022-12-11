import React from "react";
import City from "../City/City";
import TimeCity from "../TimeCity/TimeCity";
import "./SunriseAndSunset.css";

const SunriseAndSunset = () => {
  return (
    <div className="SunriseAndSunset">
      <div className="sun__content">
        <h3>Sunrise & Sunset</h3>
      </div>
      <div className="city_container">
        <City />
        <City />
      </div>
      <div className="time_city">
        <TimeCity />
        <TimeCity />
        <TimeCity />
      </div>
    </div>
  );
};

export default SunriseAndSunset;
