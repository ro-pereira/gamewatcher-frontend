import { GameHour } from "@/src/commom/component/gameHour.component";
import { TeamNameAndIcon } from "@/src/commom/component/TeamNameAndIcon.component";
import { formatDate } from "@/src/commom/utils/utils.date";
import {
  flexColumnAlignItemsCenter,
  flexColumnCenter,
  flexRowCenter,
} from "@/src/Theme/core/layout.flex";
import { TcardChampionchipProps } from "@/src/components/Types/type";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export const CardChampionchip = ({ game }: TcardChampionchipProps) => {
  return (
    <Card
      sx={{
        width: "30rem",
        height: "100%",
        "&:hover": {
          backgroundColor: "action.selectedHover",
        },
      }}
    >
      <CardActionArea sx={{ height: "100%", ...flexRowCenter }}>
        <CardContent
          sx={{
            height: "100%",
            width: "80%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            width={"100%"}
            height="15%"
            sx={(theme) => ({
              borderBottom: `1px solid ${theme.palette.primary.main}`,
              ...flexColumnCenter,
            })}
          >
            <Typography variant="subtitle2" textAlign="center">
              {game.championship}
            </Typography>
          </Box>

          <Box
            height="40%"
            sx={(theme) => ({
              borderBottom: `1px solid ${theme.palette.primary.main}`,
              ...flexRowCenter,
              // bgcolor: "#9f32326d"
            })}
          >
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

          <Box sx={{ ...flexRowCenter, width: "100%", padding: 2}} height={"20%"} >
            <Typography variant="subtitle2" color="primary.constext">
              {formatDate(game.date).weekday}, {formatDate(game.date).date}
              <Box sx={{ ...flexRowCenter }}>
                <GameHour variantChange="h3" gameDate={game.date} />
              </Box>
            </Typography>
          </Box>

          <Box height={"25%"} sx={{ ...flexRowCenter }}>
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={1}
              alignItems="center"
              sx={{
                overflowX: "auto",
                overflowY: "hidden",
                flexWrap: "nowrap",
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
                padding: 2
              }}
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
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// 20 + 40 + 15 + 5
