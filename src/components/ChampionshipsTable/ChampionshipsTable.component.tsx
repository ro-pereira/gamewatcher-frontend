"use client";

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { cellSx, tableContainerSx } from "./championshipTable.style";
import { TFormattedDate, TGames } from "@/src/Theme/type";
import { flexColumnCenter, flexRowCenter } from "@/src/Theme/util/layout.flex";

interface ChampionshipsTableProps {
  games: TGames[];
}

export const ChampionshipsTable = ({ games }: ChampionshipsTableProps) => {

const formatDate = (isoDate: string | Date): TFormattedDate => {
  const dateObj = new Date(isoDate);

  const weekday = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
  }).format(dateObj);

  const date = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dateObj);

  const time = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);

  return {
    weekday,
    date,
    time,
  };
};

  return (
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
          {games.map((game: TGames, index: number) => {
            // console.log(game, "DATA");
            return (
              <TableRow
                key={index}
                component="th"
                scope="row"
                hover
                sx={{ minHeight: "14rem" }}
              >
                <TableCell align="center">
                  <Box
                    sx={{
                      gap: 2,
                      ...flexRowCenter,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle1">
                        {game.team_1_name}
                      </Typography>
                    </Box>
                    <Typography variant="h2" width="20%" sx={flexRowCenter}>
                      x
                    </Typography>
                    <Box>
                      <Typography variant="subtitle1">
                        {game.team_2_name}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box sx={flexColumnCenter}>
                    <Typography variant="subtitle1">
                      {formatDate(game.date).weekday}, {formatDate(game.date).date}
                    </Typography>
                    <Typography variant="h2">{formatDate(game.date).time}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box>
                    {game.channels.map((channel: string) => {
                      return <Typography key={channel}>{channel}</Typography>;
                    })}
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
