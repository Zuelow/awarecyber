import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import theme from './theme/theme';

// Import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Cases from './components/Cases/Cases';
import Blog from './components/Blog/Blog';
import Prevention from './components/Prevention/Prevention';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Download from './components/Download/Download';

// Import styles
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
          },
          html: {
            scrollBehavior: 'smooth',
          },
          body: {
            backgroundColor: '#f8f9fa',
            overflowX: 'hidden',
          },
          '::-webkit-scrollbar': {
            width: '8px',
          },
          '::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#006B54',
            borderRadius: '4px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#004736',
          },
        }}
      />
      <Router>
        <div className="app-container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/prevention" element={<Prevention />} />
              <Route path="/faqs" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/download" element={<Download />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
