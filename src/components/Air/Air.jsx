import React from "react";
import "./Air.css";

import { UilLocationPoint, UilWind } from "@iconscout/react-unicons";

const Air = () => {
  const ComponentsData = [
    {
      id: 1,
      num: 9.3,
      component: "PM2",
    },
    {
      id: 2,
      num: 12.2,
      component: "PM10",
    },
    {
      id: 3,
      num: 4.8,
      component: "SO2",
    },
    {
      id: 4,
      num: 4.6,
      component: "NO2",
    },
    {
      id: 5,
      num: 6.5,
      component: "O2",
    },
    {
      id: 6,
      num: 0.9,
      component: "0.9",
    },
  ];
  return (
    <div className="air">
      <div className="airContent">
        <h5>Air Quality Index</h5>
        <div className="air__city">
          <UilLocationPoint />
          <p>Hua Hin</p>
        </div>
      </div>

      <div className="airGrade">
        <div className="grade">
          <div className="gradeContents">
            <UilWind />
            <div className="gradeContent">
              <h4>Good</h4>
              <p>a perfect day for a walk!</p>
            </div>
          </div>

          <h5>Refresh</h5>
        </div>
      </div>

      <div className="componentOfAir">
        {ComponentsData.map((data) => (
            <div className="wrapper__Compo" key={data.id}>
                <h5>{data.num}</h5>
                <p>{data.component}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Air;
