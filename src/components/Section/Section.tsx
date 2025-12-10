import { Grid } from "@mui/material";
import { ChampionshipsTable } from "../ChampionshipsTable/ChampionshipsTable.component";

const sectionStyle = {
  padding: "20rem",

};

export const Section = () => {
  return (
    <Grid sx={sectionStyle} zIndex={10}>
      <ChampionshipsTable />
    </Grid>
  );
};
