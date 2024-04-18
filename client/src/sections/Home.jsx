import { RiWhatsappFill } from "react-icons/ri";
import { memo, useEffect, useState } from "react";
import Slider from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProgressBar from "../components/ProgressBar";
import { useI18n } from "../i18nContext";
import imageInfo from "../constants/HomeSlider.json";
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

  useEffect(() => {
    setTimeout(() => {
      setShowPopUp(true);
    }, 1000);
  }, []);

  return (
    <div className=" relative">
      <Slider
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        arrows={false}
        autoPlaySpeed={4000}
        swipeable={false}
        alt="carousel_image_item"
        draggable={false}
        className="absolute h-screen w-full sm:hidden"
      >
        {imageInfo.portrait.map((image) => {
          return (
            <img
              key={image.id}
              src={image.src}
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
        alt="carousel_image_item"
        draggable={false}
        className="absolute h-screen w-full max-sm:hidden"
      >
        {imageInfo.landscape.map((image) => {
          return (
            <img
              key={image.id}
              src={image.src}
              className="h-screen w-full object-cover"
            />
          );
        })}
      </Slider>
      <div className="max-container relative flex h-screen flex-col items-center justify-center p-6 text-center text-white ">
        <h1 className="z-10 mb-1 text-5xl font-extrabold md:text-6xl lg:text-[100px]">
          {i18nData("home.title")}
        </h1>

        <h2 className="font-regular z-10 mb-4 text-3xl md:text-4xl lg:text-6xl  ">
          {i18nData("home.subtitle")}
        </h2>

        <p className="z-10 w-[300px] text-sm md:w-[450px] md:text-xl lg:w-[600px] lg:text-2xl ">
          {i18nData("home.slogan")}
        </p>
        {showPopUp && (
          <div className="fixed bottom-6 z-10 flex animate-pulse items-center justify-center gap-2 self-end ">
            <article className="hidden rounded-lg bg-white p-3 font-semibold text-black xl:block">
              <figure>
                <figcaption>{i18nData("nav.whatsapp_message")} </figcaption>
              </figure>
            </article>
            <a href="https://wa.me/+905438083997" className="">
              <RiWhatsappFill className="h-12 w-12 cursor-pointer"></RiWhatsappFill>
            </a>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 w-full">
        <ProgressBar />
      </div>
    </div>
  );
});

export default Home;
