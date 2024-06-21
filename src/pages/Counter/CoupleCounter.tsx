import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';


export default function CoupleCounter() {
  const [countLeft, setCountLeft] = useState(0);
  const [countRight, setCountRight] = useState(5);
  const [isJumpingLeft, setIsJumpingLeft] = useState(false);
  const [isJumpingRight, setIsJumpingRight] = useState(false);

  const handleRightArrowClick = () => {
    if (countRight < 5 && countLeft > 0) {
      setCountRight(countRight + 1);
      setCountLeft(countLeft - 1);
      setIsJumpingRight(true);
      setTimeout(() => setIsJumpingRight(false), 500); 
    }
  };

  const handleLeftArrowClick = () => {
    if (countLeft < 5 && countRight > 0) {
      setCountLeft(countLeft + 1);
      setCountRight(countRight - 1);
      setIsJumpingLeft(true);
      setTimeout(() => setIsJumpingLeft(false), 500);
    }
  };

  return (
    <>
      <img
        alt='elyssa'
        src={`${process.env.PUBLIC_URL}/madame.png`}
        className={isJumpingLeft ? 'jumping' : ''}
        style={{ height: 200 }}
      />
      <Grid container gap={2} flexDirection='column'
        sx={{
          textAlign: 'center',
          marginTop: '10px',
          fontFamily: 'Inconsolata, monospace',
          padding: '24px 24px',
          borderRadius: '10px',
          alignContent: 'center',
          justifyContent: 'center',
          bgcolor: '#FFB3AF',
          width: '600px',
        }}>

        <Grid item>
          <Typography variant='h5' fontFamily='Inconsolata, monospace' fontWeight='bold' color='white'>
            Coupon Counter
          </Typography>
        </Grid>

        <Grid item>
          <Grid container direction='row' justifyContent='center' gap={3} alignItems='center'>
            <button onClick={handleLeftArrowClick} className="round" style={{ fontFamily: 'Inconsolata, monospace' }}>&#8592;</button>
            <div>
              <Box borderRadius='10px' bgcolor='#FF6961' width='100px' height='115px' alignContent='center'>
                <Typography variant='h6' color='white'>
                  Josh
                </Typography>
                <Typography variant='h3' color='white'>
                  {countLeft}
                </Typography>
              </Box>
            </div>
            <div>
              <Box borderRadius='10px' bgcolor='#FF6961' width='100px' height='115px' alignContent='center'>
                <Typography variant='h6' color='white'>
                  Elyssa
                </Typography>
                <Typography variant='h3' color='white'>
                  {countRight}
                </Typography>
              </Box>
            </div>
            <button onClick={handleRightArrowClick} className="round" style={{ fontFamily: 'Inconsolata, monospace' }}>&#8594;</button>
          </Grid>
        </Grid>

      </Grid>
      <img
        alt='joshua'
        src={`${process.env.PUBLIC_URL}/monsieur.png`}
        className={isJumpingRight ? 'jumping' : ''}
        style={{ height: 200 }}
      />
    </>
  );
}
