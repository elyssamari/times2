import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Anniversary from "./Anniversary.tsx"
import SunflowerBirthday from "./SunflowerBirthday.tsx";
import LilacBirthday from "./LilacBirthday.tsx";
import EvolutionCounter from "./EvolutionCounter.tsx";
import KnuckleCounter from "./KnuckleCounter.tsx";
import LikeCounter from "./LikeCounter.tsx";
import CoupleCounter from "./CoupleCounter.tsx";


export default function AnniversaryCounter({ darkMode }) {

  return (
    <>
      <Grid container gap={4} padding='24px 24px'>
        <Grid container direction='column' gap={3}>
          <Typography variant="h3" fontWeight='bold' align='center' sx={{ color: darkMode ? 'white' : 'black' }}>
            Couple Counter
          </Typography>
          <Box height='2px' width='100%' sx={{ backgroundColor: '#3F3F3F' }} />
        </Grid>
      </Grid>
      <Grid container gap={3} padding='24px 24px' justifyContent='center'>
        <Grid container direction='row' gap={3} justifyContent='center'>
          <Anniversary darkMode={darkMode} />
          <SunflowerBirthday darkMode={darkMode} />
          <LilacBirthday darkMode={darkMode} />
        </Grid>
        <Grid container direction='row' gap={3} justifyContent='center'>
          <CoupleCounter />
        </Grid>
        <Grid container direction='row' gap={4} justifyContent='center'>
          <EvolutionCounter />
          <KnuckleCounter />
          <LikeCounter />
        </Grid>
      </Grid>
    </>
  );
}