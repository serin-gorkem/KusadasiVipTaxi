import { useTranslation } from "react-i18next";
import { lazy, memo, useRef } from "react";
import { I18nProvider } from "./i18nContext";

/*Sections */
// import Header from "./sections/Header";

import Home from "./sections/Home";
const Header = lazy(() => import("./sections/Header"));
const Locations = lazy(() => import("./sections/Locations"));
const ChooseUs = lazy(() => import("./sections/ChooseUs"));
const About = lazy(() => import("./sections/About"));
const Footer = lazy(() => import("./sections/Footer"));
const Testimonials = lazy(() => import("./sections/Testimonials"));

const App = memo(function App() {
  const [t, i18n] = useTranslation("global");
  const refs = {
    home: useRef(null),
    locations: useRef(null),
    chooseUs: useRef(null),
    about: useRef(null),
    testimonials: useRef(null),
  };
  return (
    <>
      {t && (
        <I18nProvider i18nData={t}>
          <header>
            <Header refs={refs} i18n={i18n} />
          </header>
          <main>
            <section ref={refs.home}>
              <Home />
            </section>
            <section ref={refs.locations}>
              <Locations />
            </section>
            <section ref={refs.chooseUs}>
              <ChooseUs />
            </section>
            <section ref={refs.about}>
              <About />
            </section>
            <section ref={refs.testimonials}>
              <Testimonials />
            </section>
          </main>
          <footer>
            <Footer refs={refs} />
          </footer>
        </I18nProvider>
      )}
    </>
  );
});
export default App;
