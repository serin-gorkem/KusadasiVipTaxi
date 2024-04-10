import { RiWhatsappFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { useState } from "react";
import Slider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home({ language }) {
  const [showPopUp, setShowPopUp] = useState(false);

  setTimeout(() => {
    setShowPopUp(true);
  }, 15000);

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
  const carouselPortraitImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1645485858906-56fc0972f31f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1613638377394-281765460baa?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1688675110810-2b5fe5955a4d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1706166150931-64ee23cbae56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const carouselLandscapeImages = [
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1688675110872-94e38720fcf4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1490650404312-a2175773bbf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1560927083-2131878887c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1583062482441-aa1124142248?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <Slider
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        arrows={false}
        transitionDuration={800}
        autoPlaySpeed={4100}
        swipeable={false}
        draggable={false}
        className="absolute h-screen w-full max-sm:hidden"
      >
        {carouselLandscapeImages.map((image) => {
          return (
            <img
              key={image.id}
              src={image.url}
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
        transitionDuration={800}
        autoPlaySpeed={4000}
        swipeable={false}
        draggable={false}
        className="absolute h-screen w-full sm:hidden"
      >
        {carouselPortraitImages.map((image) => {
          return (
            <img key={image.id} src={image.url} className="h-screen w-full" />
          );
        })}
      </Slider>
      <div className="max-container relative flex h-screen flex-col items-center justify-center p-6 text-center text-white ">
        <h1 className="z-10 mb-1 text-5xl font-extrabold md:text-6xl lg:text-[100px]">
          {language("home.title")}
        </h1>
        <h2 className="font-regular z-10 mb-4 text-3xl md:text-4xl lg:text-6xl ">
          {language("home.subtitle")}
        </h2>
        <p className="z-10 w-[300px] text-sm md:w-[450px] md:text-xl lg:w-[600px] lg:text-3xl">
          {language("home.slogan")}
        </p>
        {/* <div className="progress-bar z-10 mt-2 w-full rounded-lg bg-secondary-color justify-self-end">
          <div className="progress-fill h-2 w-0 animate-progressBar rounded-lg bg-white transition-all duration-1000 ease-in-out sm:h-3"></div>
        </div> */}
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
