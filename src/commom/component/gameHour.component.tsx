import { Typography } from "@mui/material";
import { formatDate } from "../utils/utils.date";
import { TGameHour } from "@/src/Theme/type";

export const GameHour = ({ gameDate }: TGameHour) => {
  return (
    <>
      <Typography variant="body2" textAlign={"center"}>
        às
      </Typography>
      <Typography variant="h2" color="primary.main">
        {formatDate(gameDate).time}
      </Typography>
    </>
  );
};
