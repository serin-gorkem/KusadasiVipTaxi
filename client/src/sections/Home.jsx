import Carousel from "../components/Carousel";
import PropTypes from 'prop-types';


export default function Home({language}) {
  setInterval(() => {
    document
      .querySelector(".progress-fill")
      .classList.remove("animate-progressBar");
  }, 4000);
  setInterval(() => {
    document
      .querySelector(".progress-fill")
      .classList.add("animate-progressBar");
  }, 4010);

  return (
    <>
      <Carousel />
      <div className="max-container flex h-screen flex-col items-start justify-center gap-2 p-6 text-light-text ">
        <h1 className="z-10 text-4xl font-bold sm:text-6xl">
          {language("home.title")}
        </h1>
        <h2 className="z-10 text-2xl font-light sm:text-4xl ">
          {language("home.subtitle")}
        </h2>
        <p className="z-10 sm:text-xl ">
          {language("home.slogan")}
        </p>
        <div className="progress-bar z-50 mt-2 w-44 rounded-lg bg-secondary-color sm:w-56">
          <div className="progress-fill h-2 w-0 animate-progressBar rounded-lg bg-white transition-all duration-1000 ease-in-out sm:h-3"></div>
        </div>
      </div>
    </>
  );
}
Home.propTypes= {
  language: PropTypes.func.isRequired,
}