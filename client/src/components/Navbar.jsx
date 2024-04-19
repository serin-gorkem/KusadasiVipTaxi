import Dropdown from "./Dropdown";
import hamburger from "../assets/icons/hamburger.svg";
import PropTypes from "prop-types";
import { memo } from "react";

const Navbar = memo(function Navbar(props) {
  return (
    <nav
      aria-label="navigation bar"
      className="navbar max-container fixed z-40 flex w-full items-center justify-between p-3"
    >
      <div>
        <img
          src="./Logo.png"
          alt="Logo"
          className="aspect-square w-20 sm:w-24"
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <Dropdown
          handleLanguageChange={props.handleLanguageChange}
          language={props.language}
        />
        <img
        src={hamburger}
        alt="hamburger icon"
        className="w-8 h-8 cursor-pointer"
        onClick={() => props.toggleNavigationMenu()}
        ></img>
      </div>
    </nav>
  );
});

Navbar.propTypes = {
  toggleNavigationMenu: PropTypes.func,
  handleLanguageChange: PropTypes.func,
  language: PropTypes.func,
};

export default Navbar;