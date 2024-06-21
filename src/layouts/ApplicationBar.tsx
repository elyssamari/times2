import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Grid, Box, Link, styled, Switch } from '@mui/material';
import { useLocation } from 'react-router-dom';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import TryRoundedIcon from '@mui/icons-material/TryRounded';


export default function ApplicationBar({ toggleDarkMode, darkMode }) {
  const location = useLocation();

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: darkMode ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: darkMode ? '#B89136' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: darkMode ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

  const navItems = [
    { name: 'Memories Gallery', icon: <PhotoLibraryRoundedIcon sx={{ color: '#B89136' }} />, href: '#/memories-gallery' },
    { name: 'Music Playlist', icon: <LibraryMusicRoundedIcon sx={{ color: '#B89136' }} />, href: '#/music-playlist' },
    { name: 'Couple Counter', icon: <CalendarMonthRoundedIcon sx={{ color: '#B89136' }} />, href: '#/couple-counter' },
    { name: 'Messages', icon: <TryRoundedIcon sx={{ color: '#B89136' }} />, href: '#/messages' },
    { name: darkMode ? "Dark Mode" : "Light Mode", icon: <MaterialUISwitch checked={darkMode} onChange={toggleDarkMode}/> }
  ];

  const [isHeartHovered, setIsHeartHovered] = useState(false);

  const handleHeartHover = () => {
    setIsHeartHovered(true);
  };

  const handleHeartLeave = () => {
    setIsHeartHovered(false);
  };

  return (
    <AppBar elevation={0} position='relative' sx={{ background: darkMode ? '#0F0F0F' : '#FFFCF4', padding: `16px 8px 8px 8px` }}>
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
            <Grid container gap={5} alignItems='center'>
              {navItems.map((item) => (
                <Grid item key={item.name}>
                  {item.name === 'Dark Mode' || item.name === 'Light Mode' ? (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& .MuiSvgIcon-root': {
                          color: darkMode ? '#FFFF' : '#37352f',
                        },
                      }}
                    >
                      {item.icon}
                    </Box>
                  ) : (
                    <Link
                      href={item.href}
                      className={location.hash === item.href ? 'nav-item active' : 'nav-item'}
                      sx={{ textDecoration: 'none', color: darkMode ? '#FFFF' : '#37352f' }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          position: 'relative',
                          '&:hover .MuiSvgIcon-root, &.active .MuiSvgIcon-root': {
                            color: '#FCC850'
                          },
                          '&:hover .hoverLine, &.active .hoverLine': {
                            width: '100%'
                          }
                        }}
                      >
                        {item.icon}
                        <Typography variant="h6" fontWeight='bold' color={darkMode ? 'white' : 'black'}>
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
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
