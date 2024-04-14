import { motion, useAnimation, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function Reveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className=" relative w-fit overflow-hidden ">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 350 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          right: 0,
          bottom: 4,
          left: 0,
          background: "#fec803",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
}
Reveal.propTypes = {
  children: PropTypes.node.isRequired,
};
