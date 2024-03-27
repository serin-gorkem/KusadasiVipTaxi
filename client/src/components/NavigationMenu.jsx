import { IoCloseCircle } from "react-icons/io5";
import { RiArrowDropRightLine } from "react-icons/ri";
import PropTypes from 'prop-types';

export default function NavigationMenu(props) {

  return (
    <>
      {props.open && (
        <div
          aria-label="navigation menu"
          className="navigation-menu absolute right-0 z-50 h-screen w-1/2 sm:w-1/5 "
        >
          <IoCloseCircle className=" text-highlight-color absolute right-2 top-5 h-8 w-8 cursor-pointer" onClick={props.toggleNavigationMenu} />
          <div className=" relative top-20">
            <MenuElement />
          </div>
        </div>
      )}
    </>
  );
}


NavigationMenu.propTypes = {
    open: PropTypes.bool,
    toggleNavigationMenu: PropTypes.func,
}


function MenuElement() {
  const menuItems = menuElementStrings.map((element) => {
    return (
      <>
        <li
          key={element.id}
          className="hover:bg-highlight-color flex h-24 cursor-pointer items-center justify-between px-3 text-white"
        >
          <a href={element.url}>{element.name}</a>
          <RiArrowDropRightLine className="h-8 w-8" />
        </li>
        <hr></hr>
      </>
    );
  });
  return (
    <div className=" h-24 w-full">
      <ul className="flex flex-col">{menuItems}</ul>
    </div>
  );
}
const menuElementStrings = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Locations",
    url: "/locations",
  },
  {
    id: 3,
    name: "About",
    url: "/about",
  },
  {
    id: 4,
    name: "Testimonials",
    url: "/testimonials",
  },
];
