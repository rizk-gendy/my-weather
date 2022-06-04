import React from "react";
import CitiesWeather from "../CitiesWeather/CitiesWeather";
import CountryWeather from "../CountryWeather/CountryWeather";
import Loading from "../Loading/Loading";
import "./Weather.css";

const Weather = ({ weatherData, error, isLoaded }) => {
  if (error) {
    return <div className="error-container">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="weather-container">
        <>
          <CountryWeather weatherData={weatherData} />
          <CitiesWeather weatherData={weatherData} />
        </>
      </div>
    );
  }
};

export default Weather;
