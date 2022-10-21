import React from "react";
import { motion } from "framer-motion";

import { pricingCards } from "../../constants";

import "./Pricing.scss";
const Pricing = () => {
  return (
    <motion.div className="app__pricing__container"  whileInView={{y: [100, 50, 0], opacity:[0, 1]}}
    transition={{duration: 1}}>
      <h5>Pricing Plan</h5>
      <p className="app__pricing-txt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est.{" "}
      </p>
      <div className="pricing__cards__holder">
        {pricingCards.map((card, index) => (
          <motion.div
            key={index}
            className={
              card.title === "Standard"
                ? "pricing__card pricing__card-standard"
                : "pricing__card"
            }
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <div className="pricing__card-txt">
              <h6>{card.title}</h6>
              <p>{card.desc}</p>
            </div>
            <div className="divider" />
            <div className="pricing__card-price">
              <p className="top">
                <span>{card.currency}</span>
                {card.price}
              </p>
              <p className="bottom">{card.period}</p>
            </div>
            <div className="order">Order</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Pricing;
