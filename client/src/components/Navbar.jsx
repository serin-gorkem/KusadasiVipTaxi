import Dropdown from "./Dropdown";
import { RiMenu3Fill } from "react-icons/ri";
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav
      aria-label="navigation bar"
      className="navbar fixed z-50 flex max-container w-full items-center justify-between p-3"
    >
      <div>
        <img
          src="./Logo.png"
          alt="Logo"
          className="aspect-square w-20 sm:w-24"
        ></img>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <Dropdown handleLanguageChange = {props.handleLanguageChange} language={props.language}/>
        <RiMenu3Fill className="h-8 w-8 text-primary-color cursor-pointer" onClick={props.toggleNavigationMenu} />
      </div>
    </nav>
  );
}

Navbar.propTypes ={
    toggleNavigationMenu: PropTypes.func,
    handleLanguageChange: PropTypes.func,
    language: PropTypes.func
}