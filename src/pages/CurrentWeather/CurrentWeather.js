import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Weather from "../../components/Wearther/Weather";

const CurrentWeather = ({ weatherData, error, isLoaded }) => {
  return (
    <>
      <Navbar />
      <Weather error={error} isLoaded={isLoaded} weatherData={weatherData} />
    </>
  );
};

export default CurrentWeather;
