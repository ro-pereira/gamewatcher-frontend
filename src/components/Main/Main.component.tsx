"use client";

import { GamesByDay, TMainProps } from "@/src/Theme/type";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { ChampionshipsTable } from "../ChampionshipsTable/ChampionshipsTable.component";
import {
  mainContainerSx,
  paginationButtonBoxSx,
  paginationButtonSx,
  tableSx,
} from "./main.style";

const week_day = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
] as const;

const today = new Date();

export const Main = ({ upcomingGamesList, isLoading }: TMainProps) => {
  const [selectedDay, setSelectedDay] = useState<string>(
    week_day[today.getDay()],
  );
;
  const gameInThisWeek = useMemo<GamesByDay[]>(() => {
    return upcomingGamesList
      .filter((game) => {
        const gameDate = new Date(game.date);
        const gameDayIndex = gameDate.getDay();
        return gameDayIndex >= today.getDay() && gameDayIndex <= 6;
      })
      .reduce<GamesByDay[]>((acc, game) => {
        const day = week_day[new Date(game.date).getDay()];

        const existingDay = acc.find((d) => d.day === day);

        if (existingDay) {
          existingDay.games.push(game);
        } else {
          acc.push({
            day,
            games: [game],
          });
        }
        return acc;
      }, []);
  }, [upcomingGamesList]);

  console.log("game this week", gameInThisWeek);
  

  return (
    <Box sx={mainContainerSx}>
      <Box sx={paginationButtonBoxSx}>
        {week_day.map((day: string) => {
          const hasGame = gameInThisWeek.filter((g: GamesByDay) => {
            return g.day === day;
          });

          return (
            <Button
              key={day}
              sx={paginationButtonSx}
              disabled={hasGame.length <= 0}
              variant={selectedDay === day ? "contained" : "outlined"}
              onClick={() => setSelectedDay(day)}
            >
              <Typography variant="body2">{day}</Typography>
            </Button>
          );
        })}
      </Box>

      <Box sx={tableSx}>
        {gameInThisWeek.map((group, index) => {
          if (group.day !== selectedDay) return null;

          return (
            <Box key={index} width={"100%"}>
              {isLoading ? (
                <CircularProgress enableTrackSlot size="3rem" />
              ) : (
                group.games.map((game, index) => (
                  <ChampionshipsTable key={index} game={game} />
                ))
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
