import { useRef } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function Testimonials() {
  const scroolRef = useRef(null);

  const handleClick = () => {
    scroolRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="flex h-[217px] w-full  flex-col items-center justify-center bg-neutral-dark text-center text-neutral sm:h-[500px] shadow-[0px_13px_7.7px_0px_rgba(0,0,0,0.25)] ">
        <h1 className="mb-[10px] text-[32px] font-bold sm:mb-[20px] sm:text-[48px] ">
          About Us
        </h1>
        <h2 className="mb-[20px] max-w-[600px] text-[16px] font-medium sm:mb-[40px] sm:text-[24px] ">
          Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
          ullamcorper dignissim.
        </h2>
        <p className=" mb-[10px] text-[12px] font-light sm:mb-[20px] sm:text-[16px] ">
          Read More
        </p>
        <IoIosArrowRoundDown
          className=" h-6 w-6 animate-bounce cursor-pointer text-primary-color sm:h-14 sm:w-14 "
          onClick={handleClick}
        />
      </div>
      <div className="flex w-full p-4 max-sm:flex-col py-8 sm:py-20 sm:gap-8 max-w-[1440px] m-auto " ref={scroolRef}>
        <img
          src="https://images.unsplash.com/photo-1613559446734-0a005faa40ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          className=" h-52 w-96 object-cover xl:h-[376px] lg:h-[356px] lg:w-[436px] xl:w-[466px] rounded-md shadow-[5px_6px_20px_3px_rgba(0,0,0,0.25)]"
        />
        <div>
          <h3 className=" mt-[10px] text-3xl font-bold lg:m-0 xl:text-4xl lg:text-3xl ">
            KusadasiVipTaxi
          </h3>
          <div className=" mb-[7.5px] mt-[5px] h-[1px] w-full bg-neutral-dark lg:mb-[40px] lg:mt-[20px]"></div>
          <p className=" text-sm font-light  lg:text-2xl xl:text-3xl">
            Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
            ullamcorper dignissim.Habitasse platea dictumst vestibulum rhoncus
            est pellentesque elit ullamcorper dignissim.
          </p>
        </div>
      </div>
    </>
  );
}
