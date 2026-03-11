"use client";

import { GameHour } from "@/src/commom/component/gameHour.component";
import { TeamNameAndIcon } from "@/src/commom/component/TeamNameAndIcon.component";
import { flexColumnCenter, flexRowCenter } from "@/src/Theme/core/layout.flex";
import { Games } from "@/src/components/Types/type";
import {
  Box,
  Chip,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

interface ChampionshipsTableProps {
  game: Games;
}

export const ChampionshipsTable = ({ game }: ChampionshipsTableProps) => {
  return (
    <TableRow
      component="th"
      scope="row"
      hover
      sx={{
        minHeight: "14rem",
        minWidth: "42rem",
        display: "flex",
      }}
    >
      <TableCell sx={{ ...flexRowCenter, flex: 2 }}>
        <TeamNameAndIcon
          teamName={game.team_1_name}
          teamImg={game.team_1_img}
        />
        <Typography variant="h2" sx={{ ...flexRowCenter, width: "4rem" }}>
          x
        </Typography>
        <TeamNameAndIcon
          teamName={game.team_2_name}
          teamImg={game.team_2_img}
        />
      </TableCell>

      <TableCell sx={{ ...flexColumnCenter, flex: 1, gap: 1 }}>
        <Box
          sx={{
            ...flexColumnCenter,
          }}
        >
          <GameHour variantChange={"h2"} gameDate={game.date} />
        </Box>
        <Typography variant="body2" textAlign={"center"}>
          {game.championship}
        </Typography>
      </TableCell>

      <TableCell sx={{ ...flexRowCenter, flex: 2 }}>
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
