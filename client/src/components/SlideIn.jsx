import PropTypes from "prop-types";
import { memo, useRef } from "react";

const SlideIn = memo(function SlideIn() {
  const ref = useRef(null);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden ">
    </div>
  );
});
SlideIn.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SlideIn;