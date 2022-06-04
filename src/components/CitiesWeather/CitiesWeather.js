import React from "react";
import CityTemperature from "../CityTemperature/CityTemperature";
import "./CitiesWeather.css";

const CitiesWeather = ({ weatherData }) => {
  return (
    <div className="cities-container">
      <CityTemperature weatherData={weatherData} />
    </div>
  );
};

export default CitiesWeather;
