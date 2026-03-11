import { flexColumnCenter } from "@/src/Theme/core/layout.flex";
import { TTeamNameAndIcon } from "@/src/components/Types/type";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const TeamNameAndIcon = ({ teamName, teamImg }: TTeamNameAndIcon) => {
  return (
    <Box sx={{ width: "9rem", ...flexColumnCenter }}>
      <Image
        src={teamImg}
        alt={`emblema do ${teamName}`}
        height={60}
        width={60}
      />
      <Typography
        variant="h3"
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          width: "9rem",
          textAlign: "center",
        }}
      >
        {teamName}
      </Typography>
    </Box>
  );
};
