import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import PropTypes from 'prop-types';

export default function Dropdown({handleLanguageChange,language}) {
  const [open, setOpen] = useState(false);

  function toggleDropdown(){
    setOpen(!open);
  }
  const countryList = countries.map((country) => {
    return (
      <>
        <li
          key={country.id}
          value={country.id}
          className="hover:bg-highlight-color flex w-full items-center justify-evenly gap-2 navigation-menu text-white"
          onClick={() => handleLanguageChange(country.name)}
        >
          {country.name}
          <img src={country.iconURL} className="h-8 w-8"></img>
        </li>
        <div className=" h-[1px] w-full bg-neutral-400 text-neutral-400"></div>
      </>
    );
  });

  return (
    <div className="relative flex items-center justify-center gap-1">
      <p className="text-light-text"> {language("home.language")} </p>
      <IoMdArrowDropdown className=" text-highlight-color cursor-pointer" onClick={toggleDropdown} />
      <div
        aria-label="horizontal line"
        className="horizontal-line h-12 w-0.5 bg-neutral-400 "
      ></div>
      {open && (
        <ul className=" absolute right-0 top-12 w-24 border-r-2 border-r-neutral-400">
          <div className=" h-[1px] w-full bg-neutral-400 text-neutral-400"></div>
          {countryList}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
  language: PropTypes.func.isRequired
}


const countries = [
  {
    id: 1,
    name: "tr",
    iconURL:
      "http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg",
  },
  {
    id: 2,
    name: "en",
    iconURL:
      "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
  },
  {
    id: 3,
    name: "de",
    iconURL:
      "http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
  },
];
