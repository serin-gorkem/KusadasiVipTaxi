import PropTypes from "prop-types";
import Lottie from "lottie-react";
export default function Facts(props) {
  return (
    <div className="relative mt-6 flex items-center justify-start sm:h-44 h-52 cursor-pointer w-full gap-4 p-4 hover:border-l-4 hover:border-white hover:bg-primary-color ">
      <div className="w-20 aspect-square sm:w-36 ">
      <Lottie
        animationData={props.factAnimation} autoplay={true} loop={true}
        className="rounded-full w-full h-full"
      />
      </div>
      <div className="flex flex-col w-48 sm:w-full">
        <h3 className="sm:text-2xl" > {props.title} </h3>
        <p className=" text-xs sm:text-lg ">
        {props.description}
        </p>
      </div>
    </div>
  );
}

Facts.propTypes = {
  factAnimation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
