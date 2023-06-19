import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/a1an_shijo/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon /></a>
        <a href="https://twitter.com/alanshijoatkl" target="_blank" rel="noopener noreferrer">
          <TwitterIcon /></a>
        <a href="https://www.linkedin.com/in/a1an-shijo/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 alanshijo.online</p>
    </div>
  );
}

export default Footer;
