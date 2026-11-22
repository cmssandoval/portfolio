import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import links from '../data/navigationLinks.js';
import { useState } from 'react';

const AppNavbar = ({activeSection}) => {
    const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      expand='md'
      sticky='top'
      expanded={expanded}
      onToggle={setExpanded}
      className='border-bottom terminal'
      aria-label='Navegación principal'
    >
      <Container>
        <Navbar.Brand
          href='#hero'
          className='fw-bold text-success'
          onClick={() => setExpanded(false)}
        >
          Portafolio - Carlos MS
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls='main-nav'
          aria-label={expanded ? 'Cerrar navegación' : 'Abrir navegación' }
        />

        <Navbar.Collapse id='main-nav'>
          <Nav className='ms-auto'>
            <Nav.Link
              href='https://github.com/cmssandoval/portfolio'
              target='_blank'
              rel='noopener noreferrer'
              className='fw-bold portfolio-repo'
              aria-label='Repositorio de este portafolio, abre en una pestaña nueva'
            >
              ./this.repo <i className='bi bi-github' />
            </Nav.Link>
            
            { links.map(( link, index ) => (
              <Nav.Link
              key={index}
              href={link.href}
              active={activeSection === link.href.slice(1)}
              aria-current={
                activeSection === link.href.slice(1)
                  ? 'location'
                  : undefined
              }
              onClick={() => setExpanded(false)}
              className='nav-buttons'
              >
                ./{link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;