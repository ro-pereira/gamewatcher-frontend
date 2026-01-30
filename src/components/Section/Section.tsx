import { Box } from "@mui/material";
import { ChampionshipsTable } from "../ChampionshipsTable/ChampionshipsTable.component";
import { sectionStyle } from "./section.style";
import { useEffect, useState } from "react";
import { TGames } from "@/src/Theme/type";

export const Section = () => {
  const url = "http://localhost:3001";
  const [gamesResult, setGamesResult] = useState<TGames[]>([]);
  const [games, setGames] = useState<TGames[]>([]);
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
    const today = new Date();
    const gameFiltered = gamesResult.filter((game: TGames) => {
      return new Date(game.date) >= today;
    });
    const sortByDateGames: TGames[] = [...gameFiltered].sort(
      (a: TGames, b: TGames): number => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();

        return dateA - dateB;
      },
    );

    setGames(sortByDateGames);
  }, [gamesResult]);

  return (
    <Box flexDirection="column" display="flex" sx={sectionStyle}>
      <ChampionshipsTable games={games} />
    </Box>
  );
};
