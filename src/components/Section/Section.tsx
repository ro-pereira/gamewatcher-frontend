import { Box } from "@mui/material";
import { ChampionshipsTable } from "../ChampionshipsTable/ChampionshipsTable.component";
import { sectionStyle } from "./section.style";
import { useEffect, useState } from "react";
import { TGames } from "@/src/Theme/type";

export const Section = () => {
  const url = "http://localhost:3001";
  const [games, setGames] = useState<TGames[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // const games: TGames[];
  useEffect(() => {
    const fetchDataGames = async () => {
      try {
        const res = await fetch(`${url}/allMatchs`);
        const data: TGames[] = await res.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataGames();
  }, []);

  console.log(isLoading, "isLoading");
  return (
    <Box flexDirection="column" display="flex" sx={sectionStyle}>
      <ChampionshipsTable games={games} />
    </Box>
  );
};
