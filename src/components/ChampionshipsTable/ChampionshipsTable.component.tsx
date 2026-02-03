"use client";

import { TFormattedDate, TGames } from "@/src/Theme/type";
import { flexColumnCenter, flexRowCenter } from "@/src/Theme/util/layout.flex";
import {
  Box,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { cellSx, tableContainerSx } from "./championshipTable.style";
import Image from "next/image";

interface ChampionshipsTableProps {
  games: TGames[];
  title: string;
}

export const ChampionshipsTable = ({ games }: ChampionshipsTableProps) => {
  const formatDate = (isoDate: string | Date): TFormattedDate => {
    const dateObj = new Date(isoDate);

    const weekday = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
    }).format(dateObj);

    const date = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(dateObj);

    const time = new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(dateObj);

    return {
      weekday,
      date,
      time,
    };
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "10rem",
          ...flexRowCenter,
        }}
      >
        <Typography variant="h2">Próximos jogos</Typography>{" "}
      </Box>
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
          {games.length === 0 ? (
            <Box
              sx={{
                position: "absolute",
                left: "40%",
                top: "40%",
              }}
            >
              <Typography variant="body1">team not found</Typography>
            </Box>
          ) : (
            <TableBody>
              {games.map((game: TGames, index: number) => {
                return (
                  <TableRow
                    key={index}
                    component="th"
                    scope="row"
                    hover
                    sx={{ minHeight: "14rem" }}
                  >
                    <TableCell align="center" sx={cellSx}>
                      <Box
                        sx={{
                          gap: 1,
                          ...flexRowCenter,
                        }}
                      >
                        <Box sx={{ width: "40%", ...flexColumnCenter }}>
                          <Typography variant="subtitle1">
                            {game.team_1_name}
                          </Typography>
                          <Image
                            src={game.team_1_img}
                            alt={`emblema do ${game.team_1_name}`}
                            height={40}
                            width={40}
                          />
                        </Box>
                        <Typography variant="h2" width="20%" sx={flexRowCenter}>
                          x
                        </Typography>
                        <Box sx={{ width: "40%", ...flexColumnCenter }}>
                          <Typography variant="subtitle1">
                            {game.team_2_name}
                          </Typography>
                          <Image
                            src={game.team_2_img}
                            alt={`emblema do ${game.team_2_name}`}
                            height={40}
                            width={40}
                          />
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center" sx={cellSx}>
                      <Box sx={flexColumnCenter}>
                        <Typography variant="subtitle1">
                          {formatDate(game.date).weekday},{" "}
                          {formatDate(game.date).date}
                        </Typography>
                        <Typography variant="h2">
                          {formatDate(game.date).time}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center" sx={cellSx}>
                      <Stack
                        direction="row"
                        flexWrap="wrap"
                        gap={1}
                        alignItems="center"
                      >
                        {game.channels.map((channel: string, index: number) => {
                          return (
                            <Chip
                              key={index}
                              label={channel}
                              variant="outlined"
                              sx={(theme) => ({
                                // color: theme.palette.primary.main,
                                // borderColor: theme.palette.primary.main,
                                padding: "4px",
                                fontSize: theme.typography.body2,
                              })}
                            />
                          );
                        })}
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
};
