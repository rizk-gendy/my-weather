import React from "react";
import "./CountryTemperature.css";

const CountryTemperature = ({ weatherData }) => {
  return (
    <div className="temperature-container">
      <h1>
        {weatherData.cityname},{weatherData.countryName}
      </h1>
      <p>{weatherData.cityTemp}°C</p>
    </div>
  );
};

export default CountryTemperature;
