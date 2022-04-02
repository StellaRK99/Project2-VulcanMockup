import React from "react";
import map from "../public/images/map.jpg";
import lightBlueWave from "../public/images/wave-blue-light.png";

export default function ContactBanner() {
  return (
    <section className="contactBanner">
      <div className="mapImage">
        <img src={map} alt="map" />
        <div className="text">
          <h1>INSTALLED IN</h1>
          <h1>A CITY NEAR YOU</h1>
          <button>FIND A VULCAN INSTALL</button>
        </div>
      </div>
      <div className="contactUs">
        <div className="text">
          <h1>READY TO SPEC</h1>
          <h1>VULCAN</h1>
          <h1>FOR YOUR PROJECT?</h1>
          <button>CONTACT US</button>
        </div>
      </div>
      <img src={lightBlueWave} alt="light blue wave" />
    </section>
  );
}
