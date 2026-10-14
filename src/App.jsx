import { useEffect, useState } from "react";
import { useAnimatedFavicon } from "./hooks/useAnimatedFavicon.js";
import Home from "./pages/Home/Home.jsx";
import AppNavbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

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
