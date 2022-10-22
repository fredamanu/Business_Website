import React from "react";
import { facebook, instagram, logo, twitter } from "../../assets";

import "./Footer.scss";
const Footer = () => {
  return (
    <nav className="app__footer__navbar flex container">
      <div className="logo__container">
        <img src={logo} alt="logo" />
      </div>
      <ul className="footer__nav__links">
        {["products", "services", "pricing", "contact"].map((link, index) => (
          <li key={index}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <div className="socials__container">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
      </div>
    </nav>
  );
};

export default Footer;
