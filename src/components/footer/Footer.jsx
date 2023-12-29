import React from "react";
import "./footer.css";
import footerLogo from "../statics/softwaresLogo/small_check.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="main-container-footer">
      <div className="footer-contents">
        <div className="footer-main-contents">
          <div className="summary box">
            <div className="summart-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
              neque vel rerum vero eveniet earum necessitatibus culpa
              consequatur obcaecati aspernatur dignissimos.
            </div>
            <h3 className="follow-tag">Follow Us</h3>
            <div className="follow-links">
              <LinkedInIcon fontSize="large" />{" "}
              <InstagramIcon fontSize="large" />{" "}
              <FacebookIcon fontSize="large" />
            </div>
          </div>
          <div className="nav-links box">
            <h3 className="links-heading">Design</h3>
            <ul className="nav-links-ul">
              <li className="nav-links-li">Home</li>
              <li className="nav-links-li">About</li>
              <li className="nav-links-li">Services</li>
              <li className="nav-links-li">Portfolio</li>
            </ul>
          </div>
          <div className="contact-box">
            <h3>Contact us</h3>
            <p className="address">Street no./ house no.,</p>
            <p className="address">Street, City-Pincode</p>
            <p className="email">email@designendeavour.com</p>
            <p className="phone">+9196xxxxxxx</p>
          </div>
          <div className="box">
            <img
              src={footerLogo}
              alt="Design Endeeavour Logo"
              className="footer-logo"
            />
          </div>
        </div>
        <hr className="footer-line" />
        <div className="footer-last-line">
          Privacy Policy | Terms of Services | legal & Trademarks
        </div>
      </div>
      <div className="copyright">
        {" "}
        © 2022 Design Endeavour, All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
