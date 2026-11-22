import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../../data/profile';

const Contact = () => {
  return (
    <section id='contact' className='my-2 py-2'>
      <Container>
        <h2 className='mb-4'><span className='text-success'>#</span> contact</h2>
        <Row className='g-3'>
          <Col sm={12}>
            <p>
              ¿Tienes una idea en mente? ¿Quieres saber más de mí?
              <br />Contáctame y trabajemos juntos en tus proyectos
            </p>
            <ul className='list-unstyled d-flex flex-column gap-1'>
              <li className='fs-5'>
                <i className='text-success bi-envelope' />{' '}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li className='fs-5'>
                <i className='text-success bi-github' />{' '}
                <a target='_blank' rel='noopener noreferrer' href={profile.github}>GitHub</a>
              </li>
              <li className='fs-5'>
                <i className='text-success bi-linkedin' />{' '}
                <a target='_blank' rel='noopener noreferrer' href={profile.linkedin}>LinkedIn</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;