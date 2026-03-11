"use client";

import { Box, OutlinedInput } from "@mui/material";
import { Dispatch, SetStateAction, useRef } from "react";
import { inputBoxSx } from "./header.style";

interface IHeader {
  setChangeInput: Dispatch<SetStateAction<string>>;
  changeInput: string;
}

export const Header = ({ setChangeInput, changeInput }: IHeader) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Box ref={headerRef} >
      <Box ref={inputBoxRef} sx={inputBoxSx}>
        <OutlinedInput
          sx={{ width: "100%" }}
          placeholder="Digite o nome do time de futebol..."
          value={changeInput}
          onChange={(e) => setChangeInput(e.target.value)}
        />
      </Box>
    </Box>
  );
};



// import { TGames } from "@/src/Theme/type";
// import { Box, CircularProgress } from "@mui/material";
// import { useEffect, useMemo, useState } from "react";
// import { ChampionshipsTable } from "../ChampionshipsTable/ChampionshipsTable.component";
// import { sectionStyle } from "./section.style";

// interface TSection {
//   changeInput: string;
// }

// type GamesByDate = Record<string, TGames[]>;

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const Section = ({ changeInput }: TSection) => {
//   const url = "http://localhost:3001";
//   const [gamesResult, setGamesResult] = useState<TGames[]>([]);
//   // const [games, setGames] = useState<TGames[]>([]);
//   const [gamesByDate, setGamesByDate] = useState<GamesByDate>({});

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchDataGames = async () => {
//       try {
//         const result = await fetch(`${url}/allMatchs`);
//         const responseData: TGames[] = await result.json();

//         setGamesResult(responseData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchDataGames();
//   }, []);

//   const gamesByWeekday = useMemo(() => {
//     const today = new Date();
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


// console.log(gamesByWeekday, "AQUI");

//   // useEffect(() => {
//   //   if (!gamesResult.length) return;
//   //   const grouped = gamesResult.reduce((acc: GamesByDate, game) => {
//   //     const d = game.date;
//   //     const day = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

//   //     acc[day] ??= [];
//   //     acc[day].push(game);

//   //     return acc;
//   //   }, {} as GamesByDate);

//   //   setGamesByDate(grouped);
//   // }, [gamesResult]);
//   // useEffect(() => {
//   //   console.log(gamesByDate, "++++++++++");
//   // }, [gamesByDate]);
//   // // useEffect(() => {
//   //   const today = new Date();
//   //   const gameFiltered = gamesResult.filter((game: TGames) => {
//   //     return new Date(game.date) >= today;
//   //   });

//   //   const sortByDateGames: TGames[] = [...gameFiltered].sort(
//   //     (a: TGames, b: TGames): number => {
//   //       const dateA = new Date(a.date).getTime();
//   //       const dateB = new Date(b.date).getTime();
//   //       return dateA - dateB;
//   //     },
//   //   );

//   //   const filterInput = sortByDateGames.filter((game: TGames) => {
//   //     return (
//   //       game.team_1_name.toLowerCase().includes(changeInput.toLowerCase()) ||
//   //       game.team_2_name.toLowerCase().includes(changeInput.toLowerCase())
//   //     );
//   //   });
//   //   setGames(filterInput);
//   // }, [changeInput, gamesResult]);
//   // console.log(group.map(( )));

//   return (
//     <Box flexDirection="column" display="flex" sx={sectionStyle}>
//       {
        
//       }
//       {/* {isLoading ? (
//         <CircularProgress enableTrackSlot size="3rem" />
//       ) : (
//         <ChampionshipsTable games={games} title={"Próximos jogos"} />
//       )} */}
//     </Box>
//   );
// };

