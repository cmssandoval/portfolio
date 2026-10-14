import { useEffect, useState } from 'react';
import { useAnimatedFavicon } from './hooks/useAnimatedFavicon.js';
import Home from './pages/Home.jsx';
import AppNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
const [ theme, setTheme ] = useState('dark');

  useAnimatedFavicon();

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <>
      <AppNavbar setTheme={setTheme}/>
      <Home />
      <Footer />
    </>
  );
};

export default App;
