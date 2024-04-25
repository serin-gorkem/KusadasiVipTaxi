import { memo, useRef } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useI18n } from "../i18nContext";
import PropTypes from "prop-types";

const About = memo(function About({ SlideIn }) {
  const scrollRef = useRef(null);
  const i18nData = useI18n();

  const handleClick = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="flex h-[217px] w-full  flex-col items-center justify-center bg-neutral-dark text-center text-neutral shadow-[0px_13px_7.7px_0px_rgba(0,0,0,0.25)] sm:h-[500px] ">
        <SlideIn>
          <h1 className="mb-[10px] text-[32px] font-bold sm:mb-[20px] sm:text-[48px] ">
            {i18nData("about.title")}
          </h1>
        </SlideIn>
        <SlideIn>
          <h2 className="mb-[20px] max-w-[600px] text-[16px] font-medium sm:mb-[40px] sm:text-[24px] ">
            {i18nData("about.subtitle")}
          </h2>
        </SlideIn>
        <SlideIn>
          <p className=" mb-[10px] text-[12px] font-light sm:mb-[20px] sm:text-[16px] ">
            {i18nData("about.read_more")}
          </p>
        </SlideIn>

        <IoIosArrowRoundDown
          className=" h-6 w-6 animate-bounce cursor-pointer text-primary-color sm:h-14 sm:w-14 "
          onClick={handleClick}
        />
      </div>
      <div
        className="flex w-full sm:justify-center p-4 py-8 max-sm:flex-col sm:gap-8 sm:py-20 "
        ref={scrollRef}>
        <SlideIn>
          <img
            src="https://images.unsplash.com/photo-1623731002955-490c5503e670?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Owner Image"
            loading="lazy"
            className="h-52 w-[600px] rounded-md object-cover shadow-[5px_6px_20px_3px_rgba(0,0,0,0.25)] lg:h-[356px]"
          />
        </SlideIn>
        <div className="sm:flex sm:flex-col sm:w-1/2">
          <SlideIn>
            <h3 className="mt-[10px] text-3xl font-bold lg:m-0 lg:text-3xl xl:text-4xl ">
              KusadasiVipTaxi
            </h3>
          </SlideIn>
          <SlideIn>
            <div className=" mb-[7.5px] mt-[5px] h-[1px] w-full bg-neutral-dark lg:mb-[40px] lg:mt-[20px]"></div>
          </SlideIn>
          <SlideIn>
            <p className=" text-sm font-light  lg:text-2xl xl:text-3xl">
              {i18nData("about.description")}
            </p>
          </SlideIn>
        </div>
      </div>
    </>
  );
});
export default About;
About.propTypes = {
  SlideIn: PropTypes.object.isRequired,
};