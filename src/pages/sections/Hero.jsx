import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import profile from '../../data/profile.js';

const Hero = () => {
  return (
    <section id='hero' className='mt-1 pb-2 pt-4'>
      <Container>
        <div className='terminal border rounded p-4'>
          <p className='text-success mb-1'>$ whoami</p>
          <h1 className='display-5 fw-bold'>{profile.name}</h1>
          <p className='lead'>{profile.role}</p>
          <div className='d-flex gap-3 flex-wrap'>
            <Button variant='success' href='#projects'>Ver Proyectos</Button>
            <Button variant='outline-info' href='#contact'>Contáctame</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;