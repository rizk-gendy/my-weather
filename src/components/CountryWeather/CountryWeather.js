import React from "react";
import "./CountryWeather.css";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import CountryTemperature from "../CountryTemperature/CountryTemperature";
import { WeatherDetails } from "../WeatherDetalis/WeatherDetails";

const CountryWeather = ({ weatherData }) => {
  return (
    <div className="country-weather-container">
      <CountryTemperature weatherData={weatherData} />
      <WeatherDetails weatherData={weatherData} />
      <HourlyWeather weatherData={weatherData} />
    </div>
  );
};

export default CountryWeather;
