import {
  m,
  LazyMotion,
  domAnimation,
  useAnimation,
  useInView,
} from "framer-motion";
import PropTypes from "prop-types";
import { memo, useEffect, useRef } from "react";

const SlideIn = memo(function SlideIn({ children }) {
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
    <div ref={ref} className="relative w-fit overflow-hidden ">
      <LazyMotion features={domAnimation} strict>
        <m.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          {children}
        </m.div>
      </LazyMotion>
      <LazyMotion features={domAnimation} strict>
        <m.div
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
        ></m.div>
      </LazyMotion>
    </div>
  );
});
SlideIn.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SlideIn;