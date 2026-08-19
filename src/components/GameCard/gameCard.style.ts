"use Client";
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
  gap: 1,
};

export const cardTitle: SxProps<Theme> = {
  width: "100%",
  height: "15%",
  borderBottom: `1px solid primary.main`,
  ...flexColumnCenter,
};

export const cardTeamName: SxProps<Theme> = {
  padding: "0 0 1rem",
  ...flexRowCenter,
};

export const cardChannels: SxProps<Theme> = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 1,
  alignItems: "center",
  overflowX: "auto",
  overflowY: "hidden",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
  padding: 1,
};

export const cardGameHour: SxProps<Theme> = {
  ...flexRowCenter,
  width: "100%",
  padding: 2,
  height: "20%",
};

export const cardChipsStack: SxProps<Theme> = (theme) => ({
  ...theme.typography.body2,
  color: theme.palette.primary.contrastText,
  padding: "4px",
});
