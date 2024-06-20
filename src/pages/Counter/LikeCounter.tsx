import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';


export default function NailCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Grid container gap={3} flexDirection='column'
      sx={{
        textAlign: 'center',
        marginTop: '10px',
        fontFamily: 'Inconsolata, monospace',
        padding: '24px 24px',
        borderRadius: '10px',
        alignContent: 'center',
        justifyContent: 'center',
        width: '500px',
        bgcolor: '#FFC965'
      }}>

      <Grid item>
        <Typography variant='h5' fontFamily='Inconsolata, monospace' fontWeight='bold' color='white'>
        Times Josh said like and um </Typography>
      </Grid>
      <Grid item>
        <Grid container direction='row' justifyContent='center' gap={3} alignItems='center'>
          <button onClick={handleDecrement} className="round" style={{ fontFamily: 'Inconsolata, monospace' }}>-</button>
          <Box borderRadius='10px' bgcolor='#E9A831' width='100px' height='100px' alignContent='center'>
            <Typography variant='h3' color='white'>
              {count}
            </Typography>
          </Box>
          <button onClick={handleIncrement} className="round" style={{ fontFamily: 'Inconsolata, monospace' }}>+</button>
        </Grid>
      </Grid>
    </Grid>
  );
}