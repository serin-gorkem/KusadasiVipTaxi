import { Suspense, lazy, memo, useState } from "react";
import PropTypes from "prop-types";

// import Navbar from "../components/Navbar";
// import NavigationMenu from "../components/NavigationMenu";

const Navbar = lazy(() => import("../components/Navbar"));
const NavigationMenu = lazy(() => import("../components/NavigationMenu"));

const Header = memo(function Header({ refs, i18n }) {
  const [open, setOpen] = useState(false);
  function handleLanguageChange(lang) {
    i18n.changeLanguage(lang);
  }
  function toggleNavigationMenu() {
    setOpen(!open);
  }
  return (
    <>
      <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <div className="max-container">
          <Navbar
            toggleNavigationMenu={toggleNavigationMenu}
            handleLanguageChange={handleLanguageChange}
          />
        </div>
        <NavigationMenu
          open={open}
          toggleNavigationMenu={toggleNavigationMenu}
          refs={refs}
        />
      </Suspense>
    </>
  );
});

Header.propTypes = {
  refs: PropTypes.object,
  i18n: PropTypes.object,
};

export default Header;