import './App.css';
import ApplicationBar from './layouts/ApplicationBar.tsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx'
import MemoriesGallery from './pages/MemoryGallery/MemoryGallery.tsx';
import MusicPlaylist from './pages/Music/MusicPlaylist.tsx';
import AnniversaryCounter from './pages/Counter/AnniversaryCounter.tsx';
import Affirmations from './pages/Affirmations.tsx';
import { Grid } from "@mui/material";
import { useLocation } from 'react-router-dom';


const theme = createTheme({
  typography: {
    fontFamily: 'Inconsolata, monospace',
  },
});

const backgrounds = {
  '/': { type: 'color', value: '#FFFCF4', borderTop: 'none' },
  '/memories-gallery': { type: 'color', value: '#FFFCF4', borderTop: '1px solid #37352f' },
  '/music-playlist': { type: 'color', value: '#FFFCF4', borderTop: 'solid #37352f' },
  '/couple-counter': { type: 'color', value: '#FFFCF4', borderTop: 'solid #37352f'},
  '/messages': { type: 'color', value: '#FFFCF4', borderTop: 'solid #37352f' },
};

const AppWrapper = ({ children }) => {
  const location = useLocation();
  const background = backgrounds[location.pathname] || { type: 'color', value: '#FFFFFF' };

  const backgroundStyle = background.type === 'image'
    ? { backgroundImage: background.value, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: background.opacity }
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ApplicationBar />
        <Routes>
          <Route path="/" element={<AppWrapper><Home /></AppWrapper>} />
          <Route path="/memories-gallery" element={<AppWrapper><MemoriesGallery /></AppWrapper>} />
          <Route path="/music-playlist" element={<AppWrapper><MusicPlaylist /></AppWrapper>} />
          <Route path="/couple-counter" element={<AppWrapper><AnniversaryCounter /></AppWrapper>} />
          <Route path="/messages" element={<AppWrapper><Affirmations /></AppWrapper>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}