import Container from 'react-bootstrap/Container';
import profile from '../../data/profile.js';

const About = () => {
  return (
    <section id='about' className='py-4'>
      <Container>
        <h2 className='mb-4'><span className='text-success'>#</span> about</h2>
        {profile.bio.map(( element, index ) => <p key={index}>{element}</p>)}
      </Container>
    </section>
  );
};

export default About;