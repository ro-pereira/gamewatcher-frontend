import { TGames } from "@/src/Theme/type";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { ChampionshipsTable } from "../ChampionshipsTable/ChampionshipsTable.component";
import {
  cellSx,
  tableContainerSx,
} from "../ChampionshipsTable/championshipTable.style";
import { sectionStyle } from "./section.style";

interface TSection {
  changeInput: string;
}

const WEEK_DAYS = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
] as const;

type Weekday = (typeof WEEK_DAYS)[number];

// type GamesByDate = Record<string, TGames[]>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Section = ({ changeInput }: TSection) => {
  const url = "http://localhost:3001";
  const [gamesResult, setGamesResult] = useState<TGames[]>([]);
  // // const [games, setGames] = useState<TGames[]>([]);
  // const [gamesByDate, setGamesByDate] = useState<GamesByDate>({});

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

  const [weekIndex, setWeekIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState<Weekday | null>(null);

  //   const gamesByWeekday = useMemo(() => {
  //   const filtered = gamesResult.filter(
  //     (game: TGames) => new Date(game.date) >= today
  //   );

  //   const result = filtered.reduce((acc, game) => {
  //     const weekday = new Intl.DateTimeFormat("pt-BR", {
  //       weekday: "long",
  //     }).format(new Date(game.date));

  //     let day = acc.find((d) => d.weekday === weekday);

  //     if (!day) {
  //       day = {
  //         weekday,
  //         games: [],
  //       };
  //       acc.push(day);
  //     }

  //     day.games.push(game);
  //     return acc;
  //   }, [] as { weekday: string; games: TGames[] }[]);

  //   return result;
  // }, [gamesResult]);

  const getStartOfWeek = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay(); // domingo = 0
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
  };



  const weeks = useMemo(() => {
    const today = new Date();

    const filtered = gamesResult.filter(
      (game: TGames) => new Date(game.date) >= today,
    );

    const map = new Map<string, Record<Weekday, TGames[]>>();

    filtered.forEach((game) => {
      const date = new Date(game.date);
      const weekStart = getStartOfWeek(date).toISOString().split("T")[0];

      if (!map.has(weekStart)) {
        map.set(weekStart, {
          domingo: [],
          segunda: [],
          terça: [],
          quarta: [],
          quinta: [],
          sexta: [],
          sábado: [],
        });
      }

      const weekday = WEEK_DAYS[date.getDay()];
      map.get(weekStart)![weekday].push(game);
    });

    return Array.from(map.entries()).map(([weekStart, days]) => ({
      weekStart,
      days,
    }));
  }, [gamesResult]);


 useEffect(() => {
  const currentWeek = weeks[weekIndex];
  if (!currentWeek) return;

  if (selectedDay && currentWeek.days[selectedDay]?.length > 0) return;

  const firstAvailableDay = WEEK_DAYS.find(
    (day) => currentWeek.days[day]?.length > 0
  );

  setSelectedDay(firstAvailableDay ?? null);
}, [weeks, weekIndex, selectedDay]);
  return (
    <Box flexDirection="column" display="flex" sx={sectionStyle}>
      <Box display="flex" gap={1}>
        {WEEK_DAYS.map((day) => {
          const hasGames = weeks[weekIndex]?.days[day]?.length > 0;

          return (
            <Button
              key={day}
              variant={selectedDay === day ? "contained" : "outlined"}
              disabled={!hasGames}
              onClick={() => setSelectedDay(day)}
              sx={{ textTransform: "capitalize" }}
            >
              {day}
            </Button>
          );
        })}
      </Box>

      <Box>
        <TableContainer component={Paper} sx={tableContainerSx}>
          <Table aria-label="caption table">
            <TableHead>
              <TableRow sx={{ height: "8rem" }}>
                <TableCell align="center" sx={cellSx}>
                  Partida
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  Dia
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  Assista em:
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <CircularProgress enableTrackSlot size="3rem" />
              ) : (
                selectedDay &&
                weeks[weekIndex]?.days[selectedDay].map((game) => (
                  <>
                    <ChampionshipsTable game={game} />
                  </>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
