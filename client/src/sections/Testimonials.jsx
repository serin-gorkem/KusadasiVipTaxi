import { memo } from "react";
import { useI18n } from "../i18nContext";
import PropTypes from "prop-types";

const Testimonials = memo(function Testimonials({ SlideIn }) {
  const i18nData = useI18n();

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className=" -z-10 flex h-[217px] w-full  flex-col items-center justify-center bg-neutral-dark text-center text-neutral shadow-[0px_13px_7.7px_0px_rgba(0,0,0,0.25)] sm:h-[355px] ">
        <SlideIn>
          <h1 className=" text-[32px] font-bold sm:text-[48px] ">
            {i18nData("testimonials.title")}
          </h1>
        </SlideIn>
      </div>
      <div className="gap-30 flex h-fit w-full flex-col items-center justify-evenly sm:flex-row sm:items-start">
        <SlideIn>
          <div className="my-16">
            <div id="TA_selfserveprop588">
              <ul id="NIufKgr4l">
                <li id="TXBeDTTjuXu5">
                  <a
                    target="_blank"
                    aria-label="tripadvisor reviews link"
                    href="https://www.tripadvisor.com/Attraction_Review-g297972-d27674314-Reviews-Kusadasi_Vip_Taxi-Kusadasi_Turkish_Aegean_Coast.html"
                  >
                    <img
                      src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                      alt="TripAdvisor"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SlideIn>
        <SlideIn>
          <div className="my-16">
            <div id="TA_cdswritereviewlg719" className="TA_cdswritereviewlg">
              <ul id="4G2407p6KWG" className="TA_links 3d3paC">
                <li id="yceokv5c5x9o" className="4knrAJgf">
                  <a
                    target="_blank"
                    aria-label="tripadvisor add review link"
                    href="https://www.tripadvisor.com/Attraction_Review-g297972-d27674314-Reviews-Kusadasi_Vip_Taxi-Kusadasi_Turkish_Aegean_Coast.html"
                  >
                    <img
                      src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                      alt="TripAdvisor"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
});

export default Testimonials;
Testimonials.propTypes = {
  SlideIn: PropTypes.object.isRequired,
};