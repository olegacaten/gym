import React from "react";
import "./header.css";
import GirlHeader from "../../assets/girl_header.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header section__padding">
      <div className="header__content">
        <div className="header__content__left">
          <h1>
            The only bad <span className="highlight">workout</span> is
            the one that didn't <span className="highlight">happen</span>
          </h1>
          <p>
            At Gym IMPROVE we strive to help every single member achieve their
            goals whilst educating, inspiring and motivating them every step of
            the way!
          </p>
          <Link to="/contact">
            <button>Join us</button>
          </Link>
        </div>
      </div>
      <div className="header__content__right">
        <img src={GirlHeader} alt="Myphoto" />
      </div>
    </div>
  );
};

export default Header;
