"use client";

import { TFormattedDate, TGames } from "@/src/Theme/type";
import { flexColumnCenter, flexRowCenter } from "@/src/Theme/util/layout.flex";
import {
  Box,
  Chip,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { cellSx } from "./championshipTable.style";

interface ChampionshipsTableProps {
  game: TGames;
}

export const ChampionshipsTable = ({ game }: ChampionshipsTableProps) => {
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
    <TableRow
      component="th"
      scope="row"
      hover
      sx={{
        minHeight: "14rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TableCell align="center" sx={cellSx}>
        <Box
          sx={{
            gap: 1,
            ...flexRowCenter,
          }}
        >
          <Box sx={{ width: "40%", ...flexColumnCenter }}>
            <Typography variant="subtitle1">{game.team_1_name}</Typography>
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
            <Typography variant="subtitle1">{game.team_2_name}</Typography>
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
          <Typography variant="subtitle1" color="primary.main">
            {formatDate(game.date).weekday}, {formatDate(game.date).date}
          </Typography>
          <Typography variant="h2" color="primary.main">
            {formatDate(game.date).time.replace(":", "H")}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="center" sx={cellSx}>
        <Stack direction="row" flexWrap="wrap" gap={1} alignItems="center">
          {game.channels.map((channel: string, index: number) => {
            return (
              <Chip
                key={index}
                label={channel}
                variant="outlined"
                sx={(theme) => ({
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
};
