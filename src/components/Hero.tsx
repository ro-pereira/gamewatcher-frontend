import { Box, Grid, TextField, Typography } from "@mui/material";
import arrowDown from "../assets/icons8-sort-down-64.png";
import backgrondSoccer from "../assets/vecteezy_the-soccer-ball-is-flying-fast-tearing-the-nets-of-the-goal_22460830.jpg";

export const heroContainerStyle = {
  backgroundImage: `url(${backgrondSoccer})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const heroHeaderBoxSx = {
  width: "80%",
  height: "50%",
  justifyContent: { xs: "center", sm: "end" },
  paddingTop: "calc(1rem + 1.4rem)",
  paddingBottom: "1rem",
};

export const titleContainerSx = {
  width: {
    xs: "60%",
    sm: "35rem",
    md: "40rem",
    lg: "50rem",
  },
  height: {
    xs: "8rem",
    sm: "14rem",
    md: "14rem",
    lg: "16rem",
  },
  boxShadow: "5px 5px 5px 4px",
};

export const subtitleContainerSx = {
  maxWidth: "calc(60% - 2rem)",
  width: {
    xs: "50%",
    sm: "30rem",
    lg: "40rem",
  },
  height: {
    lg: "14rem",
  },
  padding: { xs: "2rem", lg: "4rem" },
  top: { xs: "-1rem", sm: "-2rem", md: "-2rem", lg: "-3rem" },
  boxShadow: "6px 6px 5px 4px",
};

const Hero = () => {
  return (
    <Grid
      container
      flexDirection="column"
      position="relative"
      sx={heroContainerStyle} 
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={heroHeaderBoxSx}
      >
        <Box
          borderRadius={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="secondary.main"
          sx={titleContainerSx}
        >
          <Typography
            variant="h1"
            align="center"
            color="secondary.contrastText"
          >
            Futebol 2025
          </Typography>
        </Box>
        <Box
          borderRadius={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="primary.main"
          position="relative"
          sx={subtitleContainerSx}
        >
          <Typography
            variant="body1"
            align="center"
            color="primary.contrastText"
          >
            Descubra onde assistir aos jogos de futebol ao vivo – TV, YouTube ou
            streaming. Pesquise e nunca mais perca uma partida!
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        width="80%"
        sx={{
          minHeight: "50%",
          padding: 5,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          width="50rem"
          height="100%"
          sx={{
            maxWidth: "80%",
            gap: 0.4,
          }}
        >
          <Typography variant="body2" color="primary.contrastText">
            Onde assistir? Pesquise aqui!
          </Typography>
          <TextField />
        </Box>

        <Box>
          <img width="54rem" height="40rem" src={arrowDown} alt="arrow down" />
        </Box>
      </Box>
    </Grid>
  );
};
export default Hero;
