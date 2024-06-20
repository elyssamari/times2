import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import moment from 'moment';


export default function BirthdayCountdown() {
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const calculateNextBirthday = () => {
      const now = moment();
      const currentYear = now.year();
      let nextBirthday = moment(`${currentYear}-06-12`);
      if (now.isAfter(nextBirthday)) {
        nextBirthday = nextBirthday.add(1, 'years');
      }
      return nextBirthday;
    };

    const updateDuration = () => {
      const now = moment();
      const nextBirthday = calculateNextBirthday();
      const diff = moment.duration(nextBirthday.diff(now));

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
      backgroundImage: 'url(day-sunflower.png)',
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
          Time until Josh's birthday:
        </Typography>
        <h1 style={{ color: 'white' }}>
          {duration}
        </h1>
      </Grid>
    </Grid>
  );
}
