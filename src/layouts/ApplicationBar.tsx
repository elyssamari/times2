import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Grid, Box, Link } from '@mui/material';
import { useLocation } from 'react-router-dom';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import TryRoundedIcon from '@mui/icons-material/TryRounded';

const navItems = [
  { name: 'Memories Gallery', icon: <PhotoLibraryRoundedIcon sx={{ color: '#B89136' }} />, href: '#/memories-gallery' },
  { name: 'Music Playlist', icon: <LibraryMusicRoundedIcon sx={{ color: '#B89136' }} />, href: '#/music-playlist' },
  { name: 'Couple Counter', icon: <CalendarMonthRoundedIcon sx={{ color: '#B89136' }} />, href: '#/couple-counter' },
  { name: 'Messages', icon: <TryRoundedIcon sx={{ color: '#B89136' }} />, href: '#/messages' }
];

export default function ApplicationBar() {
  const location = useLocation();

  const [isHeartHovered, setIsHeartHovered] = useState(false);

  const handleHeartHover = () => {
    setIsHeartHovered(true);
  };

  const handleHeartLeave = () => {
    setIsHeartHovered(false);
  };

  return (
    <AppBar elevation={0} position='relative' sx={{ background: '#FFFCF4', padding: `16px 8px 8px 8px` }}>
      <Toolbar>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Link
            href='#/'
            sx={{ color: '#fff', textDecoration: 'none' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }} className="jump-container">
              <img
                alt='elyssa'
                src={`${process.env.PUBLIC_URL}/madame.png`}
                className={isHeartHovered ? 'jump' : 'jump-madame'}
                style={{ height: 56, marginRight: 8 }}
              />
              <img
                alt='heart'
                src={`${process.env.PUBLIC_URL}/heart.png`}
                style={{ height: 40, marginRight: 8 }}
                onMouseEnter={handleHeartHover}
                onMouseLeave={handleHeartLeave}
              />
              <img
                alt='joshua'
                src={`${process.env.PUBLIC_URL}/monsieur.png`}
                className={isHeartHovered ? 'jump' : 'jump-monsieur'}
                style={{ height: 56, marginRight: 8 }}
              />
            </Box>
          </Link>

          <Grid item>
            <Grid container gap={5}>
              {navItems.map((item) => (
                <Grid item key={item.name}>
                  <Link
                    href={item.href}
                    className={location.hash === item.href ? 'nav-item active' : 'nav-item'}
                    sx={{ color: '#37352f', textDecoration: 'none' }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        '&:hover .MuiSvgIcon-root, &.active .MuiSvgIcon-root': {
                          color: '#958C77'
                        },
                        '&:hover .hoverLine, &.active .hoverLine': {
                          width: '100%'
                        }
                      }}
                    >
                      {item.icon}
                      <Typography variant="h6" fontWeight='bold'>
                        {item.name}
                      </Typography>
                      <Box className="hoverLine"
                        sx={{
                          height: '2px',
                          width: '0%',
                          transition: 'width 0.3s',
                          position: 'absolute',
                          bottom: 0,
                          backgroundColor: '#FCC850'
                        }}
                      />
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
