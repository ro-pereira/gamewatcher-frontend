import { RefObject, useEffect } from "react";
import { gsap } from "gsap";

type TContainerSize = {
  height: string;
  minHeight: string;
};

const useHeroHeightAnimation = (
  heroRef: RefObject<HTMLDivElement | null>,
  hasSearch: boolean,
  heroTitleContainer: TContainerSize,
  searchContainer: TContainerSize,
) => {
  useEffect(() => {
    if (!heroRef) return;

    gsap.to(heroRef.current, {
      height: hasSearch
        ? `calc(${heroTitleContainer.height} + ${searchContainer.height} + 16vh)`
        : `calc(${heroTitleContainer.height} + ${searchContainer.height})`,
      minHeight: hasSearch
        ? `calc(${heroTitleContainer.minHeight} + ${searchContainer.minHeight} + 30rem)`
        : `calc(${heroTitleContainer.minHeight} + ${searchContainer.minHeight})`,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [hasSearch, heroRef, heroTitleContainer, searchContainer]);
};
export default useHeroHeightAnimation;
