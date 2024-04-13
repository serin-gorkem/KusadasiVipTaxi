export default function Testimonials() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className=" -z-10 flex h-[217px] w-full  flex-col items-center justify-center bg-neutral-dark text-center text-neutral shadow-[0px_13px_7.7px_0px_rgba(0,0,0,0.25)] sm:h-[355px] ">
        <h1 className=" text-[32px] font-bold sm:text-[48px] ">Testimonials</h1>
      </div>
      <div className="relative  flex flex-col justify-center -top-16 lg:flex-row items-start gap-7 max-container">
        <div className="h-[239px] w-[300px] sm:w-[900px] sm:h-[560px] md:w-[450px] bg-primary-color sm:mb-9  "> </div>
        <div className="h-[211px] w-[242px] sm:w-[625px] sm:h-[560px] md:w-[350px] bg-primary-color mb-9 s  "> </div>
      </div>
    </div>
  );
}
