import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { ChampionshipTableRow } from "../ChampionshipTableRow";

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
              Partida
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
        <ChampionshipTableRow />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
