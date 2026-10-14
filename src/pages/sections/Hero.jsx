import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import profile from '../../data/profile.js';

const Hero = () => {
  return (
    <section id='hero' className='mt-1 py-4'>
      <Container>
        <div className='terminal border rounded p-4'>
          <p className='text-success mb-1'>$ whoami</p>
          <h1 className='display-5 fw-bold'>{profile.name}</h1>
          <p className='text-success mb-1'>$ cat role.txt</p>
          <p className='lead'>{profile.role}</p>
          <div className='d-flex gap-2 flex-wrap'>
            <Button variant='success' href='#projects'>ls projects/</Button>
            <Button variant='outline-info' href='#contact'>ls contact/</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;