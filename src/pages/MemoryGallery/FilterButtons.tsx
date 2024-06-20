import { Button, Grid } from "@mui/material";
import React from "react";


export default function FilterButtons({ filterButton, setFilterButton }) {
  const handleButtonClick = (buttonName) => {
    setFilterButton(buttonName);
  };

  return (
    <Grid container gap={2}>
      <Button 
        variant='contained' 
        disableElevation 
        sx={{ 
          fontWeight: 'bold', 
          borderRadius: '5px',
          color: filterButton === 'Latest' ? 'white' : '#37352f',
          backgroundColor: filterButton === 'Latest' ? '#37352f' : 'gray',
          '&:hover': {
            backgroundColor: filterButton === 'Latest' ? '#37352f' : 'darkgray',
          }
        }}
        onClick={() => handleButtonClick('Latest')}
      >
        Latest
      </Button>
      <Button 
        variant='contained' 
        disableElevation 
        sx={{ 
          fontWeight: 'bold', 
          borderRadius: '5px',
          color: filterButton === 'Favorites' ? 'white' : 'black',
          backgroundColor: filterButton === 'Favorites' ? 'black' : 'gray',
          '&:hover': {
            backgroundColor: filterButton === 'Favorites' ? 'black' : 'darkgray',
          }
        }}
        onClick={() => handleButtonClick('Favorites')}
      >
        Favorites
      </Button>
      <Button 
        variant='contained' 
        disableElevation 
        sx={{ 
          fontWeight: 'bold', 
          borderRadius: '5px',
          color: filterButton === 'Oldest' ? 'white' : 'black',
          backgroundColor: filterButton === 'Oldest' ? 'black' : 'gray',
          '&:hover': {
            backgroundColor: filterButton === 'Oldest' ? 'black' : 'darkgray',
          }
        }}
        onClick={() => handleButtonClick('Oldest')}
      >
        Oldest
      </Button>
    </Grid>
  );
}
