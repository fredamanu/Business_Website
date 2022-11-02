import React from "react";
import {
  facebook,
  instagram,
  linkedIn,
  logo,
  mail,
  telephone,
  twitter,
} from "../../assets";

import "./Footer.scss";
const Footer = () => {
  return (
    <nav className="app__footer__navbar container">
      <div className="logo__container">
        <img src={logo} alt="logo" />
        <h6>Relynk -Real Estate API</h6>
        <p>The one API for real estate dealers</p>
      </div>
      <ul className="footer__nav__links">
        {["products", "services", "pricing", "privacy policy"].map(
          (link, index) => (
            <li key={index}>
              <a href={`#${link}`}>{link}</a>
            </li>
          )
        )}
      </ul>
      <div className="socials__container">
        <p>Contact us:</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={mail} alt="mail" /> <span>hello@relynk.io</span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={telephone} alt="telephone" />{" "}
          <span style={{ width: "200px" }}>(+47) 452 17 575</span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={linkedIn} alt="linkedIn" />{" "}
          <span>linkedin.com/company/relynk</span>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
