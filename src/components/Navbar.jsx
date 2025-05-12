import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bgClass = scrolled ? 'bg-dark-teal' : 'bg-transparent';
  const variant = scrolled ? 'dark' : 'light';
  const linkColor = scrolled ? 'text-white' : 'text-dark';

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${bgClass} transition-navbar`}
      variant={variant}
    >
      <Container fluid>
        <Navbar.Brand href="/" className={`fs-3 fw-bold ${linkColor}`}>
          SoftSell
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="ms-auto my-2 my-lg-0"
          >
            <Nav.Link href="#hero" id='link' className={`fs-5 pe-4 ${linkColor}`}>
              Home
            </Nav.Link>
            <Nav.Link href="#hiw" id='link' className={`fs-5 pe-4 ${linkColor}`}>
              Works
            </Nav.Link>
            <Nav.Link href="#wcu" id='link' className={`fs-5 pe-4 ${linkColor}`}>
              ChooseUS
            </Nav.Link>
            <Nav.Link href="#ct" id='link' className={`fs-5 pe-4 ${linkColor}`}>
              Testimonials
            </Nav.Link>
            <Nav.Link href="#contact" id='link' className={`fs-5 pe-4 ${linkColor}`}>
              ContactUs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
