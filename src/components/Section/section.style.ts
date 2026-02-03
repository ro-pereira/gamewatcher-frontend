import { flexColumnAlignItemsCenter } from "@/src/Theme/util/layout.flex";

export const sectionStyle = {
  position: "relative",
  minHeight: "100vh",
  zIndex: 0,
  ...flexColumnAlignItemsCenter,
  padding: "2rem 4rem 12rem 4rem",
  gap: "4rem",
  width: "100%",
  minWidth: "42rem",
};
