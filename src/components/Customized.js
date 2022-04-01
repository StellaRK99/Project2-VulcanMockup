import React from "react";
import image1s from "../public/images/machine-01-300x274.png";
import image1m from "../public/images/machine-01-768x702.png";
import image1l from "../public/images/machine-01-912x834.png";
import image2s from "../public/images/machine-02-300x274.png";
import image2m from "../public/images/machine-02-768x702.png";
import image2l from "../public/images/machine-02-912x834.png";
import image3s from "../public/images/machine-03-300x274.png";
import image3m from "../public/images/machine-03-768x702.png";
import image3l from "../public/images/machine-03-912x834.png";
import image4s from "../public/images/machine-04-300x274.png";
import image4m from "../public/images/machine-04-768x702.png";
import image4l from "../public/images/machine-04-912x834.png";
import darkBlueWave from "../public/images/wave-blue-dark.png";

export default function Customized() {
  return (
    <section className="customized">
      <div className="text">
        <h1>CUSTOMIZED PER ORDER</h1>
        <p>
          Just as no two treatment plants are the same, no two of our screening,
          grit handling or sludge thickening products are either. We’ll help
          determine exactly what you need.
        </p>
      </div>
      <div className="images">
        <div>
          <img
            src={image1s}
            alt="screening"
            srcSet={`${image1s} 300w, ${image1m} 768w, ${image1l} 912w`}
          />
          <h2>SCREENING</h2>
          <a href="#">View Selection</a>
        </div>
        <div>
          <img
            src={image2s}
            alt="screenings handling"
            srcSet={`${image2s} 300w, ${image2m} 768w, ${image2l} 912w`}
          />
          <h2>
            SCREENINGS <br />
            HANDLING
          </h2>
          <a href="#">View Selection</a>
        </div>
        <div>
          <img
            src={image3s}
            alt="grit handling"
            srcSet={`${image3s} 300w, ${image3m} 768w, ${image3l} 912w`}
          />
          <h2>
            GRIT <br /> HANDLING
          </h2>
          <a href="#">View Selection</a>
        </div>
        <div>
          <img
            src={image4s}
            alt="sludge thickening"
            srcSet={`${image4s} 300w, ${image4m} 768w, ${image4l} 912w`}
          />
          <h2>
            SLUDGE <br /> THICHENING
          </h2>

          <a href="#">View Selection</a>
        </div>
      </div>
      <img src={darkBlueWave} alt="dark blue wave" />
    </section>
  );
}
