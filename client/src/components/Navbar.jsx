import Dropdown from "./Dropdown";
import { RiMenu3Fill } from "react-icons/ri";
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav
      aria-label="navigation bar"
      className="navbar fixed z-10 flex max-container w-full items-center justify-between pr-3"
    >
      <div>
        <img
          src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png"
          alt="Logo"
          className="aspect-square w-24 sm:w-36"
        ></img>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <Dropdown handleLanguageChange = {props.handleLanguageChange} language={props.language}/>
        <RiMenu3Fill className="h-8 w-8 text-white cursor-pointer" onClick={props.toggleNavigationMenu} />
      </div>
    </nav>
  );
}

Navbar.propTypes ={
    toggleNavigationMenu: PropTypes.func,
    handleLanguageChange: PropTypes.func,
    language: PropTypes.func
}