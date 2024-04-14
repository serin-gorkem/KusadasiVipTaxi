import { useTranslation } from "react-i18next";
import Home from "./sections/Home";
import Locations from "./sections/Locations";
import Navbar from "./components/Navbar";
import {useRef, useState } from "react";
import NavigationMenu from "./components/NavigationMenu";
import ChooseUs from "./sections/ChooseUs";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Testimonials from "./sections/Testimonials";
import Reveal from "./components/Reveal";


export default function App() {
  const [t, i18n] = useTranslation("global");
  const [open, setOpen] = useState(false);

  const homeRef = useRef(null);
  const locationsRef = useRef(null);
  const chooseUsRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  function toggleNavigationMenu() {
    setOpen(!open);
  }
  function handleLanguageChange(lang) {
    i18n.changeLanguage(lang);
  }


  return (
    <>
      {/* <LoadingScreen ref={loadingRef} /> */}
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
          home={homeRef}
          locations={locationsRef}
          chooseUs={chooseUsRef}
          about={aboutRef}
          testimonials={testimonialsRef}
        />
      </header>
      <section className="relative" ref={homeRef}>
        <Home language={t} />
      </section>
      <section ref={locationsRef}>
        <Locations language={t} Reveal={Reveal} />
      </section>
      <section ref={chooseUsRef}>
        <ChooseUs language={t} Reveal={Reveal} />
      </section>
      <section ref={aboutRef}>
        <About language={t} Reveal={Reveal} />
      </section>
      <section ref={testimonialsRef}>
        <Testimonials language={t} Reveal={Reveal} />
      </section>
      <section>
        <Footer
          home={homeRef}
          locations={locationsRef}
          chooseUs={chooseUsRef}
          about={aboutRef}
          testimonials={testimonialsRef}
          language={t}
        />
      </section>
    </>
  );
}
