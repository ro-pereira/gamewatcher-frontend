import { Box, Link, Typography } from "@mui/material";
import { footerSx } from "./footer.style";
import GameWatchLogo from "@/src/components/GameWatch.component";

const Footer = () => {
  return (
    <Box component={"footer"} sx={footerSx}>
      <GameWatchLogo />

      <Typography>Encontre seus jogos e descubra onde assistir.</Typography>

      <Box display={"flex"} gap={2}>
        <Link
          sx={{ textDecoration: "none" }}
          href="https://github.com/ro-pereira"
        >
          GitHub
        </Link>
        <Typography>•</Typography>
        <Link
          sx={{ textDecoration: "none" }}
          href="www.linkedin.com/in/rosana-pereira-dev"
        >
          LinkedIn
        </Link>
      </Box>

      <Typography>© 2026 gameWatch</Typography>
    </Box>
  );
};

export default Footer;
