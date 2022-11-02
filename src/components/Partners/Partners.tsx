import React from "react";
import { antler, innovasion, startup } from "../../assets";

import "./Partners.scss";
const Partners = () => {
  return (
    <div className="app__partners container">
      <h2 className="headings">Partners</h2>
      <div className="logo__holder">
        <img src={antler} alt="antler" />
        <img src={innovasion} alt="innovasion" />
        <img src={startup} alt="startup" />
      </div>
    </div>
  );
};

export default Partners;
