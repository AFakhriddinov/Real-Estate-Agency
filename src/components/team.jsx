import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import logo from './images/logo.png';

export default function Team() {
  return (
    <div id="team-div">
      <h1 className="text-center">Our team</h1>

      <Container id="team-container">
        <Row className="content-row">
          <Col>
            <Card className="text-center team-card">
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Roger Property Estate</Card.Title>
                <Card.Text>Managing director</Card.Text>
                <Card.Text>0431400087</Card.Text>
                <Card.Text>rogerpropertyestate@gmail.com</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col>
            <Card className="text-center team-card">
              <Card.Img variant="top" src={BlacktownSale} />
              <Card.Body>
                <Card.Title>Blacktown</Card.Title>
                <Card.Text>53 Irelands Road</Card.Text>
                <Card.Link href="/team">View</Card.Link>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
        {/* <Row className="content-row">
          <Col>
            <Card className="text-center team-card">
              <Card.Img variant="top" src={WentworthvilleSale} />
              <Card.Body>
                <Card.Title>Wentworthville</Card.Title>
                <Card.Text>1/78-80 Lane Street</Card.Text>
                <Card.Link href="/team">View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center team-card">
              <Card.Img variant="top" src={WentworthvilleSale2} />
              <Card.Body>
                <Card.Title>Wentworthville</Card.Title>
                <Card.Text>11 Craddock Street</Card.Text>
                <Card.Link href="/contact">View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="text-center team-card">
              <Card.Img variant="top" src={BlacktownSale2} />
              <Card.Body>
                <Card.Title>Blacktown</Card.Title>
                <Card.Text>33 Sparkle Avenue</Card.Text>
                <Card.Link href="/team">View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}
