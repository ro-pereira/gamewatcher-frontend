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
import { cellSx, tableContainerSx } from "./championshipTable.style";

export const ChampionshipsTable = () => {
  return (
    <TableContainer component={Paper} sx={tableContainerSx}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow sx={{ height: "8rem" }}>
            <TableCell align="center" sx={cellSx}>
              Partida
            </TableCell>
            <TableCell align="center" sx={cellSx}>
              Dia
            </TableCell>
            <TableCell align="center" sx={cellSx}>
              Assista em:
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow component="th" scope="row" hover sx={{ minHeight: "14rem" }}>
            <TableCell align="center">
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
                <Typography
                  variant="h2"
                  alignItems="center"
                  width="20%"
                  justifyContent="center"
                >
                  x
                </Typography>
                <Box>
                  <Typography variant="subtitle1">time name 2</Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box display="flex" flexDirection="column">
                <Typography variant="subtitle1">Terça, dia 26/02</Typography>
                <Typography variant="h2">15H30</Typography>
              </Box>
            </TableCell>
            <TableCell align="center">
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
