import Slider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import locationData from "../constants/Locations/Info.json";
import PropTypes from "prop-types";
import { useRef } from "react";

export default function Locations() {
  const playSpeedRef = useRef(5000);
  const outerSliderResponsiveness = {
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
  return (
    <div
      className="locations"
      ref={playSpeedRef}
      onMouseEnter={() => (playSpeedRef.current = 0)}
      onMouseLeave={() => (playSpeedRef.current = 5000)}
    >
      <Slider
        responsive={outerSliderResponsiveness}
        className="max-container"
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={playSpeedRef.current}
        swipeable={false}
        draggable={false}
        infinite={true}
        ref={playSpeedRef}
      >
        {locationData.map((element) => {
          return (
            <Location
              key={element.id}
              images={element.images}
              title={element.title}
              mapURL={element.mapURL}
              text={element.text}
              readMore={element.readMore}
            />
          );
        })}
      </Slider>
    </div>
  );
}

function Location(props) {
  const innerSliderResponsiveness = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-container mx-2 flex flex-col items-center justify-center gap-2 px-2 text-dark-text ">
      <h1 className="text-shadow-md text-2xl font-extrabold sm:text-3xl">
        Konumlarımızı Keşfedin
      </h1>
      <h2 className="text-xl font-bold sm:text-xl ">{props.title} Nerede ?</h2>
      <div className="flex w-full items-center justify-center">
        <iframe
          className=" h-96 w-full shadow-md sm:w-3/5"
          src={props.mapURL}
          loading="lazy"
        ></iframe>
      </div>
      <Slider
        responsive={innerSliderResponsiveness}
        arrows={false}
        infinite={true}
        autoPlay={true}
        transitionDuration={800}
        autoPlaySpeed={4000}
        swipeable={true}
        draggable={true}
        className="h-[500px] w-full sm:h-full sm:w-3/5  "
      >
        {props.images.map((image) => {
          return (
            <div key={image.id} className="h-full">
              <img
                src={image.url}
                className="h-[500px] w-full rounded-full bg-center object-cover px-1 sm:h-full sm:rounded-none"
              />
            </div>
          );
        })}
      </Slider>
      <div className="sm:w-3/5">
        <p className=" ">{props.text}</p>
        <a
          href={props.readMore}
          className="cursor-pointer text-highlight-color underline"
        >
          Daha fazla oku
        </a>
      </div>
    </div>
  );
}

Location.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  mapURL: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  readMore: PropTypes.string.isRequired,
};
