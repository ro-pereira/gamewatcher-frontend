import GameWatchLogo from "@/src/components/GameWatch.component";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      component={"header"}
      sx={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
    >
      <GameWatchLogo />
    </Box>
  );
};

export default Header;
