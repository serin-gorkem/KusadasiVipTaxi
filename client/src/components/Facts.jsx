import PropTypes from "prop-types";
import { lazy, memo } from "react";
const Facts = memo(function Facts({ title, svg, description }) {
  return (
    <div className="relative mt-6 flex h-52 w-full cursor-pointer items-center justify-start gap-4 p-4 hover:border-l-4 hover:border-white hover:bg-primary-color sm:h-44 ">
      <div className="aspect-square w-20 sm:w-36 ">{svg}</div>
      <div className="flex w-48 flex-col sm:w-full">
        <h3 className="sm:text-2xl"> {title} </h3>
        <p className=" text-xs sm:text-lg ">{description}</p>
      </div>
    </div>
  );
});

Facts.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  SlideIn: PropTypes.object.isRequired,
  svg: PropTypes.element.isRequired,
};

export default Facts;
