import { TGames } from "@/src/Theme/type";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { ChampionshipsTable } from "../ChampionshipsTable/ChampionshipsTable.component";
import { sectionStyle } from "./section.style";

interface TSection {
  changeInput: string;
}
export const Section = ({ changeInput }: TSection) => {
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

    const filterInput = sortByDateGames.filter((game: TGames) => {
      return (
        game.team_1_name.toLowerCase().includes(changeInput.toLowerCase()) ||
        game.team_2_name.toLowerCase().includes(changeInput.toLowerCase())
      );
    });
    setGames(filterInput);
  }, [changeInput, gamesResult]);

  return (
    <Box flexDirection="column" display="flex" sx={sectionStyle}>
      {isLoading ? (
        <CircularProgress enableTrackSlot size="3rem" />
      ) : (
        <ChampionshipsTable games={games} title={"Próximos jogos"} />
       )} 
    </Box>
  );
};
