import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import FilterButtons from './FilterButtons.tsx';
import Gallery from './Gallery.tsx';


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
export default function MemoryGallery() {
  const [value, setValue] = useState('1');
  const [itemData, setItemData] = useState(() => {
    const savedData = localStorage.getItem('itemData');
    return savedData ? JSON.parse(savedData) : itemDataInitial;
  });
  const [filterButton, setFilterButton] = useState('Latest');

  useEffect(() => {
    localStorage.setItem('itemData', JSON.stringify(itemData));
  }, [itemData]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const filterItems = () => {
    let filteredItems = itemData;
  
    if (value === '2') {
      filteredItems = filteredItems.filter(item => item.type === 'photo');
    } else if (value === '3') {
      filteredItems = filteredItems.filter(item => item.type === 'live photo');
    } else if (value === '4') {
      filteredItems = filteredItems.filter(item => item.type === 'video');
    }
  
    if (filterButton === 'Latest') {
      filteredItems = filteredItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (filterButton === 'Oldest') {
      filteredItems = filteredItems.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (filterButton === 'Favorites') {
      filteredItems = filteredItems.filter(item => item.favorite);
    }
  
    return filteredItems;
  };
  

  const toggleFavorite = (img) => {
    const updatedItems = itemData.map(item =>
      item.img === img ? { ...item, favorite: !item.favorite } : item
    );
    setItemData(updatedItems);
  };

  return (
    <ThemeProvider theme={finalTheme}>
      <Grid container padding='24px 24px' direction='column'>
        <Grid item>
          <Typography variant="h3" fontWeight='bold' align='center'>
            Memories Gallery
          </Typography>
        </Grid>
        <Grid item>
          <Box
            sx={{
              padding: '0px 24',
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: '#302D45' }}>
                <TabList onChange={handleChange}>
                  <Tab label="All" value="1" />
                  <Tab label="Photos" value="2" />
                  <Tab label="Live Photos" value="3" />
                  <Tab label="Videos" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ padding: '24px 0px' }}>
                <FilterButtons filterButton={filterButton} setFilterButton={setFilterButton} />
                <Gallery items={filterItems()} toggleFavorite={toggleFavorite} />
              </TabPanel>
              <TabPanel value="2" sx={{ padding: '24px 0px' }}>
                <FilterButtons filterButton={filterButton} setFilterButton={setFilterButton} />
                <Gallery items={filterItems()} toggleFavorite={toggleFavorite} />
              </TabPanel>
              <TabPanel value="3" sx={{ padding: '24px 0px' }}>
                <FilterButtons filterButton={filterButton} setFilterButton={setFilterButton} />
                <Gallery items={filterItems()} toggleFavorite={toggleFavorite} />
              </TabPanel>
              <TabPanel value="4" sx={{ padding: '24px 0px' }}>
                <FilterButtons filterButton={filterButton} setFilterButton={setFilterButton} />
                <Gallery items={filterItems()} toggleFavorite={toggleFavorite} />
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

const itemDataInitial  = [
  { img: `/GalleryPhotos/220908.JPEG`, title: '220908', type: 'photo', date: '2022-09-08', width: 1536, height: 2048 },
  { img: '/GalleryPhotos/221119.JPEG', title: '221119', type: 'photo', date: '2022-11-19', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/221124.JPEG', title: '221124', type: 'photo', date: '2022-11-24', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/221208-video.MP4', title: '221208-video', type: 'video', date: '2022-12-08', width: 496, height: 896, favorite: false },
  { img: '/GalleryPhotos/221210-1.JPEG', title: '221210-1', type: 'photo', date: '2022-12-10', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/221210-2.JPEG', title: '221210-2', type: 'photo', date: '2022-12-10', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/221210-3-live.MP4', title: '221210-3-live', type: 'live photo', date: '2022-12-10', width: 496, height: 896, favorite: false },
  { img: '/GalleryPhotos/221210-4.JPEG', title: '221210-4', type: 'photo', date: '2022-12-10', favorite: false },
  { img: '/GalleryPhotos/221210-5-live.MP4', title: '221210-5-live', type: 'live photo', date: '2022-12-10', favorite: false },
  { img: '/GalleryPhotos/221215-1.JPEG', title: '221215-1', type: 'photo', date: '2022-12-15', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/221215-2.JPEG', title: '221215-2', type: 'photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-3.JPEG', title: '221215-3', type: 'photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-4.JPEG', title: '221215-4', type: 'photo', date: '2022-12-15', width: 1330, height: 2365, favorite: false },
  { img: '/GalleryPhotos/221215-4-live.MP4', title: '221215-4-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-5.JPEG', title: '221215-5', type: 'photo', date: '2022-12-15', width: 1330, height: 2365, favorite: false },
  { img: '/GalleryPhotos/221215-5-live.MP4', title: '221215-5-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-6.JPEG', title: '221215-6', type: 'photo', date: '2022-12-15', width: 1330, height: 2365, favorite: false },
  { img: '/GalleryPhotos/221215-6-live.MP4', title: '221215-6-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-7.JPEG', title: '221215-7', type: 'photo', date: '2022-12-15', width: 1330, height: 2365, favorite: false },
  { img: '/GalleryPhotos/221215-8.MP4', title: '221215-8-video', type: 'video', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-9.JPEG', title: '221215-9', type: 'photo', date: '2022-12-15', width: 1330, height: 2365, favorite: false },
  { img: '/GalleryPhotos/221215-9-live.MP4', title: '221215-9-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-10.JPEG', title: '221215-10', type: 'photo', date: '2022-12-15', width: 1330, height: 2365, favorite: false },
  { img: '/GalleryPhotos/221215-10-live.MP4', title: '221215-10-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-11.JPEG', title: '221215-11', type: 'photo', date: '2022-12-15', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/221215-12.JPEG', title: '221215-12', type: 'photo', date: '2022-12-15', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/221215-13.JPEG', title: '221215-13', type: 'photo', date: '2022-12-15', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/221215-14.JPEG', title: '221215-14', type: 'photo', date: '2022-12-15', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/221215-15.JPEG', title: '221215-15', type: 'photo', date: '2022-12-15', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/221215-16.JPEG', title: '221215-16', type: 'photo', date: '2022-12-15', width: 1330, height: 2365, favorite: false },
  { img: '/GalleryPhotos/221215-16-live.MP4', title: '221215-16-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-17.JPEG', title: '221215-17', type: 'photo', date: '2022-12-15', width: 1330, height: 2365, favorite: false },
  { img: '/GalleryPhotos/221215-17-live.MP4', title: '221215-17-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-18.JPEG', title: '221215-18', type: 'photo', date: '2022-12-15', width: 1330, height: 2365, favorite: false },
  { img: '/GalleryPhotos/221215-18-live.MP4', title: '221215-18-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-19.JPEG', title: '221215-19', type: 'photo', date: '2022-12-15', width: 1330, height: 2365, favorite: false },
  { img: '/GalleryPhotos/221215-19-live.MP4', title: '221215-19-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-20.JPEG', title: '221215-20', type: 'photo', date: '2022-12-15', width: 2365, height: 1330, favorite: false },
  { img: '/GalleryPhotos/221215-20-live.MP4', title: '221215-20-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-21.JPEG', title: '221215-21', type: 'photo', date: '2022-12-15', width: 2365, height: 1330, favorite: false },
  { img: '/GalleryPhotos/221215-21-live.MP4', title: '221215-21-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-22.JPEG', title: '221215-22', type: 'photo', date: '2022-12-15', width: 2365, height: 1330, favorite: false },
  { img: '/GalleryPhotos/221215-22-live.MP4', title: '221215-22-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221215-23.JPEG', title: '221215-23', type: 'photo', date: '2022-12-15', width: 2365, height: 1330, favorite: false },
  { img: '/GalleryPhotos/221215-23-live.MP4', title: '221215-23-live', type: 'live photo', date: '2022-12-15', favorite: false },
  { img: '/GalleryPhotos/221218-1.JPEG', title: '221218-1', type: 'photo', date: '2022-12-18', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/221218-2.JPEG', title: '221218-2', type: 'photo', date: '2022-12-18', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/221224.JPEG', title: '221224', type: 'photo', date: '2022-12-24', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230107-1.JPEG', title: '230107-1', type: 'photo', date: '2023-01-07', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230107-2.JPEG', title: '230107-2', type: 'photo', date: '2023-01-07', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230107-3.JPEG', title: '230107-3', type: 'photo', date: '2023-01-07', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230107-4.JPEG', title: '230107-4', type: 'photo', date: '2023-01-07', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230107-5.JPEG', title: '230107-5', type: 'photo', date: '2023-01-07', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230107-6.JPEG', title: '230107-6', type: 'photo', date: '2023-01-07', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230107-7.JPEG', title: '230107-7', type: 'photo', date: '2023-01-07', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230107-8.JPEG', title: '230107-8', type: 'photo', date: '2023-01-07', width: 2316, height: 3088, favorite: false },
  { img: '/GalleryPhotos/230107-9-video.MP4', title: '230107-9-video', type: 'video', date: '2023-01-07', favorite: false },
  { img: '/GalleryPhotos/230128.JPEG', title: '230128', type: 'photo', date: '2023-01-28', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/230128-live.MP4', title: '230128-live', type: 'live photo', date: '2023-01-28', favorite: false },
  { img: '/GalleryPhotos/230209.JPEG', title: '230209', type: 'photo', date: '2023-02-09', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/230212-1-video.MP4', title: '230212-1-video', type: 'video', date: '2023-02-12', favorite: false },
  { img: '/GalleryPhotos/230212-2-video.MP4', title: '230212-2-video', type: 'video', date: '2023-02-12', favorite: false },
  { img: '/GalleryPhotos/230212-3-video.MP4', title: '230212-3-video', type: 'video', date: '2023-02-12', favorite: false },
  { img: '/GalleryPhotos/230328.MP4', title: '230328', type: 'video', date: '2023-03-28', favorite: false },
  { img: '/GalleryPhotos/230425.JPEG', title: '230425', type: 'photo', date: '2023-04-25', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230524.PNG', title: '230524', type: 'photo', date: '2023-05-24', width: 2436, height: 1125, favorite: false },
  { img: '/GalleryPhotos/230603-1.JPEG', title: '230603-1', type: 'photo', date: '2023-06-03', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230603-2.JPEG', title: '230603-2', type: 'photo', date: '2023-06-03', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230603-3.JPEG', title: '230603-3', type: 'photo', date: '2023-06-03', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230607.JPEG', title: '230607', type: 'photo', date: '2023-06-07', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230608.PNG', title: '230608', type: 'photo', date: '2023-06-08', width: 2388, height: 1668, favorite: false },
  { img: '/GalleryPhotos/230611.JPEG', title: '230611', type: 'photo', date: '2023-06-11', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230613-1.JPEG', title: '230613-1', type: 'photo', date: '2023-06-13', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230613-2.JPEG', title: '230613-2', type: 'photo', date: '2023-06-13', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230613-3.JPEG', title: '230613-3', type: 'photo', date: '2023-06-13', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230613-4.JPEG', title: '230613-4', type: 'photo', date: '2023-06-13', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230613-5.JPEG', title: '230613-5', type: 'photo', date: '2023-06-13', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230613-6.MP4', title: '230613-6', type: 'video', date: '2023-06-13', favorite: false },
  { img: '/GalleryPhotos/230629-1.JPEG', title: '230629-1', type: 'photo', date: '2023-06-29', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230629-2.JPEG', title: '230629-2', type: 'photo', date: '2023-06-29', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230629-3.JPEG', title: '230629-3', type: 'photo', date: '2023-06-29', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230703-video.MP4', title: '230703-video', type: 'video', date: '2023-07-03', favorite: false },
  { img: '/GalleryPhotos/230707-1.JPEG', title: '230707-1', type: 'photo', date: '2023-07-07', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230707-2.MP4', title: '230707-2', type: 'live photo', date: '2023-07-07', favorite: false },
  { img: '/GalleryPhotos/230707-3.JPEG', title: '230707-3', type: 'photo', date: '2023-07-07', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230707-4.MP4', title: '230707-4', type: 'live photo', date: '2023-07-07', favorite: false },
  { img: '/GalleryPhotos/230713.JPEG', title: '230713', type: 'photo', date: '2023-07-13', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230722-video.MP4', title: '230722-video', type: 'video', date: '2023-07-22', favorite: false },
  { img: '/GalleryPhotos/230723-1.JPEG', title: '230723-1', type: 'photo', date: '2023-07-23', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230723-2.JPEG', title: '230723-2', type: 'photo', date: '2023-07-23', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230723-3-video.MP4', title: '230723-3-video', type: 'video', date: '2023-07-23', favorite: false },
  { img: '/GalleryPhotos/230723-4-video.MP4', title: '230723-4-video', type: 'video', date: '2023-07-23', favorite: false },
  { img: '/GalleryPhotos/230723-5-video.MP4', title: '230723-5-video', type: 'video', date: '2023-07-23', favorite: false },
  { img: '/GalleryPhotos/230731-video.MP4', title: '230731-video', type: 'video', date: '2023-07-31', favorite: false },
  { img: '/GalleryPhotos/230808.JPEG', title: '230808', type: 'photo', date: '2023-08-08', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230809-1.JPEG', title: '230809-1', type: 'photo', date: '2023-08-09', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230809-2.JPEG', title: '230809-2', type: 'photo', date: '2023-08-09', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230809-3.JPEG', title: '230809-3', type: 'photo', date: '2023-08-09', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230809-4-video.MP4', title: '230809-4-video', type: 'video', date: '2023-08-09', favorite: false },
  { img: '/GalleryPhotos/230816-1.JPEG', title: '230816-1', type: 'photo', date: '2023-08-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230816-2.JPEG', title: '230816-2', type: 'photo', date: '2023-08-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230816-3.JPEG', title: '230816-3', type: 'photo', date: '2023-08-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230816-4.JPEG', title: '230816-4', type: 'photo', date: '2023-08-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230816-5.JPEG', title: '230816-5', type: 'photo', date: '2023-08-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230816-6.JPEG', title: '230816-6', type: 'photo', date: '2023-08-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230816-7.JPEG', title: '230816-7', type: 'photo', date: '2023-08-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230816-8-video.MP4', title: '230816-8-video', type: 'video', date: '2023-08-16', favorite: false },
  { img: '/GalleryPhotos/230819.JPEG', title: '230819', type: 'photo', date: '2023-08-19', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230908-1.JPEG', title: '230908-1', type: 'photo', date: '2023-09-08', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230908-2.JPEG', title: '230908-2', type: 'photo', date: '2023-09-08', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/230929.JPEG', title: '230929', type: 'photo', date: '2023-09-29', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231001-video.MP4', title: '231001-video', type: 'video', date: '2023-10-01', favorite: false },
  { img: '/GalleryPhotos/231008-1-video.MP4', title: '231008-1-video', type: 'video', date: '2023-10-08', favorite: false },
  { img: '/GalleryPhotos/231008-2.JPEG', title: '231008-2', type: 'photo', date: '2023-10-08', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231008-3.JPEG', title: '231008-3', type: 'photo', date: '2023-10-08', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231008-4.JPEG', title: '231008-4', type: 'photo', date: '2023-10-08', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231008-5.JPEG', title: '231008-5', type: 'photo', date: '2023-10-08', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231013.JPEG', title: '231013', type: 'photo', date: '2023-10-13', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231018-video.MP4', title: '231018-video', type: 'video', date: '2023-10-18', favorite: false },
  { img: '/GalleryPhotos/231019-1.JPEG', title: '231019-1', type: 'photo', date: '2023-10-19', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231019-2.JPEG', title: '231019-2', type: 'photo', date: '2023-10-19', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-1.JPEG', title: '231020-1', type: 'photo', date: '2023-10-20', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-2.JPEG', title: '231020-2', type: 'photo', date: '2023-10-20', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-3.JPEG', title: '231020-3', type: 'photo', date: '2023-10-20', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-4.JPEG', title: '231020-4', type: 'photo', date: '2023-10-20', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-5.JPEG', title: '231020-5', type: 'photo', date: '2023-10-20', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-6-video.MP4', title: '231020-6-video', type: 'video', date: '2023-10-20', favorite: false },
  { img: '/GalleryPhotos/231020-7.JPEG', title: '231020-7', type: 'photo', date: '2023-10-20', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/231020-8.JPEG', title: '231020-8', type: 'photo', date: '2023-10-20', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/231020-9.JPEG', title: '231020-9', type: 'photo', date: '2023-10-20', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-10.JPEG', title: '231020-10', type: 'photo', date: '2023-10-20', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-11.JPEG', title: '231020-11', type: 'photo', date: '2023-10-20', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-12.JPEG', title: '231020-12', type: 'photo', date: '2023-10-20', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-13.JPEG', title: '231020-13', type: 'photo', date: '2023-10-20', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-14.JPEG', title: '231020-14', type: 'photo', date: '2023-10-20', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231020-15-live.MP4', title: '231020-15-live', type: 'live photo', date: '2023-10-20', favorite: false },
  { img: '/GalleryPhotos/231021-1.JPEG', title: '231021-1', type: 'photo', date: '2023-10-21', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231021-2.JPEG', title: '231021-2', type: 'photo', date: '2023-10-21', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231021-3.JPEG', title: '231021-3', type: 'photo', date: '2023-10-21', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231021-3-live.MP4', title: '231021-3-live', type: 'live photo', date: '2023-10-21', favorite: false },
  { img: '/GalleryPhotos/231021-4.JPEG', title: '231021-4', type: 'photo', date: '2023-10-21', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231021-4-live.MP4', title: '231021-4-live', type: 'live photo', date: '2023-10-21', favorite: false },
  { img: '/GalleryPhotos/231021-5.JPEG', title: '231021-5', type: 'photo', date: '2023-10-21', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231021-5-live.MP4', title: '231021-5-live', type: 'live photo', date: '2023-10-21', favorite: false },
  { img: '/GalleryPhotos/231024-1.PNG', title: '231024-1', type: 'photo', date: '2023-10-24', width: 1125, height: 2436, favorite: false },
  { img: '/GalleryPhotos/231024-2.PNG', title: '231024-2', type: 'photo', date: '2023-10-24', width: 1125, height: 2436, favorite: false },
  { img: '/GalleryPhotos/231024-3.PNG', title: '231024-3', type: 'photo', date: '2023-10-24', width: 1125, height: 2436, favorite: false },
  { img: '/GalleryPhotos/231025.JPEG', title: '231025', type: 'photo', date: '2023-10-25', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231031-1.JPEG', title: '231031-1', type: 'photo', date: '2023-10-31', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231031-3.JPEG', title: '231031-3', type: 'photo', date: '2023-10-31', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231031-5.JPEG', title: '231031-5', type: 'photo', date: '2023-10-31', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231031-5-live.MP4', title: '231031-5-live', type: 'live photo', date: '2023-10-31', favorite: false },
  { img: '/GalleryPhotos/231031-6.JPEG', title: '231031-6', type: 'photo', date: '2023-10-31', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231031-7.JPEG', title: '231031-7', type: 'photo', date: '2023-10-31', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231031-8.JPEG', title: '231031-8', type: 'photo', date: '2023-10-31', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/231031-8-live.MP4', title: '231031-8-live', type: 'live photo', date: '2023-10-31', favorite: false },
  { img: '/GalleryPhotos/231031-9.JPEG', title: '231031-9', type: 'photo', date: '2023-10-31', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231031-9-live.MP4', title: '231031-9-live', type: 'live photo', date: '2023-10-31', favorite: false },
  { img: '/GalleryPhotos/231106-1.JPG', title: '231106-1', type: 'photo', date: '2023-11-06', width: 1980, height: 3520, favorite: false },
  { img: '/GalleryPhotos/231106-1-video.MP4', title: '231106-1-video', type: 'video', date: '2023-11-06', favorite: false },
  { img: '/GalleryPhotos/231111-1.JPEG', title: '231106-1', type: 'photo', date: '2023-11-11', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231111-2.JPEG', title: '231106-2', type: 'photo', date: '2023-11-11', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231117.PNG', title: '231117', type: 'photo', date: '2023-11-17', width: 1125, height: 2436, favorite: false },
  { img: '/GalleryPhotos/231119.JPEG', title: '231119', type: 'photo', date: '2023-11-19', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/231119-live.MP4', title: '231119', type: 'live photo', date: '2023-11-19', favorite: false },
  { img: '/GalleryPhotos/231121.JPEG', title: '231121', type: 'photo', date: '2023-11-21', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231129.JPEG', title: '231129', type: 'photo', date: '2023-11-29', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231129-live.MP4', title: '231129', type: 'live photo', date: '2023-11-29', favorite: false },
  { img: '/GalleryPhotos/231204.JPEG', title: '231204', type: 'photo', date: '2023-12-04', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231210-1.JPEG', title: '231210-1', type: 'photo', date: '2023-12-10', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/231210-2.JPEG', title: '231210-2', type: 'photo', date: '2023-12-10', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/231210-3.JPEG', title: '231210-3', type: 'photo', date: '2023-12-10', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/231210-3-live.MP4', title: '231210-3-live', type: 'live photo', date: '2023-12-10', favorite: false },
  { img: '/GalleryPhotos/231213.JPEG', title: '231213', type: 'photo', date: '2023-12-13', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231213-live.MP4', title: '231213-live', type: 'live photo', date: '2023-12-13', favorite: false },
  { img: '/GalleryPhotos/231215.JPEG', title: '231215', type: 'photo', date: '2023-12-15', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231219-1-video.MP4', title: '231219-1-video', type: 'video', date: '2023-12-19', favorite: false },
  { img: '/GalleryPhotos/231219-2-video.MP4', title: '231219-2-video', type: 'video', date: '2023-12-19', favorite: false },
  { img: '/GalleryPhotos/231221-1.JPEG', title: '231221-1', type: 'photo', date: '2023-12-21', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231221-1-live.MP4', title: '231221-1-live', type: 'live photo', date: '2023-12-21', favorite: false },
  { img: '/GalleryPhotos/231221-2.JPEG', title: '231221-2', type: 'photo', date: '2023-12-21', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231221-2-live.MP4', title: '231221-2-live', type: 'live photo', date: '2023-12-21', favorite: false },
  { img: '/GalleryPhotos/231221-3.JPEG', title: '231221-3', type: 'photo', date: '2023-12-21', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/231221-3-live.MP4', title: '231221-3-live', type: 'live photo', date: '2023-12-21', favorite: false },
  { img: '/GalleryPhotos/231225-video.MP4', title: '231225-video', type: 'video', date: '2023-12-25', favorite: false },
  { img: '/GalleryPhotos/240101-1.JPEG', title: '240101-1', type: 'photo', date: '2024-01-01', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240101-1-live.MP4', title: '240101-1-live', type: 'live photo', date: '2024-01-01', favorite: false },
  { img: '/GalleryPhotos/240101-2.JPEG', title: '240101-2', type: 'photo', date: '2024-01-01', width: 2048, height: 1536 },
  { img: '/GalleryPhotos/240101-2-live.MP4', title: '240101-2-live', type: 'live photo', date: '2024-01-01', favorite: false },
  { img: '/GalleryPhotos/240101-3.JPEG', title: '240101-3', type: 'photo', date: '2024-01-01', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240101-3-live.MP4', title: '240101-3-live', type: 'live photo', date: '2024-01-01', favorite: false },
  { img: '/GalleryPhotos/240101-4.JPEG', title: '240101-4', type: 'photo', date: '2024-01-01', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240101-4-live.MP4', title: '240101-4', type: 'live photo', date: '2024-01-01', favorite: false }, //not showing ;-;
  { img: '/GalleryPhotos/240126-1.JPEG', title: '240126-1', type: 'photo', date: '2024-01-26', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240126-2.MP4', title: '240126-2', type: 'video', date: '2024-01-26', favorite: false },
  { img: '/GalleryPhotos/240202-1.JPEG', title: '240202-1', type: 'photo', date: '2024-02-02', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240202-2.JPEG', title: '240202-2', type: 'photo', date: '2024-02-02', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240203.JPEG', title: '240203', type: 'photo', date: '2024-02-03', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240205.JPEG', title: '240205', type: 'photo', date: '2024-02-05', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240209.JPEG', title: '240209', type: 'photo', date: '2024-02-09', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240210-1.JPEG', title: '240210-1', type: 'photo', date: '2024-02-10', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240210-2.JPEG', title: '240210-2', type: 'photo', date: '2024-02-10', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240211.JPEG', title: '240211', type: 'photo', date: '2024-02-11', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240213-1.JPEG', title: '240213-1', type: 'photo', date: '2024-02-13', width: 282, height: 612, favorite: false },
  { img: '/GalleryPhotos/240213-1-live.MP4', title: '240213-1-live', type: 'live photo', date: '2024-02-13', favorite: false },
  { img: '/GalleryPhotos/240213-2.JPEG', title: '240213-2', type: 'photo', date: '2024-02-13', width: 282, height: 612, favorite: false },
  { img: '/GalleryPhotos/240213-2-live.MP4', title: '240213-2-live', type: 'live photo', date: '2024-02-13', favorite: false },
  { img: '/GalleryPhotos/240213-3.JPEG', title: '240213-3', type: 'photo', date: '2024-02-13', width: 282, height: 612, favorite: false },
  { img: '/GalleryPhotos/240213-4.MP4', title: '231202-4', type: 'video', date: '2023-12-02', favorite: false },
  { img: '/GalleryPhotos/240213-5.JPEG', title: '240213-5', type: 'photo', date: '2024-02-13', width: 282, height: 612, favorite: false },
  { img: '/GalleryPhotos/240213-5-live.MP4', title: '240213-5-live', type: 'live photo', date: '2024-02-13', favorite: false },
  { img: '/GalleryPhotos/240213-6.JPEG', title: '240213-6', type: 'photo', date: '2024-02-13', width: 282, height: 612, favorite: false },
  { img: '/GalleryPhotos/240213-6-live.MP4', title: '240213-6-live', type: 'live photo', date: '2024-02-13', favorite: false },
  { img: '/GalleryPhotos/240214.JPEG', title: '240214', type: 'photo', date: '2024-02-14', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240216-1-video.MP4', title: '240216-1-video', type: 'video', date: '2024-02-16', favorite: false },
  { img: '/GalleryPhotos/240216-2-video.MP4', title: '240216-2-video', type: 'video', date: '2024-02-16', favorite: false },
  { img: '/GalleryPhotos/240216-3.JPEG', title: '240216-3', type: 'photo', date: '2024-02-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240216-4.JPEG', title: '240216-4', type: 'photo', date: '2024-02-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240216-5.JPEG', title: '240216-5', type: 'photo', date: '2024-02-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240216-6.JPEG', title: '240216-6', type: 'photo', date: '2024-02-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240216-7.JPEG', title: '240216-7', type: 'photo', date: '2024-02-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240216-8.JPEG', title: '240216-8', type: 'photo', date: '2024-02-16', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240217.JPEG', title: '240217', type: 'photo', date: '2024-02-17', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240218-1.JPEG', title: '240218-1', type: 'photo', date: '2024-02-18', width: 3024, height: 4032, favorite: false },
  { img: '/GalleryPhotos/240218-2.JPEG', title: '240218-2', type: 'photo', date: '2024-02-18', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240218-3.JPEG', title: '240218-3', type: 'photo', date: '2024-02-18', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240218-4.JPEG', title: '240218-4', type: 'photo', date: '2024-02-18', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240225-1.JPEG', title: '240225-1', type: 'photo', date: '2024-02-25', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240225-2.JPEG', title: '240225-2', type: 'photo', date: '2024-02-25', width: 2048, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240225-3.JPEG', title: '240225-3', type: 'photo', date: '2024-02-25', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240301.JPEG', title: '240301', type: 'photo', date: '2024-03-01', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240301-1-video.MP4', title: '240301-1-video', type: 'video', date: '2024-03-01', favorite: false },
  { img: '/GalleryPhotos/240301-2-video.MP4', title: '240301-2-video', type: 'video', date: '2024-03-01', favorite: false },
  { img: '/GalleryPhotos/240301-3.JPEG', title: '240301-3', type: 'photo', date: '2024-03-01', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240301-4.JPEG', title: '240301-4', type: 'photo', date: '2024-03-01', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240301-5.JPEG', title: '240301-5', type: 'photo', date: '2024-03-01', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240301-6.JPEG', title: '240301-6', type: 'photo', date: '2024-03-01', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240301-7.JPEG', title: '240301-7', type: 'photo', date: '2024-03-01', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240302-1.JPEG', title: '240302-1', type: 'photo', date: '2024-03-02', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240302-2.JPEG', title: '240302-2', type: 'photo', date: '2024-03-02', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240302-2-video.MP4', title: '240302-2-video', type: 'video', date: '2024-03-02', favorite: false },
  { img: '/GalleryPhotos/240302-3.JPEG', title: '240302-3', type: 'photo', date: '2024-03-02', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240302-3-video.MP4', title: '240302-3-video', type: 'video', date: '2024-03-02', favorite: false },
  { img: '/GalleryPhotos/240303-video.MP4', title: '240303-video', type: 'video', date: '2024-03-03', favorite: false },
  { img: '/GalleryPhotos/240311-1.JPEG', title: '240311-1', type: 'photo', date: '2024-03-11', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240311-2.JPEG', title: '240311-2', type: 'photo', date: '2024-03-11', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240313-1.JPEG', title: '240313-1', type: 'photo', date: '2024-03-13', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240313-2.JPEG', title: '240313-2', type: 'photo', date: '2024-03-13', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240313-3.JPEG', title: '240313-3', type: 'photo', date: '2024-03-13', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240313-4.JPEG', title: '240313-4', type: 'photo', date: '2024-03-13', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240317-1.JPEG', title: '240317-1', type: 'photo', date: '2024-03-17', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240317-2-video.MP4', title: '240317-2-video', type: 'video', date: '2024-03-17', favorite: false },
  { img: '/GalleryPhotos/240317-3.JPEG', title: '240317-3', type: 'photo', date: '2024-03-17', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240317-4.JPEG', title: '240317-4', type: 'photo', date: '2024-03-17', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240317-5.JPEG', title: '240317-5', type: 'photo', date: '2024-03-17', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240327-1.JPEG', title: '240327-1', type: 'photo', date: '2024-03-27', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240328-1.JPEG', title: '240328-1', type: 'photo', date: '2024-03-28', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240328-2.JPEG', title: '240328-2', type: 'photo', date: '2024-03-28', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240328-3.JPEG', title: '240328-3', type: 'photo', date: '2024-03-28', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240328-4.JPEG', title: '240328-4', type: 'photo', date: '2024-03-28', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240328-5.JPEG', title: '240328-5', type: 'photo', date: '2024-03-28', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240329.JPEG', title: '240329', type: 'photo', date: '2024-03-29', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240331-1.JPEG', title: '240331-1', type: 'photo', date: '2024-03-31', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240331-2.JPEG', title: '240331-2', type: 'photo', date: '2024-03-31', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240401-video.MP4', title: '240401-video', type: 'video', date: '2024-04-01', favorite: false },
  { img: '/GalleryPhotos/240403.JPEG', title: '240403', type: 'photo', date: '2024-04-03', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240405-1.JPEG', title: '240405-1', type: 'photo', date: '2024-04-05', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240405-2.JPEG', title: '240405-2', type: 'photo', date: '2024-04-05', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240405-3.JPEG', title: '240405-3', type: 'photo', date: '2024-04-05', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240405-4.JPEG', title: '240405-4', type: 'photo', date: '2024-04-05', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240407-video.MP4', title: '240407-video', type: 'video', date: '2024-04-07', favorite: false },
  { img: '/GalleryPhotos/240411-1.JPEG', title: '240411-1', type: 'photo', date: '2024-04-11', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240411-1-live.MP4', title: '240411-1-live', type: 'live photo', date: '2024-04-11', favorite: false },
  { img: '/GalleryPhotos/240411-2.JPEG', title: '240411-2', type: 'photo', date: '2024-04-11', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240411-2-live.MP4', title: '240411-2-live', type: 'live photo', date: '2024-04-11', favorite: false },
  { img: '/GalleryPhotos/240412-1.JPEG', title: '240412-1', type: 'photo', date: '2024-04-12', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240412-2.JPEG', title: '240412-2', type: 'photo', date: '2024-04-12', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240412-3.JPEG', title: '240412-3', type: 'photo', date: '2024-04-12', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240412-4.JPEG', title: '240412-4', type: 'photo', date: '2024-04-12', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240412-5.JPEG', title: '240412-5', type: 'photo', date: '2024-04-12', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240412-6.JPEG', title: '240412-6', type: 'photo', date: '2024-04-12', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240412-7.JPEG', title: '240412-7', type: 'photo', date: '2024-04-12', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240412-8.JPEG', title: '240412-8', type: 'photo', date: '2024-04-12', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240418.JPEG', title: '240418', type: 'photo', date: '2024-04-18', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240419-1.JPEG', title: '240419-1', type: 'photo', date: '2024-04-19', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240419-2.JPEG', title: '240419-2', type: 'photo', date: '2024-04-19', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240419-3.JPEG', title: '240419-3', type: 'photo', date: '2024-04-19', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240419-4.JPEG', title: '240419-4', type: 'photo', date: '2024-04-19', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240419-5.JPEG', title: '240419-5', type: 'photo', date: '2024-04-19', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240423.JPEG', title: '240423', type: 'photo', date: '2024-04-23', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240427.JPEG', title: '240427', type: 'photo', date: '2024-04-27', width: 2048, height: 1536, favorite: false },
  { img: '/GalleryPhotos/240501.JPEG', title: '240501', type: 'photo', date: '2024-05-01', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240504.JPEG', title: '240504', type: 'photo', date: '2024-05-04', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240504-live.MP4', title: '240504-live', type: 'live photo', date: '2024-05-04', favorite: false },
  { img: '/GalleryPhotos/240510.JPEG', title: '240510', type: 'photo', date: '2024-05-10', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240512-1.JPEG', title: '240512-1', type: 'photo', date: '2024-05-12', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240512-2.JPEG', title: '240512-2', type: 'photo', date: '2024-05-12', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240527-1-video.MP4', title: '240527-1-video', type: 'video', date: '2024-05-27', favorite: false },
  { img: '/GalleryPhotos/240527-2-video.MP4', title: '240527-2-video', type: 'video', date: '2024-05-27', favorite: false },
  { img: '/GalleryPhotos/240527-3-video.MP4', title: '240527-3-video', type: 'video', date: '2024-05-27', favorite: false },
  { img: '/GalleryPhotos/240531.JPEG', title: '240531', type: 'photo', date: '2024-05-31', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240604.JPEG', title: '240604', type: 'photo', date: '2024-06-04', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240604-video.MP4', title: '240604', type: 'video', date: '2024-06-04', favorite: false },
  { img: '/GalleryPhotos/240608.JPEG', title: '240608', type: 'photo', date: '2024-06-08', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240608-live.MP4', title: '240608-live', type: 'live photo', date: '2024-06-08', favorite: false },
  { img: '/GalleryPhotos/240611-1.JPEG', title: '240611-1', type: 'photo', date: '2024-06-11', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240612-2.JPEG', title: '240612-2', type: 'photo', date: '2024-06-12', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240612-3.JPEG', title: '240612-3', type: 'photo', date: '2024-06-12', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240612-4.JPEG', title: '240612-4', type: 'photo', date: '2024-06-12', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240612-5.JPEG', title: '240612-5', type: 'photo', date: '2024-06-12', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240612-6.JPEG', title: '240612-6', type: 'photo', date: '2024-06-12', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240612-7.JPEG', title: '240612-7', type: 'photo', date: '2024-06-12', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240612-8.JPEG', title: '240612-8', type: 'photo', date: '2024-06-12', width: 1536, height: 2048, favorite: false },
  { img: '/GalleryPhotos/240618.JPEG', title: '240618', type: 'photo', date: '2024-06-18', width: 1536, height: 2048, favorite: false },
]