//* Commented lines are for future implementation, pending cleanup if form is discarded.

// import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
import profile from '../../data/profile';

// const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  // const [ data, setData ] = useState({ name: '', email: '', message: '' });
  // const [ status, setStatus ] = useState('idle'); // idle | sending | ok | error

  // const handleChange = ( event ) => setData({ ...data, [event.target.name]: event.target.value });

  // const handleSubmit = async ( event ) => {
  //   event.preventDefault();
  //   setStatus('sending');
  //   try {
  //     const res = await fetch(API_URL, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });
  //     if ( !res.ok ) throw new Error();
  //     setData({ name: '', email: '', message: '' });
  //     setStatus('ok');
  //   } catch {
  //     setStatus('error');
  //   }
  // };

  return (
    <section id='contact' className='my-2 py-2'>
      <Container>
        <h2 className='mb-4'><span className='text-success'>#</span> contact</h2>
        <Row className='g-3'>
          <Col md={5}>
            <ul className='list-unstyled d-flex flex-column gap-1'>
              <li className='fs-5'>
                <i className='text-success bi-envelope' />{' '}
                <a className='' href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li className='fs-5'>
                <i className='text-success bi-github' />{' '}
                <a className='' target='_blank' href={profile.github}>GitHub</a>
              </li>
              <li className='fs-5'>
                <i className='text-success bi-linkedin' />{' '}
                <a className='' target='_blank' href={profile.linkedin}>LinkedIn</a>
              </li>
            </ul>
          </Col>
          {/* <Col md={7}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control name='name' value={data.name} onChange={handleChange} required disabled />
              </Form.Group>
              <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' value={data.email} onChange={handleChange} required disabled />
              </Form.Group>
              <Form.Group className='mb-3' controlId='message'>
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as='textarea' rows={4} name='message' value={data.message} onChange={handleChange} required disabled />
              </Form.Group>
              <Button type='submit' variant='success' disabled={ status === 'sending' || !API_URL }>
                { status === 'sending' ? 'Enviando…' : './send' }
              </Button>
              { status === 'ok' && <Alert variant='success' className='mt-3'>Mensaje enviado.</Alert> }
              { status === 'error' && <Alert variant='danger' className='mt-3'>No se pudo enviar. Usa el correo directo.</Alert> }
            </Form>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;