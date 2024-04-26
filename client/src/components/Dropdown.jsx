import { memo, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import PropTypes from "prop-types";
import { useI18n } from "../i18nContext";
import trFlag from "../assets/icons/trFlag.svg";
import enFlag from "../assets/icons/enFlag.svg";
import deFlag from "../assets/icons/deFlag.svg";
const countryIcons = [
  {
    src: trFlag,
    name: "TR",
    id: "0",
  },
  {
    src: enFlag,
    name: "EN",
    id: "1",
  },
  {
    src: deFlag,
    name: "DE",
    id: "2",
  },
];

const Dropdown = memo(function Dropdown({ handleLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const i18nData = useI18n();

  function toggleDropdown() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  const countryList = countryIcons.map((icon) => {
    return (
      <div key={icon.name}>
        <li
          value={icon.id}
          className="glass-bg flex w-full cursor-pointer items-center justify-evenly gap-2 text-neutral hover:bg-primary-color"
          onClick={() => handleLanguageChange(icon.name)}
        >
          {icon.name}
          <img src={icon.src} className="h-8 w-8" alt={icon.alt} />
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
});

Dropdown.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
};

export default Dropdown;