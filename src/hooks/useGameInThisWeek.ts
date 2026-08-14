import { useMemo } from "react";
import { Games, GamesByDay } from "../Types/type";
import { week_day } from "../utils/variables";

const useGamesInThisWeek = (
  upcomingGamesList: Games[]
): GamesByDay[] => {
  const gamesInThisWeek = useMemo<GamesByDay[]>(() => {
    const today = new Date();

    const todayIndex = today.getDay();

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - todayIndex);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    return upcomingGamesList
      .filter((game) => {
        const gameDate = new Date(game.date);

        return gameDate >= startOfWeek && gameDate <= endOfWeek;
      })
      .reduce<GamesByDay[]>((acc, game) => {
        const gameDate = new Date(game.date);
        const day = week_day[gameDate.getDay()];

        const existingDay = acc.find(
          (item) => item.day === day
        );

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

  return gamesInThisWeek;
};

export default useGamesInThisWeek;
