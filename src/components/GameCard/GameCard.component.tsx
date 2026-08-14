import { TeamNameAndIcon } from "@/src/components/TeamNameAndIcon.component";
import { flexRowCenter } from "@/src/Theme/core/layout.flex";
import { GameCardProps } from "@/src/Types/interface";
import { formatDate } from "@/src/utils/utils.date";
import {
  Box,
  Card,
  CardActionArea,
  // CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { GameHour } from "../gameHour.component";
import {
  cardChannels,
  cardChipsStack,
  cardContentSx,
  cardGameHour,
  cardSx,
  cardTeamName,
  cardTitle,
} from "./gameCard.style";

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card sx={cardSx}>
      <CardActionArea sx={{ height: "100%", ...flexRowCenter }}>
        <CardContent sx={cardContentSx}>
          <Box sx={cardTitle}>
            <Typography variant="subtitle2" textAlign="center">
              {game.championship}
            </Typography>
          </Box>

          <Box sx={cardTeamName}>
            <TeamNameAndIcon
              teamName={game.team_1_name}
              teamImg={game.team_1_img}
            />
            <Typography variant="h2" sx={{ ...flexRowCenter, width: "10%" }}>
              x
            </Typography>
            <TeamNameAndIcon
              teamName={game.team_2_name}
              teamImg={game.team_2_img}
            />
          </Box>

            {formatDate(game.date).weekday}, {formatDate(game.date).date}
            <GameHour gameDate={game.date} variantChange="h3" />

          <Box sx={{ ...flexRowCenter, height: "25%" }}>
            <Stack sx={cardChannels}>
              {game.channels.map((channel: string) => {
                return (
                  <Chip
                    key={channel}
                    label={channel}
                    variant="outlined"
                    sx={cardChipsStack}
                  />
                );
              })}
            </Stack>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
