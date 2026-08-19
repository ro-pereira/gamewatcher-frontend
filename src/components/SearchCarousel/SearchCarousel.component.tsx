import { Box, IconButton } from "@mui/material";
// import { outerContainerSx, searchResulCardSx } from "../Hero/hero.style";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { gsap } from "gsap";
import { outerContainerSx, searchResulCardSx } from "./searchCarousel.style";

type TSearchCarouselProps = {
  children: ReactNode;
};

export const SearchCarousel = ({ children }: TSearchCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setIsAtStart(scrollLeft <= 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const amount = container.clientWidth * 0.8;
    const newPosition =
      direction === "left"
        ? container.scrollLeft - amount
        : container.scrollLeft + amount;

    gsap.to(container, {
      scrollLeft: newPosition,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.children;

gsap.fromTo(
  cards,
  {
    opacity: 0,
    y: 40,
    scale: 0.92,
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.7,
    stagger: 0.1,
    ease: "power3.out",
  },
);
  }, [children]);

  useEffect(() => {
    checkScrollPosition();
  }, []);

  return (
    <Box sx={outerContainerSx}>
      <IconButton
        onClick={() => scroll("left")}
        disabled={isAtStart}
        sx={{
          position: "absolute",
          left: 2,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 99999,

          width: 40,
          height: 40,
          pointerEvents: "auto",

          bgcolor: "#000000f2",
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box
        ref={scrollRef}
        onScroll={checkScrollPosition}
        sx={searchResulCardSx}
      >
        {children}
      </Box>
      <IconButton
        onClick={() => scroll("right")}
        disabled={isAtEnd}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 99999,
          width: 40,
          height: 40,
          borderRadius: "50%",
          bgcolor: "rgba(0, 0, 0, 0.95)",
          pointerEvents: "auto",
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};
