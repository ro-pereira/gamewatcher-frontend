import { Box, TableCell, TableRow, Typography } from "@mui/material";

export const ChampionshipTableRow = () => {
  return (
    <TableRow component="th" scope="row" sx={{ maxHeight: "14rem" }}>
      <TableCell
        align="center"
        sx={{
          height: "8rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography variant="subtitle1">time name 1</Typography>
          </Box>
          <Typography variant="h2" alignItems="center" width="20%" justifyContent="center">
           x 
          </Typography>
          <Box>
            <Typography  variant="subtitle1">time name 2</Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell align="center" height="10rem">
        <Box display="flex" flexDirection="column">
          <Typography  variant="subtitle1">Terça, dia 26/02</Typography>
          <Typography variant="h2">15H30</Typography>
        </Box>
      </TableCell>
      <TableCell align="center" height="10rem">
        <Box>
          <Typography>netflix</Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};
