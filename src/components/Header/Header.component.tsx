"use client";

import { Box, OutlinedInput, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useRef } from "react";
import { headerContainerSx, inputBoxSx } from "./header.style";

interface IHeader {
  setChangeInput: Dispatch<SetStateAction<string>>;
  changeInput: string;
}

export const Header = ({ setChangeInput, changeInput }: IHeader) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Box ref={headerRef} sx={headerContainerSx}>
      <Box ref={inputBoxRef} sx={inputBoxSx}>
        <Typography
          variant="body2"
          width="100%"
          textAlign="initial"
          color="primary.contrastText"
        >
          Onde assistir? Pesquise aqui!
        </Typography>
        <OutlinedInput
          sx={{ width: "100%" }}
          placeholder="Digite o nome do time de futebol..."
          value={changeInput}
          onChange={(e) => setChangeInput(e.target.value)}
        />
      </Box>
    </Box>
  );
};
