import { flexColumnCenter } from "@/src/Theme/core/layout.flex";
import { TTeamNameAndIcon } from "@/src/Types/type";
import { Box, Typography } from "@mui/material";

export const TeamNameAndIcon = ({ teamName, teamImg }: TTeamNameAndIcon) => {
  return (
    <Box
      sx={{
        ...flexColumnCenter,
        gap: 0.5,
      }}
    >
      <Box
        component="img"
        src={teamImg}
        alt={`emblema do ${teamName}`}
        sx={{
          width: "7rem",
          height: "7rem",
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
