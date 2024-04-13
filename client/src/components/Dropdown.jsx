import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import PropTypes from "prop-types";

export default function Dropdown({ handleLanguageChange, language }) {
  const [open, setOpen] = useState(false);

  function toggleDropdown() {
    setOpen(!open);
  }

  const countryList = countries.map((country) => {
    return (
      <div key={country.name}>
        <li
          value={country.id}
          className="glass-bg flex w-full items-center cursor-pointer justify-evenly gap-2 text-neutral hover:bg-primary-color"
          onClick={() => handleLanguageChange(country.name)}
        >
          {country.name}
          <img src={country.iconURL} className="h-8 w-8"></img>
        </li>
        <div className=" h-[1px] w-full bg-neutral-400 text-neutral-400"></div>
      </div>
    );
  });

  return (
    <div className="relative flex items-center justify-center gap-1">
      <p className="text-primary-color"> {language("home.language")} </p>
      <IoMdArrowDropdown
        className=" cursor-pointer text-primary-color"
        onClick={toggleDropdown}
      />
      <div
        aria-label="horizontal line"
        className="horizontal-line h-12 w-0.5 bg-neutral-400 "
      ></div>
      {open && (
        <ul className=" absolute right-0 top-12 w-24 border-r-2 border-r-neutral-400">
          <div className=" h-[1px] w-full bg-neutral-400 "></div>
          {countryList}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
  language: PropTypes.func.isRequired,
};

const countries = [
  {
    name: "TR",
    iconURL:
      "http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg",
  },
  {
    name: "EN",
    iconURL:
      "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
  },
  {
    name: "DE",
    iconURL:
      "http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
  },
];
