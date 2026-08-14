"use client"

import { Box, Button, Typography } from "@mui/material";
import { week_day } from "@/src/utils/variables";
import { GamesByDay, TWeekDayButtons } from "@/src/Types/type";
import {
  paginationButtonBoxSx,
  paginationButtonSx,
} from "./weekDayButtons.style";

const today = new Date();

export const WeekDayButtons = ({
  gamesInThisWeek,
  noGamesThisWeek,
  selectedDay,
  setSelectedDay,
}: TWeekDayButtons) => {

  const handleDisableButtonWeek = (day: string, index: number): boolean => {
    const isToday = index === today.getDay();
    const daysEnable = gamesInThisWeek.some((group: GamesByDay) => {
      return group.day === day || isToday;
    });
    const isPastDay = index < today.getDay();
    const isDisabled = isPastDay || noGamesThisWeek || !daysEnable;

    return isDisabled;
  };
  
  return (
    <Box sx={paginationButtonBoxSx}>
      {week_day.map((day: string, index: number) => {
        const isDisabled = handleDisableButtonWeek(day, index);
        return (
          <Button
            key={day}
            sx={paginationButtonSx}
            disabled={isDisabled}
            variant={selectedDay === day ? "contained" : "outlined"}
            onClick={() => setSelectedDay(day)}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.2rem",
              }}
            >
              <Box
                component="span"
                sx={{ display: { xs: "inline", sm: "none" } }}
              >
                {day.charAt(0)}
              </Box>

              <Box
                component="span"
                sx={{ display: { xs: "none", sm: "inline" } }}
              >
                {day}
              </Box>
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
};
