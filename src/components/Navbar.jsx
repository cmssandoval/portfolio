import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
];

const AppNavbar = () => {
  return (
    <Navbar expand='md' sticky='top' className='border-bottom terminal'>
      <Container>
        <Navbar.Brand href='#hero' className='fw-bold text-success brand'>
          {'Portafolio'.split('').map(( letter, index ) => (
                <span
                    key={index}
                    className="animated-letter"
                    style={{
                        animationDelay: `${index * 0.1}s`,
                    }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </span>
            ))}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-nav' />
        <Navbar.Collapse id='main-nav'>
          <Nav className='ms-auto'>
            { links.map( link => (
              <Nav.Link key={link.href} href={link.href}>./{link.label}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;