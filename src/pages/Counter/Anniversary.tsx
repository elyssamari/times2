import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import moment from 'moment';


export default function Anniversary({darkMode}) {
  const [duration, setDuration] = useState('');
  
  useEffect(() => {
    const startDate = moment('2022-08-08');

    const updateDuration = () => {
      const now = moment();
      const diff = moment.duration(now.diff(startDate));

      const years = diff.years();
      const months = diff.months();
      const days = diff.days();
      const hours = diff.hours();
      const minutes = diff.minutes();
      const seconds = diff.seconds();

      setDuration(`${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    };

    updateDuration();
    const intervalId = setInterval(updateDuration, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Grid container className="widget-background"
    sx={{
      backgroundImage: darkMode ?  `url(${process.env.PUBLIC_URL}/night-cat.png)`: `url(${process.env.PUBLIC_URL}/day-duck-house.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "586px", 
      height: "300px", 
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px", 
      padding: '8px 8px'
    }}>
      <Grid container className="widget-content" justifyContent='center'>
        <Typography variant='h5' color='white' fontFamily='Inconsolata, monospace' fontWeight='bold'>
          We've been together for:
        </Typography>
        <h1 style={{ color: 'white' }}>
          {duration}
        </h1>
      </Grid>
    </Grid>
  );
}
