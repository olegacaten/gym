import React from "react";
import "./aboutus.css";
import about_pic from "../../assets/about_pic.png";
const Aboutus = () => {
  return (
    <div className="aboutus section__padding">
      <div className="aboutus__left">
        <img src={about_pic} alt="AboutUs" />
      </div>
      <div className="aboutus__right">
        <p className="aboutus__right__text">
          Welcome to <span className="highlight">Gym IMPROVE</span>, where
          fitness meets inspiration! We're passionate about 
          <span className="highlight"> helping you achieve </span>
          your <span className="highlight">fitness goals</span> and embrace a
          healthier lifestyle.<br></br><br></br>  Our cutting-edge facility offers a variety of
          equipment and amenities to cater to all fitness levels. Our certified
          trainers provide
          <span className="highlight"> personalized guidance, </span>
          while our group classes and additional services promote holistic
          well-being.<br></br><br></br>  Join our supportive community and unlock your full fitness
          potential at Gym IMPROVE!
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
