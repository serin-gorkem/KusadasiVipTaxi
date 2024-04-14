import Facts from "../components/Facts";
import FactAnim01 from "../assets/ThumbsUp.json";
import FactAnim02 from "../assets/TaxiMan.json";
import FactAnim03 from "../assets/Price.json";
import PropTypes from "prop-types";

export default function ChooseUs({Reveal,language}) {
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
  return (
    <>
      <div className="relative overflow-hidden ">
        <div className="absolute h-[100%] w-full bg-[url('https://images.unsplash.com/photo-1514041181368-bca62cceffcd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center bg-no-repeat "></div>
        <div className="absolute h-[100%] w-full bg-gradient-to-b from-transparent to-black  "></div>
        <div
          className="max-container top-0 flex w-full flex-col items-start p-6 text-white"
        >
        <Reveal>
          <h1 className="relative text-xl sm:text-2xl">
          {language("choose_us.heading")}
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="relative text-lg font-bold sm:text-5xl ">
          {language("choose_us.sub_heading")}   
          </h2>
        </Reveal>
          {animations.map((animation) => {
            return (
              <Reveal key={animation.id} >
                <Facts factAnimation={animation.source} title={language(`choose_us.facts.${animation.id}.title`)} description={language(`choose_us.facts.${animation.id}.description`)} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </>
  );
}
ChooseUs.propTypes = {
  Reveal: PropTypes.func.isRequired,
  language: PropTypes.func.isRequired,
}