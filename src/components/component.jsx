import React from "react";
import { useInView } from "react-intersection-observer";

const Component = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log(ref);

  return (
    <div ref={ref}>
      <h2 className="text-white">{`Header inside viewport ${inView}.`}</h2>
    </div>
  );
};

export default Component;
