import React from "react";
import { motion } from "framer-motion";

import { chart } from "../../assets";
import "./Reports.scss";

const Reports = () => {
  return (
    <motion.div
      className="app__reports container__flex"
      whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="app__reports__txt__container">
        <h4 className="headings">
          How does Relynk Real Estate API help your real estate business?
        </h4>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet.Sapien in etiam vitae nibh nunc mattis imperdiet sed
          nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.
        </p>
      </div>
      <div className="app__reports__img__container img__container">
        <img src={chart} alt="chart" className="img" />
      </div>
    </motion.div>
  );
};

export default Reports;
