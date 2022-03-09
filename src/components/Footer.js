import React from "react";
import fbIcon from "../public/images/icon-white-facebook.png";
import inIcon from "../public/images/icon-white-linkedin.png";
import Icon from "./Icon";

function Footer() {
  return (
    <footer>
      <div className="icon">
        <Icon />
      </div>
      <div className="contactInfo">
        <div className="contactNumbers">
          <img className="fb-icon" src={fbIcon} alt="Facebook Icon"></img>
          <img className="in-icon" src={inIcon} alt="Linkedin Icon"></img>
          <p>
            <i className="icon-phone" /> +1 712-642-2755
          </p>
          <p>
            <i className="icon-mail-alt" /> CONTACT US
          </p>
        </div>
        <p>COPYRIGHT 2017. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}

export default Footer;
