import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export const ArrowDown = ({
  heroRef,
}: {
  heroRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(arrowRef.current, {
      y: -20,
      duration: 0.8,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    ScrollTrigger.create({
      trigger: heroRef.current,
      scroller: "#smooth-wrapper",
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        if (self.scroll() > 10) {
           gsap.to(arrowRef.current, { opacity: 0, duration: 0.45 });
        } else {
          gsap.to(arrowRef.current, { opacity: 1, duration: 0.45 });
        }
      },
    });
  }, [heroRef]);

  return (
    <div ref={arrowRef} style={{ pointerEvents: "none", opacity: 1 }}>
      <Image src="/arrow-down.png" height={50} width={60} alt="Arrow down" />
    </div>
  );
};
