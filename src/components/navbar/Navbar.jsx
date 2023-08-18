import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

const Menu = () => (
  <>
    <div className="navbar__right__links">
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/ourteam">Ourteam</Link>
    </div>

    <div className="navbar__right__links-right">
      <div className="navbar__right__links-right__contact">
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  </>
);

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__links__navbar__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <Menu />
        </div>

        <div className="navbar__burger">
        <div className="navbar__burger__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
          <div className="navbar__burger_lines">
            <Hamburger
              color="white"
              size={40}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
          {isOpen && (
                        
            <div className="navbar__burger__container scale-up-center">
            <Hamburger
              color="black"
              size={40}
              toggled={isOpen}
              toggle={setOpen}
            />
              <div className="navbar__burger__container__links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
