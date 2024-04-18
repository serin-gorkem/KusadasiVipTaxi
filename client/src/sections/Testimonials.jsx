import { memo } from "react";
import { useI18n } from "../i18nContext";
const Testimonials = memo (function Testimonials() {
  const i18nData = useI18n();
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className=" -z-10 flex h-[217px] w-full  flex-col items-center justify-center bg-neutral-dark text-center text-neutral shadow-[0px_13px_7.7px_0px_rgba(0,0,0,0.25)] sm:h-[355px] ">
          <h1 className=" text-[32px] font-bold sm:text-[48px] ">
            {i18nData("testimonials.title")}
          </h1>
      </div>
      <div className="max-container  relative -top-16 flex flex-col items-start justify-center gap-7 lg:flex-row">
      </div>
    </div>
  );
});

export default Testimonials