import { memo } from "react";
import PropTypes from "prop-types";

const Place = memo(function Place({ title, id, changeLocation }) {
  return (
    <div
      className="flex h-8 w-24 cursor-pointer items-center justify-center rounded-lg bg-base p-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-primary-color active:bg-primary-color md:col-span-2 md:h-12 md:w-32 lg:w-36"
      onClick={() => changeLocation(id)}
    >
      <p className=" text-center text-[13px] text-neutral-dark lg:text-[18px]">
        {title}
      </p>
    </div>
  );
});
Place.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  changeLocation: PropTypes.func.isRequired,
};
export default Place;
