import React, { useEffect, useState } from "react";
import "./CityTemperature.css";
import Loading from "../Loading/Loading";
import { SearchCity } from "../SearchCity/SearchCity";

const CityTemperature = ({ weatherData }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cities, setCities] = useState([]);

  const fetchCities = () => {
    fetch(
      `https://countriesnow.space/api/v0.1/countries/cities/q?country=${weatherData.countryName}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCities(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <>
      <input
        className="input"
        placeholder="Discover other Cities"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <div className="scrollable-cities">
        {!isLoaded && <Loading className="Loading" />}
        {error && <div div>{error}</div>}
        {isLoaded &&
          cities
            .filter((item) => item.toLowerCase().includes(query))
            .slice(0, 4)
            .map((item, index) => <SearchCity key={index} item={item} />)}
      </div>
    </>
  );
};

export default CityTemperature;

