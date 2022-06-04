import React from "react";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { MdCompress, MdOutlineVisibility } from "react-icons/md";

import "./CitySunDetails.css";

const CitySunDetails = ({ value1, value2, comp1 }) => {
  return (
    <div className="sun-details-container">
      <div className="right">
        {comp1 ? (
          <MdCompress className="sun-logo" />
        ) : (
          <WiStrongWind className="sun-logo" />
        )}
        {comp1 ? (
          <div className="logo-heading">Pressure</div>
        ) : (
          <div className="logo-heading">Wind Speed</div>
        )}

        <div className="value">{value1}</div>
      </div>
      <div className="left">
        {comp1 ? (
          <WiHumidity className="sun-logo" />
        ) : (
          <MdOutlineVisibility className="sun-logo" />
        )}

        {comp1 ? (
          <div className="logo-heading">Humidity</div>
        ) : (
          <div className="logo-heading">Visibility</div>
        )}
        <div className="value">{value2}</div>
      </div>
    </div>
  );
};

export default CitySunDetails;
