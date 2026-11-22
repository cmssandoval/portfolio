import Container from 'react-bootstrap/Container';
import profile from '../../data/profile.js';

const About = () => {
  return (
    <section id='about' className='mt-2 py-2'>
      <Container>
        <h2 className='mb-4'><span className='text-success'>#</span> about</h2>
        {profile.bio.map(( element, index ) => (
          <p
            className='mb-1'
            key={index}
          >
            <span className='fw-bold text-success'>{'> '}</span>{element}
          </p>
        ))}
      </Container>
    </section>
  );
};

export default About;