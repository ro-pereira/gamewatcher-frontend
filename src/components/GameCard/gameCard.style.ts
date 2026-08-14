import { flexColumnCenter, flexRowCenter } from "@/src/Theme/core/layout.flex";
import { SxProps, Theme } from "@mui/material";

export const cardSx: SxProps<Theme> = {
  width: "30rem",
  height: "100%",
  "&:hover": {
    backgroundColor: "action.selectedHover",
  },
};

export const cardContentSx: SxProps<Theme> = {
  height: "100%",
  width: "80%",
  display: "flex",
  flexDirection: "column",
};

export const cardTitle: SxProps<Theme> = {
  width: "100%",
  height: "15%",
  borderBottom: `1px solid primary.main`,
  ...flexColumnCenter,
};

export const cardTeamName: SxProps<Theme> = {
  height: "40%",
  borderBottom: `1px solid primary.main`,
  ...flexRowCenter,
};

export const cardChannels: SxProps<Theme> = {
  direction: "row",
  flexWrap: "wrap",
  gap: 1,
  alignItems: "center",
  overflowX: "auto",
  overflowY: "hidden",
  // flexWrap: "nowrap",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
  padding: 2,
};

export const cardGameHour: SxProps<Theme> = {
  ...flexRowCenter,
  width: "100%",
  padding: 2,
  height: "20%",
};

export const cardChipsStack: SxProps<Theme> = {
  color: "primary.constext",
  padding: "4px",
  fontSize: "typography.body2",
};
