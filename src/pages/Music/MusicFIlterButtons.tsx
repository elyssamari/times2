import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";


export default function MusicFilterButtons({ filterButton, setFilterButton }) {
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  const handleButtonClick = (buttonName) => {
    setFilterButton(buttonName);
  };

  const handleHeartHover = () => {
    setIsHeartHovered(true);
  };

  const handleHeartLeave = () => {
    setIsHeartHovered(false);
  };

  const renderImagesForFilter = () => {
    switch (filterButton) {
      case "For us":
        return (
          <>
            <img
              alt='elyssa'
              src={`${process.env.PUBLIC_URL}/madame.png`}
              className={isHeartHovered ? 'jump' : 'jump-madame'}
              style={{ height: 150 }}
            />
            <img
              alt='heart'
              src={`${process.env.PUBLIC_URL}/heart.png`}
              style={{ height: 100 }}
              onMouseEnter={handleHeartHover}
              onMouseLeave={handleHeartLeave}
            />
            <img
              alt='joshua'
              src={`${process.env.PUBLIC_URL}/monsieur.png`}
              className={isHeartHovered ? 'jump' : 'jump-monsieur'}
              style={{ height: 150 }}
            />
          </>
        );
      case "Joshua's":
        return (
          <img
            alt='joshua'
            src={`${process.env.PUBLIC_URL}/monsieur.png`}
            className={isHeartHovered ? 'jump' : 'jump-monsieur'}
            style={{ height: 150 }}
            />
        );
      case "Elyssa's":
        return (
          <img
            alt='elyssa'
            src={`${process.env.PUBLIC_URL}/madame.png`}
            className={isHeartHovered ? 'jump' : 'jump-madame'}
            style={{ height: 150 }}
            />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Grid container gap={2}>
        <Button
          variant='contained'
          disableElevation
          sx={{
            fontWeight: 'bold',
            borderRadius: '5px',
            color: filterButton === 'For us' ? 'white' : '#37352f',
            backgroundColor: filterButton === 'For us' ? '#37352f' : 'gray',
            '&:hover': {
              backgroundColor: filterButton === 'For us' ? '#37352f' : 'darkgray',
            },
          }}
          onClick={() => handleButtonClick('For us')}
        >
          For us
        </Button>
        <Button
          variant='contained'
          disableElevation
          sx={{
            fontWeight: 'bold',
            borderRadius: '5px',
            color: filterButton === `Joshua's` ? 'white' : 'black',
            backgroundColor: filterButton === `Joshua's` ? 'black' : 'gray',
            '&:hover': {
              backgroundColor: filterButton === `Joshua's` ? 'black' : 'darkgray',
            },
          }}
          onClick={() => handleButtonClick(`Joshua's`)}
        >
          Joshua's
        </Button>
        <Button
          variant='contained'
          disableElevation
          sx={{
            fontWeight: 'bold',
            borderRadius: '5px',
            color: filterButton === `Elyssa's` ? 'white' : 'black',
            backgroundColor: filterButton === `Elyssa's` ? 'black' : 'gray',
            '&:hover': {
              backgroundColor: filterButton === `Elyssa's` ? 'black' : 'darkgray',
            },
          }}
          onClick={() => handleButtonClick(`Elyssa's`)}
        >
          Elyssa's
        </Button>
      </Grid>
      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
        {renderImagesForFilter()}
      </Box>
    </>
  );
}
