import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer className='border-top py-4 mt-5'>
      <Container className='text-center text-body-secondary small'>
        © {new Date().getFullYear()} Carlos Macías Sandoval
      </Container>
    </footer>
  );
};

export default Footer;