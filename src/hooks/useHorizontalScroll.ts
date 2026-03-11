import { RefObject, useEffect } from "react";

const useHorizontalScroll = (
  containerRef: RefObject<HTMLDivElement | null>,
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    gsap.to(el, {
      x: () => -(el.scrollWidth - el.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: () => `+=${el.scrollWidth}`,
        scrub: true,
        pin: true,
      },
    });
  }, [containerRef]);
};

export default useHorizontalScroll;
