import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";


export default function Home() {
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  const handleHeartHover = () => {
    setIsHeartHovered(true);
  };

  const handleHeartLeave = () => {
    setIsHeartHovered(false);
  };

  return (
    <div style={{
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%',  
      backgroundImage: `url(${process.env.PUBLIC_URL}/day-landscape.png)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center',
      borderRadius: '10px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#37352f'
    }}>
    <Grid container gap={10} padding='96px 24px'>
      <Grid
        container
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap={10}
        className="jump-container">
        <img
          alt='elyssa'
          src={`${process.env.PUBLIC_URL}/madame.png`}
          className={isHeartHovered ? 'jump' : 'jump-madame'}
          style={{ height: 248 }}
        />
        <img
          alt='heart'
          src={`${process.env.PUBLIC_URL}/heart.png`}
          style={{ height: 160 }}
          onMouseEnter={handleHeartHover}
          onMouseLeave={handleHeartLeave}
        />
        <img
          alt='joshua'
          src={`${process.env.PUBLIC_URL}/monsieur.png`}
          className={isHeartHovered ? 'jump' : 'jump-monsieur'}
          style={{ height: 248 }}
        />
      </Grid>
      <Grid container alignItems='center' justifyContent='center' flexDirection='column' gap={3}  
      sx={{
          backgroundColor: '#FED787',
          padding: '24px 24px',
          borderRadius: '10px',
          borderWidth: '10px',
          borderStyle: 'solid',
          borderColor: 'white'
        }}>
        <Grid item >
          <Typography variant="h3" color='#E3793F ' fontWeight='bold'>
            Happy Birthday Josh!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" color='#E3793F ' fontWeight='bold'>
            Surprise! This is my gift to you plus many more. I included many things that are dear to me and helped me go through my rough time. Many of my favorite songs, videos, etc. are in here and though they might be a bit embarrasing to show, I hope you still enjoy each of them.
            I know this might be a little scuffed (since it is not responsive yet :3), but I wanted to give us both a space where we can continue adding features and memories of our journey. I promise to add dark mode too hehe. I love you so much and I hope you enjoy this gift. &lt;3  
            Happy Birthday Joshua!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}
