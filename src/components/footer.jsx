import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/logo.png';
import Image from 'react-bootstrap/Image';

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-row" xs lg="1">
          Buy
        </Col>
        <Col xs lg="1">
          Our team
        </Col>
        <Col xs lg="1">
          About us
        </Col>
        <Col xs lg="1">
          Contact us
        </Col>
        <Col xs lg="1">
          Facebook
        </Col>
        <Col xs lg="1">
          Instagram
        </Col>
        <Col>
          <Image src={logo} alt="Roger" width="100" />
        </Col>
        <hr />
      </Row>
      <Row>
        <Col className="copyright">
          Copyright 2024 © Roger Real Estate | All rights reserved
        </Col>
      </Row>
    </Container>
  );
}
