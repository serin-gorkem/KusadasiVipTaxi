import PropTypes from "prop-types";
import placeInfo from "../constants/Locations/Info.json";
import { useState } from "react";
import Slider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Lottie from "lottie-react";
// import TaxiAnimation from "../assets/Taxi.json";

export default function Locations({ language, Reveal }) {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  const data = placeInfo[currentLocationIndex];
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

  function changeLocation(id) {
    setCurrentLocationIndex(id);
  }

  return (
    <div className="items-center justify-center lg:flex lg:flex-col">
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div>
          <Reveal>
            <h1 className=" text-center text-[28px] font-bold text-neutral-dark lg:text-[40px] ">
              {language("locations.heading")}
            </h1>
          </Reveal>
          <Reveal>
            <h2 className=" text-center text-[14px] font-semibold text-neutral-dark lg:text-[20px]  ">
              {language("locations.subheading")}
            </h2>
          </Reveal>
        </div>
        {/* <Lottie
          animationData={TaxiAnimation}
          autoplay={true}
          loop={true}
          className=" h-44 w-44"
        /> */}
      </div>
      <div
        aria-label="location titles"
        className="grid grid-cols-3 place-items-center gap-4 overflow-hidden p-4 md:grid-cols-8 lg:z-20 lg:w-[1000px] lg:[&>*:nth-child(5)]:col-start-2 "
      >
        {placeInfo.map((info) => {
          return (
            <Place
              key={info.id}
              id={info.id}
              changeLocation={changeLocation}
              title={info.title}
            />
          );
        })}
      </div>
      <div className="information-container max-container flex flex-col gap-4 p-6 lg:flex-row lg:py-8 ">
        <div className="flex flex-col items-center justify-center gap-2 lg:w-1/2 lg:py-0">
            <iframe
              className="h-96 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:h-full "
              aria-label="map"
              src={data.mapURL}
              loading="lazy"
            ></iframe>
          <Reveal>
            <p className="w-full "> {language(`locations.more`)} </p>
          </Reveal>
        </div>
        <div className="flex flex-col lg:w-1/2">
          <Slider
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={4000}
            transitionDuration={800}
            className="z-0 h-[450px] w-full md:h-[360px] xl:h-[400px]"
          >
            {data.images.map((image) => {
              return (
                <img
                  key={image.id}
                  src={image.url}
                  className=" h-[450px] rounded-full  bg-center object-cover p-2 md:h-[360px] xl:h-[400px] xl:w-full xl:rounded-none xl:p-0 "
                />
              );
            })}
          </Slider>
          <Reveal>
            <p>
              {language(`locations.info_text.${currentLocationIndex}.text`)}{" "}
            </p>
          </Reveal>
          <button className=" my-4 flex h-8 w-fit  items-center  justify-center self-center rounded-lg bg-primary-color px-6 py-2 shadow-lg hover:text-neutral active:shadow-inner md:h-12">
            <a
              href={data.readMore}
              className="text-[10px] font-semibold md:text-[14px]"
            >
              {language(`locations.read_more`)}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Place({ title, id, changeLocation }) {
  return (
    <div
      className="flex h-8 w-24 cursor-pointer items-center justify-center rounded-lg bg-base p-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-primary-color active:bg-primary-color md:col-span-2 md:h-12 md:w-32 lg:w-36"
      onClick={() => changeLocation(id)}
    >
      <p className=" text-center text-[13px] text-neutral-dark lg:text-[18px]">
        {title}
      </p>
    </div>
  );
}

Locations.propTypes = {
  language: PropTypes.func.isRequired,
  Reveal: PropTypes.func.isRequired,
};
Place.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  changeLocation: PropTypes.func.isRequired,
};
