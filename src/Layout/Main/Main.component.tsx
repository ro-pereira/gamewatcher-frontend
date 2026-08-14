"use client";

import { TMainProps } from "@/src/Types/type";
import { Box, CircularProgress } from "@mui/material";
import { useMemo, useState } from "react";
import { mainContainerSx } from "./main.style";
import { GameTable } from "@/src/components/GameTable/GameTable.component";
import { week_day } from "@/src/utils/variables";
import useGameInThisWeek from "@/src/hooks/useGameInThisWeek";
import { WeekDayButtons } from "@/src/components/WeekDayButtons/WeekDayButtons.component";

const today = new Date();

export const Main = ({ upcomingGamesList, isLoading }: TMainProps) => {
  const [selectedDay, setSelectedDay] = useState<string>(
    week_day[today.getDay()],
  );

  const gamesInThisWeek = useGameInThisWeek(upcomingGamesList);

  const selectedDayGames = useMemo(() => {
    return gamesInThisWeek.find((g) => g.day === selectedDay);
  }, [gamesInThisWeek, selectedDay]);

  const noGamesThisWeek = gamesInThisWeek.length === 0;

  return (
    <Box sx={mainContainerSx}>
      <WeekDayButtons
        gamesInThisWeek={gamesInThisWeek}
        noGamesThisWeek={noGamesThisWeek}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      {isLoading ? (
        <CircularProgress aria-label="Loading…" size={40} />
      ) : (
        <GameTable
          noGamesThisWeek={noGamesThisWeek}
          selectedDayGames={selectedDayGames}
        />
      )}
    </Box>
  );
};
