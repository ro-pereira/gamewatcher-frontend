"use client";

import { TGames } from "@/src/Theme/type";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
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

const url = "http://localhost:3001";
const today = new Date();

export const Main = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [gamesResult, setGamesResult] = useState<TGames[]>([]);
  type GamesByDay = {
    day: string;
    games: TGames[];
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataGames = async () => {
      try {
        const result = await fetch(`${url}/allMatchs`);
        const responseData: TGames[] = await result.json();

        setGamesResult(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataGames();
  }, []);

  useEffect(() => {
    if (!selectedDay) {
      setSelectedDay(week_day[today.getDay()]);
    }
  }, [selectedDay]);

  const gameInThisWeek = useMemo<GamesByDay[]>(() => {
    return gamesResult
      .filter((game) => new Date(game.date) >= today)
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
  }, [gamesResult]);

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
            <Box key={index}>
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
