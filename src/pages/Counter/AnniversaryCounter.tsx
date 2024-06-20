import { Box, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import Anniversary from "./Anniversary.tsx"
import SunflowerBirthday from "./SunflowerBirthday.tsx";
import LilacBirthday from "./LilacBirthday.tsx";
import EvolutionCounter from "./EvolutionCounter.tsx";
import KnuckleCounter from "./KnuckleCounter.tsx";
import NailCounter from "./LikeCounter.tsx";
import CoupleCounter from "./CoupleCounter.tsx";


export default function AnniversaryCounter() {
  const finalTheme = createTheme({
    typography: {
      fontFamily: 'Inconsolata, monospace',
    }
  });

  return (
    <ThemeProvider theme={finalTheme}>
      <Grid container gap={4} padding='24px 24px'>
        <Grid container direction='column' gap={3}>
          <Typography variant="h3" fontWeight='bold' align='center'>
            Couple Counter
          </Typography>
          <Box height='2px' width='100%' sx={{ backgroundColor: 'black' }} />
        </Grid>
      </Grid>
      <Grid container gap={3} padding='24px 24px' justifyContent='center'>
        <Anniversary />
        <SunflowerBirthday />
        <LilacBirthday />
        <CoupleCounter/>
        <Grid container direction='row' gap={4} justifyContent='center'>
        <EvolutionCounter />
        <KnuckleCounter />
        <NailCounter/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}