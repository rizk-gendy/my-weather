import axios from "axios";
import React, { useEffect, useState } from "react";
import CitySunDetails from "../../components/CitySunDetails/CitySunDetails";
import CityTempChart from "../../components/CityTempChart/CityTempChart";
import "./CityWeather.css";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import sunny from "../../assets/images/sunny.png";
import night from "../../assets/images/night.png";

function getDayName(date = new Date(), locale = "en-US") {
  return date.toLocaleDateString(locale, { weekday: "long" });
}
const CityWeather = () => {
  const cityName = window.location.pathname
    .replace("%20", " ")
    .replace("/city/", "");
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const good = false;

  const fetchData = () => {
    axios
      .request({
        method: "GET",
        url: "http://api.worldweatheronline.com/premium/v1/weather.ashx",
        params: {
          key: "c229112c80b34f38924200812220306",
          q: cityName,
          includelocation: "yes",
          date_format: "iso8601",
          format: "json",
          num_of_days: 7,
        },
      })
      .then((res) => {
        setWeatherData({
          cityname: res.data.data.nearest_area[0].region[0].value,
          cityTemp: res.data.data.current_condition[0].FeelsLikeC,
          countryName: res.data.data.nearest_area[0].country[0].value,
          areaName: res.data.data.nearest_area[0].areaName[0].value,
          tempStatus: res.data.data.current_condition[0].weatherDesc[0].value,
          statusIcon:
            res.data.data.current_condition[0].weatherIconUrl[0].value,
          maxtempC: res.data.data.weather[0].maxtempC,
          mintempC: res.data.data.weather[0].mintempC,
          weekWeather: res.data.data.weather,
          humidity: res.data.data.current_condition[0].humidity,
          windspeedKmph: res.data.data.current_condition[0].windspeedKmph,
          visibility: res.data.data.current_condition[0].visibility,
          pressure: res.data.data.current_condition[0].pressure,
        });
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="city-weather-container">
          <div className="left-side">
            {good ? (
              <img className="status-image" src={sunny} alt="status" />
            ) : (
              <img className="status-image" src={sunny} alt="status" />
            )}
            <div className="temp-heading">
              <h1>{weatherData.cityTemp}°C</h1>
              <p style={{fontSize:'40px'}}>
                {weatherData.areaName}
              </p>
              <p>
                {weatherData.cityname},{weatherData.countryName}
              </p>
              <p>{weatherData.tempStatus}</p>
            </div>
          </div>
          <div className="right-side">
            <CityTempChart
              daysArray={weatherData.weekWeather.map(({ date, avgtempC }) => ({
                value1: date,
                value2: avgtempC,
              }))}
              weekData={weatherData.weekWeather.map(
                ({ date, avgtempC, weatherIconUrl }) => ({
                  value1: getDayName(new Date(date)).slice(0, 3),
                  value2: avgtempC,
                })
              )}
              heading="Temperature/Week"
            />
            <div className="city-details-container">
              <CitySunDetails
                value1={`${weatherData.pressure} mb`}
                value2={`${weatherData.humidity} %`}
                comp1={true}
              />
              <CitySunDetails
                value1={`${weatherData.windspeedKmph} km/h`}
                value2={`${weatherData.visibility} km`}
                comp1={false}
              />
            </div>
            <CityTempChart
              daysArray={weatherData.weekWeather[0].hourly.map(
                ({ time, FeelsLikeC }) => ({
                  value1: time,
                  value2: FeelsLikeC,
                })
              )}
              weekData={weatherData.weekWeather[0].hourly.map(
                ({ time, FeelsLikeC, weatherIconUrl }) => ({
                  value1: `${time.replace("00", "")}:00`,
                  value2: FeelsLikeC,
                  value3: weatherIconUrl,
                })
              )}
              heading="Temperature/Day"
            />{" "}
          </div>
        </div>
      </>
    );
  }
};
export default CityWeather;
