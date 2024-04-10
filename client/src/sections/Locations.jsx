import PropTypes from "prop-types";
import placeInfo from "../constants/Locations/Info.json";
import { useState } from "react";
import Slider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Locations({ language }) {
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
      items: 2,
    },
  };

  function changeLocation(id){
    setCurrentLocationIndex(id);
  }

  return (
    <div className="items-center justify-center lg:flex lg:flex-col">
      <h1 className=" text-neutral-dark text-center text-[28px] font-bold lg:text-[40px] ">
        {language("locations.heading")}
      </h1>
      <h2 className=" text-neutral-dark text-center text-[14px] font-semibold lg:text-[20px]  ">
        {language("locations.subheading")}
      </h2>
      <div
        aria-label="location titles"
        className="grid grid-cols-3 place-items-center gap-4 overflow-hidden p-4 md:grid-cols-8 lg:z-20 lg:w-[1000px] lg:[&>*:nth-child(5)]:col-start-2 "
      >
        {placeInfo.map((info) => {
          return <Place key={info.id} id={info.id} changeLocation={changeLocation} title={info.title} />;
        })}
      </div>
      <div className="information-container max-container flex flex-col lg:flex-row lg:py-8 ">
        <div className="flex flex-col items-center justify-center gap-2 p-3 lg:w-1/2 lg:py-0">
          <iframe
            className="h-96 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:h-full "
            aria-label="map"
            src={data.mapURL}
            loading="lazy"
          ></iframe>
          <p className="w-full "> {language(`locations.more`)} </p>
        </div>
        <div className="flex flex-col p-3 lg:w-1/2">
          <Slider
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={4000}
            transitionDuration={800}
            className="h-80 w-full md:h-[360px] xl:h-[400px] z-0"
          >
            {data.images.map((image) => {
              return (
                  <img
                    key={image.id}
                    src={image.url}
                    className=" h-80 rounded-full bg-center object-cover p-2 md:h-[360px] xl:h-[400px] xl:rounded-none xl:p-0 xl:w-full "
                  />
              );
            })}
          </Slider>
          <p>{language(`locations.info_text.${currentLocationIndex}.text`)} </p>
          <button className=" my-4 flex h-8 w-28 md:h-12 md:w-36 items-center justify-center self-center rounded-lg bg-primary-color px-6 py-2 shadow-lg hover:text-neutral active:shadow-inner">
            <a href={data.readMore} className="text-[10px] md:text-[14px] font-semibold">
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
    <div className="flex h-8 w-24 cursor-pointer items-center justify-center rounded-lg bg-base p-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-primary-color active:bg-primary-color md:col-span-2 md:h-12 md:w-32 lg:w-36"
    onClick={() => changeLocation(id)}
    >
      <p className=" text-neutral-dark text-center text-[13px] lg:text-[18px]">
        {title}
      </p>
    </div>
  );
}

Locations.propTypes = {
  language: PropTypes.func.isRequired,
};
Place.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  changeLocation: PropTypes.func.isRequired,
};
