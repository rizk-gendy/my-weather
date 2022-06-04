import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchCity.css";

export const SearchCity = ({ item }) => {
  const [weatherData, setWeatherData] = useState({});
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = () => {
    axios
      .request({
        method: "GET",
        url: "http://api.worldweatheronline.com/premium/v1/weather.ashx",
        params: {
          key: "c229112c80b34f38924200812220306",
          q: item,
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
          tempStatus: res.data.data.current_condition[0].weatherDesc[0].value,
          statusIcon:
            res.data.data.current_condition[0].weatherIconUrl[0].value,
          maxtempC: res.data.data.weather[0].maxtempC,
          mintempC: res.data.data.weather[0].mintempC,
          weekWeather: res.data.data.weather,
        });
        // setIsLoaded(true);
      })
      .catch((error) => {
        // setIsLoaded(true);
        // setError(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [item]);

  
  
  
  return (
    <Link key={item} to={`/city/${item}`} className="citytemp-container">
      <div className="temp">
        <div className="search-sity-name">{item}</div>

        <div className="search-sity-temp">{weatherData.cityTemp}°C</div>
      </div>

      <div className="city">
        <img className="city-temp-icon" src={weatherData.statusIcon} alt="" />
      </div>
    </Link>
  );
};
