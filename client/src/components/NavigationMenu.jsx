import { IoCloseCircle } from "react-icons/io5";
import { RiArrowDropRightLine } from "react-icons/ri";
import PropTypes from "prop-types";

export default function NavigationMenu(props) {
  const menuElementStrings = [
    {
      id: 1,
      name: props.language("home.nav_home"),
      url: "/",
    },
    {
      id: 2,
      name: props.language("home.nav_locations"),
      url: "/locations",
    },
    {
      id: 3,
      name: props.language("home.nav_about"),
      url: "/about",
    },
    {
      id: 4,
      name: props.language("home.nav_testimonials"),
      url: "/testimonials",
    },
  ];

  const menuItems = menuElementStrings.map((element) => {
    return (
      <div key={element.id}>
        <li className="flex h-24 items-center justify-between px-3 text-white hover:bg-highlight-color">
          <a href={element.url} className="cursor-pointer" >{element.name}</a>
          <RiArrowDropRightLine className="h-8 w-8" />
        </li>
        <hr></hr>
      </div>
    );
  });
  return (
    <>
      {props.open && (
        <div
          aria-label="navigation menu"
          className="navigation-menu fixed right-0 z-50 h-screen w-1/2 sm:w-1/5 "
        >
          <IoCloseCircle
            className=" absolute right-2 top-5 h-8 w-8 cursor-pointer text-highlight-color"
            onClick={props.toggleNavigationMenu}
          />
          <div className=" relative top-20">
            <ul className="flex flex-col">{menuItems}</ul>
          </div>
        </div>
      )}
    </>
  );
}
NavigationMenu.propTypes = {
  open: PropTypes.bool,
  toggleNavigationMenu: PropTypes.func,
  language: PropTypes.func,
};
