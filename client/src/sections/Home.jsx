import { RiWhatsappFill } from "react-icons/ri";
import { memo, Suspense, useEffect, useState } from "react";
import Slider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProgressBar from "../components/ProgressBar";
import { useI18n } from "../i18nContext";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = memo(function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
  const i18nData = useI18n();
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonModule = await import("../constants/HomeSlider.json");
        // Access the JSON data from the module namespace object
        setJsonData(jsonModule.default);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };
    setTimeout(() => {
      setShowPopUp(true);
    }, 8000);

    fetchData();
  }, []);

  return (
    <div className="relative">
      {jsonData && (
        <>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Slider
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            arrows={false}
            autoPlaySpeed={4000}
            swipeable={false}
            draggable={false}
            className="absolute w-full sm:hidden"
          >
            {jsonData.portrait.map((image) => {
              return (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className="h-screen w-full object-cover"
                />
              );
            })}
          </Slider>
          <div className="absolute z-0 h-screen w-full bg-[#00000040] "></div>
          <Slider
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            arrows={false}
            autoPlaySpeed={4000}
            swipeable={false}
            draggable={false}
            className="absolute w-full max-sm:hidden"
          >
            {jsonData.landscape.map((image) => {
              return (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className="h-screen w-full object-cover"
                />
              );
            })}
          </Slider>
        </Suspense>
        </>
      )}
      <div className="relative flex h-screen flex-col items-center justify-center p-6 text-center text-white ">
        <h1 className="z-10 mb-1 text-4xl font-extrabold md:text-6xl lg:text-[100px]">
          {i18nData("home.title")}
        </h1>

        <h2 className="z-10 mb-4 text-2xl font-medium md:text-4xl lg:text-6xl  ">
          {i18nData("home.subtitle")}
        </h2>

        <p className="z-10 w-[300px] text-xs md:w-[450px] md:text-xl lg:w-[600px] lg:text-2xl ">
          {i18nData("home.slogan")}
        </p>
        {showPopUp && (
          <div className="fixed bottom-6 z-10 flex items-center justify-center gap-2 self-end sm:animate-pulse ">
            <article className="rounded-lg bg-neutral p-3 font-semibold text-black max-sm:hidden">
              <figure>
                <figcaption>{i18nData("nav.whatsapp_message")} </figcaption>
              </figure>
            </article>
            <a
              href="https://wa.me/+905438083997"
              aria-label="Whatsapp redirect link"
            >
              <RiWhatsappFill className="h-16 w-16 cursor-pointer text-primary-color"></RiWhatsappFill>
            </a>
          </div>
        )}
      </div>
      <div className="absolute hidden sm:block bottom-0 w-full">
        <ProgressBar />
      </div>
    </div>
  );
});

export default Home;
