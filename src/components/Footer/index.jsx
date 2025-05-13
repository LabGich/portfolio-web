import React from "react";
import "./index.css";
import { AiFillContacts, AiFillPicture, AiFillProfile } from "react-icons/ai";
// import footer logo

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-topleft">
          <img src="" alt="footer logo" />
          <p>
            I'm a full stack developer from Kenya with 3+ years of experience...
          </p>
        </div>
        <div className="footer-topright">
          <div className="footer-email">
            <AiFillContacts className="footer-email-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottomleft">
          Copyrights. 2024 Gichohi Mwangi. All rights reserved
        </p>
        <div className="footer-bottomright">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Let's Connect</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
