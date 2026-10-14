import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { profile } from '../../data/profile';

const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [ data, setData ] = useState({ name: '', email: '', message: '' });
  const [ status, setStatus ] = useState('idle'); // idle | sending | ok | error

  const handleChange = ( event ) => setData({ ...data, [event.target.name]: event.target.value });

  const handleSubmit = async ( event ) => {
    event.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if ( !res.ok ) throw new Error();
      setData({ name: '', email: '', message: '' });
      setStatus('ok');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id='contact' className='py-4'>
      <Container>
        <h2 className='mb-4'><span className='text-success'>#</span> contact</h2>
        <Row className='g-3'>
          <Col md={5}>
            <p className='text-success mb-3'>$ cat links.txt</p>
            <ul className='list-unstyled'>
              <li><a href={`mailto:${profile.email}`}><i className='bi bi-envelope' /> {profile.email}</a></li>
              <li><a target='_blank' href={profile.github}><i className='bi bi-github' /> GitHub</a></li>
              <li><a target='_blank' href={profile.linkedin}><i className='bi bi-linkedin' /> LinkedIn</a></li>
            </ul>
          </Col>
          <Col md={7}>
            <p className='text-success mb-3'>$ cat contact.form</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control name='name' value={data.name} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' value={data.email} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className='mb-3' controlId='message'>
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as='textarea' rows={4} name='message' value={data.message} onChange={handleChange} required />
              </Form.Group>
              <Button type='submit' variant='success' disabled={ status === 'sending' || !API_URL }>
                { status === 'sending' ? 'Enviando…' : './send' }
              </Button>
              { status === 'ok' && <Alert variant='success' className='mt-3'>Mensaje enviado.</Alert> }
              { status === 'error' && <Alert variant='danger' className='mt-3'>No se pudo enviar. Usa el correo directo.</Alert> }
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;