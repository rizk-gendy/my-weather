import React from "react";
import AreaCHart from "../Chart";
import "./CityTempChart.css";
const CityTempChart = ({ weekData, daysArray, heading }) => {
  return (
    <div className="temp-chart-container">
      <div className="chart-heading">{heading}</div>
      {weekData && <AreaCHart daysArray={daysArray} />}
      <div className="days-container">
        {weekData &&
          weekData.map((item, index) => (
            <div key={index} className="day-container">
              <div>{item.value2}°C</div>

              {item.value3 && (
                <img
                  src={item.value3[0].value}
                  alt="icon"
                  className="status-icon"
                />
              )}
              <div>{item.value1}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CityTempChart;
