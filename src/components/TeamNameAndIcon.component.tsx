import { flexColumnCenter } from "@/src/Theme/core/layout.flex";
import { TTeamNameAndIcon } from "@/src/Types/type";
import { Box, Typography } from "@mui/material";
// import Image from "next/image";

export const TeamNameAndIcon = ({ teamName, teamImg }: TTeamNameAndIcon) => {
  return (
    <Box
      sx={{
        ...flexColumnCenter,
        gap: 1
      }}
    >
      <Box
        component="img"
        src={teamImg}
        alt={`emblema do ${teamName}`}
        sx={{
          width: {
            xs: "10rem",
            sm: "8rem",
          },
          height: {
            xs: "10rem",
            sm: "8rem",
          },
          objectFit: "contain",
        }}
      />

      <Typography
        variant="h3"
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          width: "10rem",
          textAlign: "center",
        }}
      >
        {teamName}
      </Typography>
    </Box>
  );
};
