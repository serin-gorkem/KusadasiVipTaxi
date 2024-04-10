import { useTranslation } from "react-i18next";
import Home from "./sections/Home";
import Locations from "./sections/Locations";
import Navbar from "./components/Navbar";
import { useState } from "react";
import NavigationMenu from "./components/NavigationMenu";
import ChooseUs from "./sections/ChooseUs";

export default function App() {
  const [t, i18n] = useTranslation("global");
  const [open, setOpen] = useState(false);

  function toggleNavigationMenu() {
    setOpen(!open);
  }
  function handleLanguageChange(lang) {
    i18n.changeLanguage(lang);
  }


  return (
    <>
      <header>
        <div className="max-container">
          <Navbar
            toggleNavigationMenu={toggleNavigationMenu}
            language={t}
            handleLanguageChange={handleLanguageChange}
          />
        </div>
        <NavigationMenu
          open={open}
          language={t}
          toggleNavigationMenu={toggleNavigationMenu}
        />
      </header>
      <section className="relative">
        <Home language={t} handleLanguageChange={handleLanguageChange} />
      </section>
      <section>
        <Locations language={t} handleLanguageChange={handleLanguageChange} />
      </section>
      <section>
        <ChooseUs />
      </section>
      <section>
      </section>
    </>
  );
}
