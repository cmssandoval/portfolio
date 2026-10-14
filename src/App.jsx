import { useEffect } from 'react';
import { useAnimatedFavicon } from './hooks/useAnimatedFavicon.js';
import Home from './pages/Home.jsx';
import AppNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  useAnimatedFavicon();

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }, []);

  return (
    <>
      <AppNavbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
