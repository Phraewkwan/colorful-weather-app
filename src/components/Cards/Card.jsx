import React from "react";
import "./Card.css";

const Card = () => {
  const weatherData = [
    {
      id: 1,
      day: "Sunday",
      temp: "25°",
      img: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
    },
    {
      id: 2,
      day: "Monday",
      temp: "25°",
      img: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
    },
    {
      id: 3,
      day: "Tuesday",
      temp: "25°",
      img: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
    },
    {
      id: 4,
      day: "Wednesday",
      temp: "25°",
      img: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
    },
    {
      id: 5,
      day: "Thursday",
      temp: "25°",
      img: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
    },
    {
      id: 6,
      day: "Friday",
      temp: "25°",
      img: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
    },
    {
      id: 7,
      day: "Saturday",
      temp: "25°",
      img: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
    },
  ];

  return (
    <div className="cards">
      {weatherData.map((daily) => (
        <div key={daily.id} className="dayAndTemp">
          <img src={daily.img} alt="" />
          <h3>{daily.day}</h3>
          <p>{daily.temp}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
