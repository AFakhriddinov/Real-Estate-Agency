import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePage() {
  return (
    <div>
      <Navbar expand="lg" fixed="top">
        <Container>
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

      <div class="embed-responsive embed-responsive-21by9">
        <iframe
          width="1380"
          height="540"
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/FNpQvPStY8E?autoplay=1&mute=1"
          name="youtube embed"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
      <Container id="mid-container">
        <Row>
          <Col>BUY</Col>
          <Col>LEASE</Col>
          <Col>COMMERCIAL</Col>
        </Row>
        <Row>
          <Col>ABOUT US</Col>
          <Col>OUR TEAM</Col>
          <Col>BLOG</Col>
        </Row>
      </Container>
    </div>
  );
}
