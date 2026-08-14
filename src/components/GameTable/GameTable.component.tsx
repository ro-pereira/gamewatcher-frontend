"use client";
import { TGameTableProps } from "@/src/Types/type";
import {
  Box,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { GameHour } from "../gameHour.component";
import {
  infoContentTableSx,
  tableCellInfoChannelSx,
  tableCellInfoGameMatchSx,
  tableCellInfoTeamSx,
  tableRowSx,
  tableSx,
} from "./gameTable.style";
import { TeamNameAndIcon } from "../TeamNameAndIcon.component";
import {
  flexColumnAlignItemsCenter,
  flexColumnCenter,
  flexRowCenter,
} from "@/src/Theme/core/layout.flex";

export const GameTable = ({
  noGamesThisWeek,
  selectedDayGames,
}: TGameTableProps) => {
  if (noGamesThisWeek) {
    return (
      <Box sx={infoContentTableSx}>
        <Typography variant="body1" textAlign="center">
          Sem informações para esta semana.
        </Typography>
      </Box>
    );
  }

  if (!selectedDayGames) {
    return (
      <Box sx={infoContentTableSx}>
        <Typography variant="body1" textAlign="center">
          Sem informações para hoje.
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer sx={tableSx}>
      <Table>
        <TableBody
          sx={{ ...flexColumnAlignItemsCenter, gap: { xs: 2, sm: 0 } }}
        >
          {selectedDayGames.games.map((game, index) => {
            return (
              <TableRow key={index} component="tr" hover sx={tableRowSx}>
                <TableCell sx={tableCellInfoTeamSx}>
                  <TeamNameAndIcon
                    teamName={game.team_1_name}
                    teamImg={game.team_1_img}
                  />
                  <Typography
                    variant="h2"
                    sx={{ ...flexRowCenter, width: "4rem" }}
                  >
                    x
                  </Typography>
                  <TeamNameAndIcon
                    teamName={game.team_2_name}
                    teamImg={game.team_2_img}
                  />
                </TableCell>
                <TableCell sx={tableCellInfoGameMatchSx}>
                  <Box
                    sx={{
                      ...flexColumnCenter,
                    }}
                  >
                    <GameHour variantChange={"h2"} gameDate={game.date} />
                  </Box>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    sx={{
                      maxWidth: "100%",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {game.championship}
                  </Typography>
                </TableCell>

                <TableCell sx={tableCellInfoChannelSx}>
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
      </Table>
    </TableContainer>
  );
};
