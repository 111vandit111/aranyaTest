import React from "react";
import "./DetailBox.css";
import { GoHome } from "react-icons/go";
import {TbMapSearch} from "react-icons/tb"
import {GiTreeBranch} from "react-icons/gi"

const DetailBox = () => {
  return (
    <div className="detailBox" id="about">
      

      <div className="BoxText">
      <div className="details-textBox">
        <h2 className="BHeading">Escape to Aranya: Where Nature's Harmony and Top-Notch Hospitality Await You</h2>
        <div className="BDetails">
          <p>
          Discover Aranya, the ultimate destination for a rejuvenating staycation that seamlessly intertwines nature and luxury. Our unique retreat offers an organic touch with our very own farm, providing fresh fruits, vegetables, and grains cultivated using sustainable and traditional farming methods. Indulge in an exceptional dining experience with culinary offerings straight from our organic farm, promising a feast for your senses.
</p><p>
At Aranya, we go beyond just food; we are committed to enhancing the quality of your vacation with a focus on your wellbeing. Embrace ancient healthy practices through invigorating Yoga sessions, soothing Mud-baths, revitalizing Hammam experiences, and blissful Massage Therapies. Reconnect with your true spirit as you immerse yourself in an array of therapeutic and luxurious activities. 
</p><p>
Highlighting our commitment to health and freshness, we boast our very own flour mill, grinding at a gentle 35 rpm to retain nutrients without overheating the flour. Additionally, our cold press oil machine ensures the preservation of temperature and nutrients in the oils we offer. With Aranya, you can indulge in culinary delights that are not only delicious but also packed with wholesome goodness.
</p></div>


          <div className="BIcons">
          <div className="iconBox"> 
            <div className="icon">
              <TbMapSearch />
            </div>
            <a href="https://goo.gl/maps/JSA6KgAeMREEqfgw6" target="_blank">
            <div className="IconHeading" >Aranya By Stories</div>
            </a>
          </div>
          <div className="iconBox"> 
            <div className="icon">
              <GoHome />
            </div>
            <a href="https://goo.gl/maps/JSA6KgAeMREEqfgw6"  target="_blank">
            <div className="IconHeading">Labana , Jaipur</div>
            </a>
          </div>
          <div className="iconBox">
            <div className="icon">
              <GiTreeBranch />
            </div>
            <a href="https://www.instagram.com/aranyabystories/?hl=en"  target="_blank">
            <div className="IconHeading">Rejuvenating Center</div>
            </a>
          </div>
        </div>
        </div>



        <div className="Details-ContactInfo">
          <div className="Details-Contact-heading">
Contact Us
          </div>
<div className="Details-Contact">
  <p> <a href="https://goo.gl/maps/JSA6KgAeMREEqfgw6"> Delhi jaipur highway, Jaipur, Rajasthan 303104</a>
  <br />
  <a href="tel:+919352265004"> +91 93522 65004</a>
  <br />
  <a href="mailto:aranyabystories@gmail.com">aranyabystories@gmail.com</a>
  </p>
</div>

        </div>
       
      </div>
    </div>
  );
};

export default DetailBox;
