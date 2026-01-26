import { Box } from "@mui/material";
import { ChampionshipsTable } from "../ChampionshipsTable/ChampionshipsTable.component";
import { sectionStyle } from "./section.style";

export const Section = () => {
  return (
    <Box flexDirection="column" display="flex" sx={sectionStyle}>
      <ChampionshipsTable />
    </Box>
  );
};
