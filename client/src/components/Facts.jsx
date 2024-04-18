import PropTypes from "prop-types";
import { memo } from "react";
const Facts = memo(function Facts(props) {
  return (
    <div className="relative mt-6 flex h-52 w-full cursor-pointer items-center justify-start gap-4 p-4 hover:border-l-4 hover:border-white hover:bg-primary-color sm:h-44 ">
      <div className="aspect-square w-20 sm:w-36 "></div>
      <div className="flex w-48 flex-col sm:w-full">
        <h3 className="sm:text-2xl"> {props.title} </h3>
        <p className=" text-xs sm:text-lg ">{props.description}</p>
      </div>
    </div>
  );
});

Facts.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Facts;
