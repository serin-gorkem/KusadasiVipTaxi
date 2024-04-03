import PropTypes from "prop-types";

export default function Facts(props) {
  return (
    <div className="relative mt-6 flex items-center justify-start sm:h-44 h-52 cursor-pointer w-full gap-4 p-4 hover:border-l-4 hover:border-white hover:bg-highlight-color ">
      <div className="w-20 aspect-square sm:w-36 ">
        <img
          src={props.url}
          className="rounded-full w-full h-full bg-black object-cover"
          alt={props.alt}
        ></img>
      </div>
      <div className="flex flex-col w-48 sm:w-full">
        <h3 className="sm:text-2xl" >En iyisini sunuyoruz</h3>
        <p className=" text-xs sm:text-lg ">
          Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
          ullamcorper dignissim. Condimentum id venenatis a condimentum viet.
        </p>
      </div>
    </div>
  );
}

Facts.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
