import { IoCloseCircle } from "react-icons/io5";
import { RiArrowDropRightLine } from "react-icons/ri";
import PropTypes from "prop-types";

export default function NavigationMenu(props) {
  const menuElementStrings = [
    {
      name: props.language("nav.nav_home"),
      url: props.home,
    },
    {
      name: props.language("nav.nav_locations"),
      url: props.locations,
    },
    {
      name: props.language("nav.nav_chooseUs"),
      url: props.chooseUs,
    },
    {
      name: props.language("nav.nav_about"),
      url: props.about,
    },
    {
      name: props.language("nav.nav_testimonials"),
      url: props.testimonials,
    },
  ];
  const handlePage = (scroolRef) => {
    scroolRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const menuItems = menuElementStrings.map((element) => {
    return (
      <div key={element.n}>
        <li className="flex h-24 lg:h-28 text-[12px] md:text-[16px] lg:text-[24px]  cursor-pointer items-center justify-between px-3 text-white active:bg-primary-color hover:bg-primary-color"
         onClick={() => handlePage(element.url)}
         >
          <p>{element.name}</p>
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
          className="glass-bg fixed right-0 z-50 h-screen w-1/2 md:w-2/6 sm:w-1/5 "
        >
          <IoCloseCircle
            className=" absolute right-2 top-5 h-8 w-8 cursor-pointer text-primary-color"
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
  home: PropTypes.object,
  locations: PropTypes.object,
  chooseUs: PropTypes.object,
  about: PropTypes.object,
  testimonials: PropTypes.object,
};
