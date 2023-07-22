import { React, useState, useEffect, useRef } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const myRef = useRef();
  const myRef2 = useRef();
  const [img1, setImg1] = useState(-50);
  const [img2, setImg2] = useState(-50);
  const [menuTop, setMenuTop] = useState(false);


  return (
    <div className="aboutCont" id="villas">
      <div className="backgroundImg" />
      <div className="about-text top">
        <h1 className="heading top"> Rejuvenate Your Soul </h1>
      </div>
      <div className="About-container">
        <div className="About-imgs">
          <div
            className="upper"
          >
            <img
              src="/imgs/aboutUs.jpg"
              alt="img1"
            />
          </div>
        </div>
        <div className="about-text bottom">
          <h1 className="heading">Luxuriate in Nature's Embrace at Aranya's Five Element Villas </h1>
<p className="About-details">
Our villas are thoughtfully designed and named after the five elements of life,ensuring you experience some of the most qualitative days of your life. Each villa features a Main Bedroom, an Extra Bedroom, a cozy Seating Area, a private Closed Bathroom/Shower, and a refreshing Open Air Shower. Delight in our special Mud-bath area, a serene Reading Station, and a comfortable Therapy Bed that promises relaxation like no other. The Porch Sitting Area, nestled amidst lush gardens, provides the perfect spot to unwind and bask in nature's beauty.

          </p>
          <p>Each villa holds a special element to elevate your stay to new heights of luxury and therapy. Unlock the secrets of these enchanting elements that will leave you feeling pampered and rejuvenated throughout your stay.</p>
          
        
        </div>
      </div>

    </div>
  );
};


export default AboutUs;
