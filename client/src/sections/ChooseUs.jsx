import { useI18n } from "../i18nContext";
import { lazy, memo } from "react";
import PropTypes from "prop-types";

const Facts = lazy(() => import("../components/Facts"));

const animations = [

];
const ChooseUs = memo(function ChooseUs({ SlideIn }) {
  const i18nData = useI18n();
  return (
    <>
      <div className="relative overflow-hidden ">
        <div className="absolute h-[100%] w-full bg-[url('https://images.unsplash.com/photo-1514041181368-bca62cceffcd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center bg-no-repeat "></div>
        <div className="absolute h-[100%] w-full bg-gradient-to-b from-transparent to-black  "></div>
        <div className="max-container top-0 flex w-full flex-col items-start gap-2 p-6 text-white">
            <h1 className="relative text-2xl font-bold sm:text-2xl">
              {i18nData("choose_us.heading")}
            </h1>
          
          
            <h2 className="relative text-lg font-light sm:text-5xl ">
              {i18nData("choose_us.sub_heading")}
            </h2>
          
          {animations.map((animation) => {
            return (
              <Facts
                key={animation.id}
                factAnimation={animation.source}
                title={i18nData(`choose_us.facts.${animation.id}.title`)}
                description={i18nData(
                  `choose_us.facts.${animation.id}.description`,
                )}
                SlideIn={SlideIn}
              />
            );
          })}
        </div>
      </div>
    </>
  );
});

export default ChooseUs;
ChooseUs.propTypes = {
  SlideIn: PropTypes.object.isRequired,
};