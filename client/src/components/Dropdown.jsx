import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import PropTypes from "prop-types";
import { useI18n } from "../i18nContext";

export default function Dropdown({ handleLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const i18nData = useI18n();

  function toggleDropdown() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  const countryList = countries.map((country) => {
    return (
      <div key={country.name}>
        <li
          value={country.id}
          className="glass-bg flex w-full cursor-pointer items-center justify-evenly gap-2 text-neutral hover:bg-primary-color"
          onClick={() => handleLanguageChange(country.name)}
        >
          {country.name}
          <img src={country.iconURL} className="h-8 w-8" alt={country.alt} />
        </li>
        <div className=" bg-neutral-400 text-neutral-400 h-[1px] w-full"></div>
      </div>
    );
  });

  return (
    <div className="relative flex items-center justify-center gap-1">
      <p className="text-primary-color"> {i18nData("home.language")} </p>
      <IoMdArrowDropdown
        className=" cursor-pointer text-primary-color"
        onClick={toggleDropdown}
      />
      <div
        aria-label="horizontal line"
        className="horizontal-line bg-neutral-400 h-12 w-0.5 "
      ></div>
      {isOpen && (
        <ul className=" border-r-neutral-400 absolute right-0 top-12 w-24 border-r-2">
          <div className=" bg-neutral-400 h-[1px] w-full "></div>
          {countryList}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
};

const countries = [
  {
    name: "TR",
    iconURL:
      "http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg",
    alt: "Turkish flag",
  },
  {
    name: "EN",
    iconURL:
      "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
    alt: "England flag",
  },
  {
    name: "DE",
    iconURL:
      "http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
    alt: "Germany flag",
  },
];
