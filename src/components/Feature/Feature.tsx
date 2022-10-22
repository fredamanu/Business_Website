import React from "react";
import { motion } from "framer-motion";

import { features } from "../../constants";
import "./Feature.scss";

const Feature = () => {
  return (
    <motion.div
      className="app__service__summary container"
      whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="app__service__summary-top">
        <h2 className="headings">Main Features</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet. Id vel in nam malesuada.
        </p>
      </div>
      <div className="app__service__summary-bottom flex">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <div className="feature-card-img">
              <img src={feature.icon} alt={feature.icon} />
            </div>
            <div className="feature-card-txt">
              <h6 className="headings">{feature.title}</h6>
              <p className="text">{feature.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Feature;
