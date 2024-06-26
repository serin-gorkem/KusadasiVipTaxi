import PropTypes from "prop-types";
import { Suspense, memo, useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { useI18n } from "../i18nContext";
import { lazy } from "react";
import Lottie from "lottie-light-react";
import Taxi from "../assets/Taxi.json";

const Slider = lazy(() => import("react-multi-carousel"));
const Place = lazy(() => import("../components/Place"));
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Locations = memo(function Locations({ SlideIn }) {
  const currentLocationIndexRef = useRef(0);
  const [placeData, setPlaceData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const i18nData = useI18n();

  const handleChangeLocation = (id) => {
    setCurrentLocation(placeData[id]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonModule = await import("../constants/Locations/Info.json");
        // Access the JSON data from the module namespace object
        setPlaceData(jsonModule.default);
        setCurrentLocation(jsonModule.default[currentLocationIndexRef.current]);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {placeData && (
        <div className="flex flex-col items-center justify-center lg:flex lg:flex-col">
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <div className=" px-4 py-2">
              <SlideIn className="w-full px-4 py-2">
                <h1 className=" text-center text-[28px] font-bold text-neutral-dark lg:text-[40px] ">
                  {i18nData("locations.heading")}
                </h1>
              </SlideIn>
              <SlideIn>
                <h2 className=" text-center text-[14px] font-semibold text-neutral-dark lg:text-[20px]  ">
                  {i18nData("locations.subheading")}
                </h2>
              </SlideIn>
            </div>
            <Lottie
              animationData={Taxi}
              autoplay={false}
              loop={false}
              className=" h-44 w-44 sm:hidden"
            />
            <Lottie
              animationData={Taxi}
              autoplay={true}
              loop={true}
              className=" h-44 w-44 max-sm:hidden"
            />
          </div>
          <div
            aria-label="location titles"
            className="grid grid-cols-3 place-items-center gap-4 overflow-hidden p-4 md:grid-cols-8 lg:z-40 lg:w-[1000px] lg:[&>*:nth-child(5)]:col-start-2 "
          >
            {placeData.map((info) => {
              return (
                <Place
                  key={info.id}
                  id={info.id}
                  changeLocation={handleChangeLocation}
                  title={info.title}
                />
              );
            })}
          </div>
          <div className="information-container max-container flex w-full flex-col gap-4 p-6 lg:flex-row lg:py-8 ">
            <div className="lg:w-1/2 lg:py-0">
              <iframe
                className="h-96 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:h-full "
                aria-label="map"
                src={currentLocation.mapURL}
                loading="lazy"
              ></iframe>
              <p className="w-full "> {i18nData(`locations.more`)} </p>
            </div>
            <div className="flex flex-col lg:w-1/2">
              <Suspense fallback={<h2>🌀 Loading...</h2>}>
                <Slider
                  responsive={responsive}
                  autoPlay={true}
                  infinite={true}
                  autoPlaySpeed={4000}
                  transitionDuration={800}
                  className="z-0 h-[550px] w-full md:h-[360px] xl:h-[400px]"
                >
                  {currentLocation.images.map((image) => {
                    return (
                      <img
                        key={image.id}
                        src={image.url}
                        alt={image.alt}
                        className=" h-[550px] rounded-full  bg-center object-cover p-2 md:h-[360px] xl:h-[400px] xl:w-full xl:rounded-none xl:p-0 "
                      />
                    );
                  })}
                </Slider>
              </Suspense>
              <SlideIn>
                <p className="text-center">
                  {i18nData(
                    `locations.info_text.${currentLocationIndexRef.current}.text`,
                  )}
                </p>
              </SlideIn>
              <button className=" my-4 flex h-8 w-fit  items-center justify-center self-center rounded-lg bg-primary-color px-6 py-2 shadow-lg hover:text-neutral active:shadow-inner md:h-12">
                <a
                  href={currentLocation.readMore}
                  className="text-[10px] font-semibold md:text-[14px]"
                  aria-label="read more link"
                >
                  {i18nData(`locations.read_more`)}
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

Locations.propTypes = {
  SlideIn: PropTypes.object.isRequired,
};
export default Locations;