import React from "react";
import "./ourteam.css";
import wave from "../../assets/wave.svg";
const Header = () => {
  return (
    <div className="ourteam">
      <div className="ourteam__content section__padding">
    
      </div>
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FBFBFB"
            fill-opacity="1"
            d="M0,224L80,197.3C160,171,320,117,480,112C640,107,800,149,960,165.3C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
