import React from "react";
import "./WeatherDetails.css";

export const WeatherDetails = ({ weatherData }) => {
  let today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDENSDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  let dayName = days[new Date().getDay()];

  return (
    <div className="details-container">
      <div className="details">
        <div className="day-name">
          {dayName} {date}
        </div>
        <div className="day-status">{weatherData.tempStatus}</div>
        <div className="day-average">
          {weatherData.maxtempC}°/{weatherData.mintempC}°
        </div>
      </div>
      <div className="weather-icon">
        <img className="icon" src={weatherData.statusIcon} alt="" />
      </div>
    </div>
  );
};
