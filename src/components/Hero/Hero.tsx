import React from "react";
import { motion } from "framer-motion";

import { relynk, hero } from "../../assets";

import "./Hero.scss";
const Hero = () => {
  return (
    <div className="app__hero flex">
      <motion.div
        className="app__hero-left"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h1>
          Unlock the <span>Power</span> of
          <br /> Your <span>Building's</span> Data
        </h1>
        <p>
          The one API for building owners & service providers. Get access to
          your <br />
          commercial building's real-time data.
        </p>
        <motion.button
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          Join the Waitlist
        </motion.button>
      </motion.div>
      {/* <motion.div
        className="app__hero-right"
        whileInView={{ opacity: [0, 1], x: [100, 0] }}
        transition={{ duration: 1, delayChildren: 1 }}
      >
        <img src={hero} />
      </motion.div> */}
    </div>
  );
};

export default Hero;
