import React from "react";
import "./HourlyWeather.css";
const HourlyWeather = ({ weatherData }) => {
  const { weekWeather } = weatherData;
  return (
    <div className="week-details">
      {weekWeather[0].hourly.map((item, index) => (
        <div key={index} className="day-weather-container">
          <p>{item.FeelsLikeC}°C</p>

          <img className="day-icon" src={item.weatherIconUrl[0].value} alt="" />
          <p>{item.time.replace("00", "")}:00</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyWeather;
