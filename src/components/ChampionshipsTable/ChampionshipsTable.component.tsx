import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export const ChampionshipsTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: {
          xs: "70%",
          sm: "80%",
          md: "80rem",
          lg: "100rem",
        },
        minHeight: "300px",
      }}
    >
      <Table aria-label="caption table">
        <TableHead>
          <TableRow
            sx={{
              height: "8rem",
            }}
          >
            <TableCell align="center" sx={{ width: "33%" }}>
              Placar
            </TableCell>
            <TableCell align="center" sx={{ width: "33%" }}>
              Dia
            </TableCell>
            <TableCell align="center" sx={{ width: "33%" }}>
              Assista em:
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
                  <Typography>time name 1</Typography>
                </Box>
                <Typography>0 X 0</Typography>
                <Box>
                  <Typography>time name 2</Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell align="center" height="10rem">
              <Box display="flex" flexDirection="column">
                <Typography>Terça, dia 26/02</Typography>
                <Typography>15H30</Typography>
              </Box>
            </TableCell>
            <TableCell align="center" height="10rem">
              <Box>
                <Typography>netflix</Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
