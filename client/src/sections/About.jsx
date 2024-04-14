import { useRef } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import PropTypes from "prop-types";

export default function About({ Reveal, language }) {
  const scroolRef = useRef(null);

  const handleClick = () => {
    scroolRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="flex h-[217px] w-full  flex-col items-center justify-center bg-neutral-dark text-center text-neutral shadow-[0px_13px_7.7px_0px_rgba(0,0,0,0.25)] sm:h-[500px] ">
        <Reveal>
          <h1 className="mb-[10px] text-[32px] font-bold sm:mb-[20px] sm:text-[48px] ">
          { language("about.title") }
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="mb-[20px] max-w-[600px] text-[16px] font-medium sm:mb-[40px] sm:text-[24px] ">
          { language("about.subtitle") }

          </h2>
        </Reveal>
        <Reveal>
          <p className=" mb-[10px] text-[12px] font-light sm:mb-[20px] sm:text-[16px] ">
          { language("about.read_more") }

          </p>
        </Reveal>
        <IoIosArrowRoundDown
          className=" h-6 w-6 animate-bounce cursor-pointer text-primary-color sm:h-14 sm:w-14 "
          onClick={handleClick}
        />
      </div>
      <div
        className="m-auto flex w-full max-w-[1440px] p-4 py-8 max-sm:flex-col sm:gap-8 sm:py-20 "
        ref={scroolRef}
      >
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1613559446734-0a005faa40ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className=" h-52 w-96 rounded-md object-cover shadow-[5px_6px_20px_3px_rgba(0,0,0,0.25)] lg:h-[356px] lg:w-[3000px]"
          />
        </Reveal>
        <div>
          <Reveal>
            <h3 className=" mt-[10px] text-3xl font-bold lg:m-0 lg:text-3xl xl:text-4xl ">
              KusadasiVipTaxi
            </h3>
          </Reveal>
          <div className=" mb-[7.5px] mt-[5px] h-[1px] w-full bg-neutral-dark lg:mb-[40px] lg:mt-[20px]"></div>
          <Reveal>
            <p className=" text-sm font-light  lg:text-2xl xl:text-3xl">
            { language("about.description") }
            </p>
          </Reveal>
        </div>
      </div>
    </>
  );
}
About.propTypes = {
  Reveal: PropTypes.func.isRequired,
  language: PropTypes.func.isRequired,
}