import React, { useState } from "react";
import "./Hero.css";
import {BsPlayCircle} from "react-icons/bs"
import {AiFillCloseCircle} from 'react-icons/ai'


const Hero = () => {
  const [vid ,setVid] = useState(false);
  return (
    <div className="container" id="home">
      <video id="background-video" autoPlay={true} loop={true} muted={true}>
        <source src="/heroBg.mp4" type="video/mp4" />
      </video>
      <div className="text">
      <div className="HeroMainText">
        <div className="heading">
          <h1>Prepare to heal, understand, and grow in the lap of luxury. 
</h1>
        </div>
        <div className="details">
          <p>
          Aranya awaits, ready to offer you an unforgettable experience that harmoniously blends nature's bounty and indulgent comfort. Come and explore our oasis, where every moment is tailored to nurture your body, mind, and soul.
          </p>
        </div>
        <div className="contactBtn btn" onClick={()=>{ setVid(true)}}><span><BsPlayCircle /></span></div>
      </div>
</div>



{
  vid && (
    <div className="YTVid">
    <div className="close btn" onClick={()=>{
setVid(false);
    }}><AiFillCloseCircle /></div>
    <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/rxHQsQB3U1s`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
</div>
  )
}
    </div>
  );
};

export default Hero;
