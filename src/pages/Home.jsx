import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';

const Home = () => {
  return (
    <main className='mx-3'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;