import { Typography } from "@mui/material";
import { formatDate } from "../../utils/utils.date";
import { TGameHour } from "@/src/Types/type";

export const GameHour = ({ gameDate, variantChange }: TGameHour) => {
  return (
    <>
      <Typography variant="body2" textAlign={"center"}>
        às
      </Typography>
      <Typography variant={variantChange} color="primary.main">
        {formatDate(gameDate).time}
      </Typography>
    </>
  );
};
