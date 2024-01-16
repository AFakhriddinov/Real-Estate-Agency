import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png';

export default function HomePage() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container id="nav">
        <Navbar.Brand href="#home">
          <Image src={logo} alt="Laing" width="125" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="BUY" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Recent sales
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">LEASE</Nav.Link>
            <Nav.Link href="#home">COMMERCIAL PROPERTY</Nav.Link>
            <Nav.Link href="#link">OUR TEAM</Nav.Link>
            <Nav.Link href="#home">ABOUT US</Nav.Link>
            <NavDropdown title="PROPERTY REPORTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                How Much is your Property Worth?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Suburb Report
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">OUR BLOG</Nav.Link>
            <Nav.Link href="#link">CONTACT US</Nav.Link>
            <Nav.Link href="#link">SEARCH</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
