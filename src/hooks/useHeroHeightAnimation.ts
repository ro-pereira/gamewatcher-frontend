import { RefObject, useEffect } from "react";
import { gsap } from "gsap";

type TContainerSize = {
  height: string;
  minHeight: string;
};

const useHeroHeightAnimation = (
  heroRef: RefObject<HTMLDivElement | null>,
  hasSearch: boolean,
  showNoResults: boolean,
  heroTitleContainer: TContainerSize,
  searchContainer: TContainerSize,
) => {
  useEffect(() => {
    if (!heroRef.current) return;

    let height: string;
    let minHeight: string;

    if (hasSearch) {
      height = `calc(
        ${heroTitleContainer.height} +
        ${searchContainer.height} +
        18vh
      )`;

      minHeight = `calc(
        ${heroTitleContainer.minHeight} +
        ${searchContainer.minHeight} +
        35rem
      )`;
    } else if (showNoResults) {
      height = `calc(
        ${heroTitleContainer.height} +
        ${searchContainer.height} +
        14rem
      )`;

      minHeight = `calc(
        ${heroTitleContainer.minHeight} +
        ${searchContainer.minHeight} +
        14rem
      )`;
    } else {
      height = `calc(
        ${heroTitleContainer.height} +
        ${searchContainer.height}
      )`;

      minHeight = `calc(
        ${heroTitleContainer.minHeight} +
        ${searchContainer.minHeight}
      )`;
    }

    gsap.to(heroRef.current, {
      height,
      minHeight,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [
    hasSearch,
    showNoResults,
    heroRef,
    heroTitleContainer,
    searchContainer,
  ]);
};

export default useHeroHeightAnimation;
