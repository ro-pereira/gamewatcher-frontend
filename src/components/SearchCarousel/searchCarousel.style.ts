
export const outerContainerSx = {
  width: "100%",
  height: "18vh",
  minHeight: "34rem",
  borderRadius: "1rem",
  backgroundColor: "rgba(255, 255, 255, 0.14)", 
  position: "relative",
  p: 1,
  overflow: "hidden",
};


export const searchResulCardSx = {
  zIndex: 99,
  position: "relative",
  width: "100%",
  pointerEvents: "auto",
  display: "flex",
  gap: 1,
  height: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  flexWrap: "nowrap",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",     
  msOverflowStyle: "none",    
  "&::-webkit-scrollbar": {
    display: "none", 
  },

  "& > *": {
    scrollSnapAlign: "start",
     flexShrink: 0,   
  },
};

