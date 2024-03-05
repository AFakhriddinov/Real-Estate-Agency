import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/logo222.png';
import Image from 'react-bootstrap/Image';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="footer-row1">
        <Col className="footer-row" xs lg="1">
          <a className="social-url" href="/recentSales">
            Buy
          </a>
        </Col>
        <Col xs lg="1">
          <a className="social-url" href="/team">
            Our team
          </a>
        </Col>
        <Col xs lg="1">
          <a className="social-url" href="/about">
            About us
          </a>
        </Col>
        <Col xs lg="1">
          <a className="social-url" href="/contact">
            Contact us
          </a>
        </Col>
        <Col xs lg="1">
          <a className="social-url" href="www.facebook.com/RogerPropertyEstate">
            <FaFacebook />
          </a>
        </Col>
        <Col xs lg="1">
          <a
            className="social-url"
            href="www.instagram.com/roger.property.estate"
          >
            <FaInstagram />
          </a>
        </Col>
        <br />
        <br />
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
