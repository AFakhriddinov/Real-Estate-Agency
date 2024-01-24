import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="Roger" width="80" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="BUY" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Recent sales
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Current sales
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/team">
              OUR TEAM
            </Nav.Link>
            <Nav.Link href="/about">ABOUT US</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
            <Nav.Link href="#link">SEARCH</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
