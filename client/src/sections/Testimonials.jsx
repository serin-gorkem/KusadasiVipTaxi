import PropTypes from "prop-types";

export default function Testimonials({ Reveal }) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className=" -z-10 flex h-[217px] w-full  flex-col items-center justify-center bg-neutral-dark text-center text-neutral shadow-[0px_13px_7.7px_0px_rgba(0,0,0,0.25)] sm:h-[355px] ">
        <Reveal>
          <h1 className=" text-[32px] font-bold sm:text-[48px] ">
            Testimonials
          </h1>
        </Reveal>
      </div>
      <div className="max-container  relative -top-16 flex flex-col items-start justify-center gap-7 lg:flex-row">
        <Reveal>
          <div className="h-[239px] w-[300px] bg-primary-color sm:mb-9 sm:h-[560px] sm:w-[900px] md:w-[450px]  ">
            {" "}
          </div>
        </Reveal>
        <Reveal>
          <div className="s mb-9 h-[211px] w-[242px] bg-primary-color sm:h-[560px] sm:w-[625px] md:w-[350px]  ">
            {" "}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

Testimonials.propTypes = {
  Reveal: PropTypes.func.isRequired,
}