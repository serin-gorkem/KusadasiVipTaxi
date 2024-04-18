import Facts from "../components/Facts";
import FactAnim01 from "../animations/ThumbsUp.json";
import FactAnim02 from "../animations/TaxiMan.json";
import FactAnim03 from "../animations/Price.json";
import { useI18n } from "../i18nContext";
import { memo } from "react";
const animations = [
  {
    id: "0",
    source: FactAnim01,
  },
  {
    id: "1",
    source: FactAnim02,
  },
  {
    id: "2",
    source: FactAnim03,
  },
];
const ChooseUs = memo(function ChooseUs() {
  const i18nData = useI18n();
  return (
    <>
      <div className="relative overflow-hidden ">
        <div className="absolute h-[100%] w-full bg-[url('https://images.unsplash.com/photo-1514041181368-bca62cceffcd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center bg-no-repeat "></div>
        <div className="absolute h-[100%] w-full bg-gradient-to-b from-transparent to-black  "></div>
        <div className="max-container top-0 flex w-full flex-col items-start p-6 text-white">
          <h1 className="relative text-xl sm:text-2xl">
            {i18nData("choose_us.heading")}
          </h1>
          <h2 className="relative text-lg font-bold sm:text-5xl ">
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
              />
            );
          })}
        </div>
      </div>
    </>
  );
});

export default ChooseUs;
