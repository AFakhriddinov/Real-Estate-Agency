import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './navbar';
import Card from 'react-bootstrap/Card';
import buy from './images/image1.jpeg';
import team from './images/image2.jpg';
import about from './images/image3.jpg';
import contact from './images/image4.webp';

export default function HomePage() {
  return (
    <div>
      <div class="embed-responsive embed-responsive-21by9">
        <iframe
          title="bu"
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
        <Row className="content-row">
          <Col className="home-col">
            <a className="mid-a" href="/recentSales">
              <Card.Body
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${buy}`,
                }}
                className="home-body"
              ></Card.Body>
              <span>BUY</span>
            </a>
          </Col>

          <Col className="home-col">
            <a className="mid-a" href="/team">
              <Card.Body
                style={{
                  backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${team}`,
                }}
                className="home-body"
              ></Card.Body>
              <span>TEAM</span>
            </a>
          </Col>
        </Row>
        <Row className="content-row2">
          <Col className="home-col">
            <a className="mid-a" href="/about">
              <Card.Body
                style={{
                  backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${about}`,
                }}
                className="home-body"
              ></Card.Body>
              <span>ABOUT US</span>
            </a>
          </Col>
          <Col className="home-col">
            <a className="mid-a" href="/contact">
              <Card.Body
                style={{
                  backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${contact}`,
                }}
                className="home-body"
              ></Card.Body>
              <span>CONTACT US</span>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
