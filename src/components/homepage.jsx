import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './navbar';
import Card from 'react-bootstrap/Card';
import buy from './images/Buy2.jpg';
import team from './images/team.jpeg';
import about from './images/about.jpg';
import contact from './images/contact.avif';

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
          <Col>
            <a className="mid-a" href="/buy">
              <Card.Body
                style={{ backgroundImage: `url(${buy}` }}
                className="card-body"
              ></Card.Body>
              <span>BUY</span>
            </a>
          </Col>

          <Col>
            <a className="mid-a" href="/team">
              <Card.Body
                style={{ backgroundImage: `url(${team}` }}
                className="card-body"
              ></Card.Body>
              <span>TEAM</span>
            </a>
          </Col>
        </Row>
        <Row className="content-row2">
          <Col>
            <a className="mid-a" href="/about">
              <Card.Body
                style={{ backgroundImage: `url(${about}` }}
                className="card-body"
              ></Card.Body>
              <span>ABOUT US</span>
            </a>
          </Col>
          <Col>
            <a className="mid-a" href="/contact">
              <Card.Body
                style={{ backgroundImage: `url(${contact}` }}
                className="card-body"
              ></Card.Body>
              <span>CONTACT US</span>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
