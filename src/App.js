import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityWeather from "./pages/CityWeather/CityWeather";
import CurrentWeather from "./pages/CurrentWeather/CurrentWeather";
function App() {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const fetchData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios
        .request({
          method: "GET",
          url: "http://api.worldweatheronline.com/premium/v1/weather.ashx",
          params: {
            key: "7724c3c5d11347c097391911222705",
            q: `${position.coords.latitude},${position.coords.longitude}`,
            includelocation: "yes",
            date_format: "iso8601",
            format: "json",
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
          setIsLoaded(true);
        })
        .catch((error) => {
          setIsLoaded(true);
          setError(error);
        });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <CurrentWeather
              isLoaded={isLoaded}
              error={error}
              weatherData={weatherData}
            />
          }
        />
        <Route exact path="/city/:id" element={<CityWeather />} />
      </Routes>
    </Router>
  );
}

export default App;
