import React, { useState } from 'react';
import './App.css';
import ApplicationBar from './layouts/ApplicationBar.tsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import MemoriesGallery from './pages/MemoryGallery/MemoryGallery.tsx';
import MusicPlaylist from './pages/Music/MusicPlaylist.tsx';
import AnniversaryCounter from './pages/Counter/AnniversaryCounter.tsx';
import Affirmations from './pages/Affirmations.tsx';
import { Grid } from "@mui/material";
import { useLocation } from 'react-router-dom';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Inconsolata, monospace',
  },
  palette: {
    background: {
      default: '#FFFCF4',
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: 'Inconsolata, monospace',
  },
  palette: {
    background: {
      default: '#FFFFFF',
    },
  },
});

const AppWrapper = ({ children, darkMode }) => {
  const location = useLocation();
  
  const backgrounds = {
    '/': { type: 'color', value: darkMode ? '#0F0F0F' : '#FFFCF4', borderTop: 'none' },
    '/memories-gallery': { type: 'color', value: darkMode ? '#0F0F0F' : '#FFFCF4', borderTop: 'solid #37352f' },
    '/music-playlist': { type: 'color', value: darkMode ? '#0F0F0F' : '#FFFCF4', borderTop: 'solid #37352f' },
    '/couple-counter': { type: 'color', value: darkMode ? '#0F0F0F' : '#FFFCF4', borderTop: 'solid #37352f' },
    '/messages': { type: 'color', value: darkMode ? '#0F0F0F' : '#FFFCF4', borderTop: 'solid #37352f' },
  };

  const background = backgrounds[location.pathname] || { type: 'color', value: darkMode ? '#0F0F0F' : '#FFFFFF' };

  const backgroundStyle = background.type === 'image'
    ? { backgroundImage: `url(${background.value})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }
    : { backgroundColor: background.value, borderTop: background.borderTop };

  return (
    <div style={{
      position: 'relative',
      ...backgroundStyle,
      height: '100%',
      minHeight: '100vh',
      width: '100%',
    }}>
      <Grid container padding="0px 24px">
        {children}
      </Grid>
    </div>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ApplicationBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<AppWrapper darkMode={darkMode}><Home darkMode={darkMode} /></AppWrapper>} />
          <Route path="/memories-gallery" element={<AppWrapper darkMode={darkMode}><MemoriesGallery darkMode={darkMode} /></AppWrapper>} />
          <Route path="/music-playlist" element={<AppWrapper darkMode={darkMode}><MusicPlaylist darkMode={darkMode}/></AppWrapper>} />
          <Route path="/couple-counter" element={<AppWrapper darkMode={darkMode}><AnniversaryCounter darkMode={darkMode}/></AppWrapper>} />
          <Route path="/messages" element={<AppWrapper darkMode={darkMode}><Affirmations/></AppWrapper>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
