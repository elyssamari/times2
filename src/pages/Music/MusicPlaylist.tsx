/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Grid, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MusicFilterButtons from "./MusicFIlterButtons.tsx";


const finalTheme = createTheme({
  typography: {
    fontFamily: 'Inconsolata, monospace',
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
          fontWeight: theme.typography.fontWeightBold,
          color: 'gray',
          '&.Mui-selected': {
            color: '#37352f',
          },
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#37352f',
        },
      },
    },
  },
});

export default function MusicPlaylist() {
  const [value, setValue] = useState("1");
  const [filterButton, setFilterButton] = useState("For us");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredPlaylists = playlist.filter(
    item => (value === "1" || item.type.toLowerCase() === value.toLowerCase()) && (item.filter === filterButton || item.filter === 'For us')
  );

  return (
    <ThemeProvider theme={finalTheme}>
      <Grid container padding='24px 24px' direction='column'>
        <Grid item>
          <Typography variant="h3" fontWeight='bold' align='center'>
            Music Playlist
          </Typography>
        </Grid>
        <Grid item>
          <Box sx={{ padding: '0px 24' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: '#302D45' }}>
                <TabList onChange={handleChange}>
                  <Tab label="All" value="1" />
                  <Tab label="Artist" value="Artist" />
                  <Tab label="Albums" value="Albums" />
                  <Tab label="Playlist" value="Playlist" />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ padding: '24px 0px' }}>
                <MusicFilterButtons filterButton={filterButton} setFilterButton={setFilterButton} />
                <Box sx={{ marginTop: 2 }}>
                  <Grid container spacing={2}>
                    {filteredPlaylists.map((item, index) => (
                      <Grid item key={index}>
                        {item.playlist}
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel value="Artist" sx={{ padding: '24px 0px' }}>
                <MusicFilterButtons filterButton={filterButton} setFilterButton={setFilterButton} />
                <Box sx={{ marginTop: 2 }}>
                  <Grid container spacing={2}>
                    {filteredPlaylists.map((item, index) => (
                      <Grid item key={index}>
                        {item.playlist}
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel value="Albums" sx={{ padding: '24px 0px' }}>
                <MusicFilterButtons filterButton={filterButton} setFilterButton={setFilterButton} />
                <Box sx={{ marginTop: 2 }}>
                  <Grid container spacing={2}>
                    {filteredPlaylists.map((item, index) => (
                      <Grid item key={index}>
                        {item.playlist}
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel value="Playlist" sx={{ padding: '24px 0px' }}>
                <MusicFilterButtons filterButton={filterButton} setFilterButton={setFilterButton} />
                <Box sx={{ marginTop: 2 }}>
                  <Grid container spacing={2}>
                    {filteredPlaylists.map((item, index) => (
                      <Grid item key={index}>
                        {item.playlist}
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

const playlist = [
  {
    playlist: <iframe src="https://open.spotify.com/embed/album/6f6tko6NWoH00cyFOl4VYQ?utm_source=generator"  width='430' height="477" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: 'For us', type: 'Albums', title:'The Divine Feminine'
  },
  {
    playlist: <iframe src="https://open.spotify.com/embed/playlist/3A93rFctAirn5VTO8WSOz0?utm_source=generator" width='430' height="477" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: 'For us', type: 'Playlist', title: '(つ・▽・)つ⊂(・▽・⊂)'
  },
  {
    playlist: <iframe src="https://open.spotify.com/embed/playlist/06tCWiOWTnuTfoKwHB8Byl?utm_source=generator"  width='430' height="477"
      frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: 'For us', type: 'Playlist', title: 'minecraft music'
  },
  {
    playlist: <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator"  width='430' height="477" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: 'For us', type: 'Playlist', title: 'lofi beats'
  },
  {
    playlist:<iframe src="https://open.spotify.com/embed/playlist/7s6ZwbUBvR2wFwZxKY9wnr?utm_source=generator"width='430' height="477"  frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: `Elyssa's`, type: 'Playlist', title: 'Animal Crossing Lofi Hiphop Chill Music'
  },  
  {
    playlist: <iframe src="https://open.spotify.com/embed/album/5wtE5aLX5r7jOosmPhJhhk?utm_source=generator" width='430' height="477" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: `Joshua's`, type: 'Albums', title: 'Swimming'
  },
   {
    playlist: <iframe src="https://open.spotify.com/embed/album/5sY6UIQ32GqwMLAfSNEaXb?utm_source=generator" width='430' height="477" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> ,
    filter: `Joshua's`, type: 'Albums', title: 'Circles'
  }, 
   {
    playlist: <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3Cn7Uc?utm_source=generator" width='430' height="477" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: `Joshua's`, type: 'Artist', title: "This is Vince Staples"
  },
  {
    playlist: <iframe src="https://open.spotify.com/embed/playlist/1Fnj4hRO23y6VNPN9YpYkp?utm_source=generator" width='430' height="477"  frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: `Elyssa's`, type: 'Playlist', title:' wuv wuv'
  },
  {
    playlist: <iframe src="https://open.spotify.com/embed/playlist/0i1P683yp5cMVO2DrvLrGr?utm_source=generator" width='430' height="477" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: `Elyssa's`, type: 'Playlist', title: 'stay comfy'
  },
  {
    playlist: <iframe width='430' height="477" src="https://www.youtube.com/embed/zhDwjnYZiCo?si=5gCflQnWN1U5QIdp" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>,
    filter: `For us`, type: 'Playlist', title: 'Ghibli Coffee Shop'
  },
  {
    playlist: <iframe width='430' height="477" src="https://www.youtube.com/embed/sfPMiX5OcvM?si=Pu1C9b2n7olqDPPl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>,
    filter: `Elyssa's`, type: 'Playlist', title: '【フリーbgm】バタフライピー【2時間】-さりい-'
  },
  {
    playlist: <iframe src="https://open.spotify.com/embed/playlist/7rmZRne7RYcSWU6O8OZvGj?utm_source=generator"width='430' height="477" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: `Elyssa's`, type: 'Playlist', title: 'throwbacks'
  },
  {
    playlist: <iframe src="https://open.spotify.com/embed/playlist/28BE3XWhDJdnAGKybZIJPK?utm_source=generator" width='430' height="477" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: `For us`, type: 'Playlist', title: 'Pokemon Lofi and Chill'
  },
  {
    playlist: <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2NufN6?utm_source=generator"  width='430' height="477" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> ,
    filter: `Joshua's`, type: 'Artist', title: 'This is Mac Miller'
  },
  {
    playlist: <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3siF1W?utm_source=generator" width='430' height="477" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    filter: `Joshua's`, type: 'Artist', title: 'This is DeathGrips'
  },
];
