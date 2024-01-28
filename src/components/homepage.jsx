import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './navbar';
import Card from 'react-bootstrap/Card';
import buy from './images/buy.jpg';
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
            <Card className="text-center">
              <Card.Img variant="top" src={buy} />
              <Card.Body>
                <Card.Link href="/buy">BUY</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src={team} />
              <Card.Body>
                <Card.Link href="/team">OUR TEAM</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="content-row">
          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src={about} />
              <Card.Body>
                <Card.Link href="/team">ABOUT US</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src={contact} />
              <Card.Body>
                <Card.Link href="/contact">CONTACT US</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
