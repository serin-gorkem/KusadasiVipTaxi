import { IoCloseCircle } from "react-icons/io5";
import { RiArrowDropRightLine } from "react-icons/ri";
import PropTypes from "prop-types";
import { useI18n } from "../i18nContext";
import { memo } from "react";

const NavigationMenu = memo(function NavigationMenu({
  open,
  toggleNavigationMenu,
  refs,
}) {
  const i18nData = useI18n();

  const menuElementStrings = [
    { name: i18nData("nav.nav_home"), url: refs.home },
    { name: i18nData("nav.nav_locations"), url: refs.locations },
    { name: i18nData("nav.nav_chooseUs"), url: refs.chooseUs },
    { name: i18nData("nav.nav_about"), url: refs.about },
    { name: i18nData("nav.nav_testimonials"), url: refs.testimonials },
  ];

  const handlePage = (scrollRef) => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const menuItems = menuElementStrings.map((element) => {
    return (
      <div key={element.name}>
        <li
          className="flex h-24 cursor-pointer items-center justify-between px-3 text-[12px] text-white hover:bg-primary-color active:bg-primary-color md:text-[16px] xl:text-[18px]"
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
      {open && (
        <div
          className="glass-bg fixed right-0 z-50 h-screen w-1/2 sm:w-1/5 md:w-2/6 "
        >
          <IoCloseCircle
            className=" absolute right-2 top-5 h-8 w-8 cursor-pointer text-primary-color"
            onClick={toggleNavigationMenu}
          />
          <div className="relative top-20">
            <ul className="flex flex-col">{menuItems}</ul>
          </div>
        </div>
      )}
    </>
  );
});
NavigationMenu.propTypes = {
  open: PropTypes.bool,
  toggleNavigationMenu: PropTypes.func,
  refs: PropTypes.object,
};

export default NavigationMenu;