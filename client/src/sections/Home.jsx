import { RiWhatsappFill } from "react-icons/ri";
import Carousel from "../components/Carousel";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Home({ language }) {
  const [showPopUp, setShowPopUp] = useState(false);

  setInterval(() => {
    document
      .querySelector(".progress-fill")
      .classList.toggle("animate-progressBar");
  }, 4000);

  setTimeout(() => {
    setShowPopUp(true);
  }, 15000);

  return (
    <>
      <Carousel />
      <div className="max-container relative flex h-screen flex-col items-start justify-center gap-2 p-6 text-light-text ">
        <h1 className="z-10 text-4xl font-bold sm:text-6xl">
          {language("home.title")}
        </h1>
        <h2 className="z-10 text-2xl font-light sm:text-4xl ">
          {language("home.subtitle")}
        </h2>
        <p className="z-10 sm:text-xl ">{language("home.slogan")}</p>
        <div className="progress-bar z-50 mt-2 w-44 rounded-lg bg-secondary-color sm:w-56">
          <div className="progress-fill h-2 w-0 animate-progressBar rounded-lg bg-white transition-all duration-1000 ease-in-out sm:h-3"></div>
        </div>
        {showPopUp && (
          <div className="fixed bottom-6 z-10 flex animate-pulse items-center justify-center gap-2 self-end ">
            <article className="rounded-lg bg-white p-3 font-semibold text-black ">
              <figure>
                <figcaption> {language("nav.whatsapp_message")} </figcaption>
              </figure>
            </article>
            <a href="https://wa.me/">
              {/* Enter number after the / */}
              <RiWhatsappFill className="h-8 w-8 cursor-pointer"></RiWhatsappFill>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
Home.propTypes = {
  language: PropTypes.func.isRequired,
};
