import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import links from '../data/navigationLinks.js';

const AppNavbar = () => {
  return (
    <Navbar expand='md' sticky='top' className='border-bottom terminal'>
      <Container>
        <Navbar.Brand href='#hero' className='fw-bold text-success'>
        Portafolio - Carlos MS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-nav' />
        <Navbar.Collapse id='main-nav'>
          <Nav className='ms-auto'>
            { links.map(( link, index ) => (
              <Nav.Link key={index} href={link.href}>./{link.label}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;