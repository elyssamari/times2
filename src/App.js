import React, { useState, useEffect } from "react";
import './App.css';
import ApplicationBar from './layouts/ApplicationBar.tsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Grid } from "@mui/material";
import Home from './pages/Home.tsx';
import MemoriesGallery from './pages/MemoryGallery/MemoryGallery.tsx';
import MusicPlaylist from './pages/Music/MusicPlaylist.tsx';
import AnniversaryCounter from './pages/Counter/AnniversaryCounter.tsx';
import Affirmations from './pages/Affirmations.tsx';
import Sketch from "react-p5";

function StarBackground() {
  const smallStars = [];

  function SmallStar(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.t = Math.random() * Math.PI * 2;
    this.size = Math.random() * 2 + 0.5;

    this.draw = function (p5) {
      p5.noStroke();
      this.t += 0.05;
      const scale = this.size + Math.sin(this.t) * 1.5;
      p5.fill(255);
      p5.ellipse(this.x, this.y, scale, scale);
    };
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    for (let i = 0; i < 200; i++) {
      smallStars.push(new SmallStar(window.innerWidth, window.innerHeight));
    }
  };

  const draw = (p5) => {
    p5.background(15);
    smallStars.forEach(star => star.draw(p5));
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, zIndex: 0, width: "100vw", height: "100vh" }}>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
}

const AppWrapper = ({ children, darkMode }) => {
  const location = useLocation();

  const backgrounds = {
    '/': { value: darkMode ? 'transparent' : '#FFFCF4' },
    '/memories-gallery': { value: darkMode ? 'transparent' : '#FFFCF4' },
    '/music-playlist': { value: darkMode ? 'transparent' : '#FFFCF4' },
    '/couple-counter': { value: darkMode ? 'transparent' : '#FFFCF4' },
    '/messages': { value: darkMode ? 'transparent' : '#FFFCF4' },
  };

  const background = backgrounds[location.pathname] || { value: darkMode ? 'transparent' : '#FFFFFF' };

  return (
    <div style={{ backgroundColor: background.value, minHeight: '100vh', width: '100%', position: 'relative' }}>
      <Grid container padding="0px 24px" style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Grid>
    </div>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const lightTheme = createTheme({
    typography: { fontFamily: 'Inconsolata, monospace' },
    palette: { background: { default: '#FFFCF4' } },
  });

  const darkTheme = createTheme({
    typography: { fontFamily: 'Inconsolata, monospace' },
    palette: { background: { default: '#0F0F0F' } },
  });

  const theme = darkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ position: "relative", zIndex: 2 }}>
          <ApplicationBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
        {darkMode && <StarBackground />}
        <AppWrapper darkMode={darkMode}>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/memories-gallery" element={<MemoriesGallery darkMode={darkMode} />} />
            <Route path="/music-playlist" element={<MusicPlaylist darkMode={darkMode} />} />
            <Route path="/couple-counter" element={<AnniversaryCounter darkMode={darkMode} />} />
            <Route path="/messages" element={<Affirmations darkMode={darkMode} />} />
          </Routes>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}
