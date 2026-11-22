import { useEffect, useState } from 'react';
import { useAnimatedFavicon } from './hooks/useAnimatedFavicon.js';
import Home from './pages/Home.jsx';
import AppNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  useAnimatedFavicon();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length) return;

    let frameId = null;
    const updateActiveSection = () => {
      frameId = null;

      const marker = window.innerHeight * 0.35;
      let current = sections[0].id;

      for (const section of sections) {
        const { top } = section.getBoundingClientRect();

        if (top <= marker) {
          current = section.id;
        } else {
          break;
        }
      }

      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (reachedBottom) {
        current = 'contact';
      }

      setActiveSection(current);
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <>
      <a className='skip-link visually-hidden-focusable' href='#main-content'>
      Saltar al contenido principal
      </a>

      <AppNavbar activeSection={activeSection} />
      <Home />
      <Footer />
    </>
  );
};

export default App;
