import { Box } from "@mui/material";
import logo from "../../public/logo-gamewatch.svg";

const GameWatchLogo = () => {
  return (
    <Box
      component="img"
      src={logo.src}
      alt="gameWatch"
      sx={{ height: "5rem", backgroundClip: "content-box" }}
    />
  );
};

export default GameWatchLogo;
