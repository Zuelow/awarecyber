import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './styles/theme';

// Import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services';
import Contact from './components/Contact/Contact';

// Import styles
import './App.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
        <div className="app-container">
        <Header />
        <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>
        <Footer />
        </div>
        </Router>
        </ThemeProvider>
    );
}

export default App;
