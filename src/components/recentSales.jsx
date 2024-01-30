import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CanteburySale from './images/cantebury sale.jpg';
import BlacktownSale from './images/blacktown sale.jpg';
import BlacktownSale2 from './images/blacktown sale2.jpg';
import WentworthvilleSale from './images/wentworthville sale.jpg';
import WentworthvilleSale2 from './images/wentworthville sale2.jpg';

function RecentSales() {
  return (
    <div id="recent-sales-div">
      <h1 className="text-center">Recent sales</h1>

      <Container id="mid-container">
        <Row className="content-row">
          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src={CanteburySale} />
              <Card.Body>
                <Card.Title>Cantebury</Card.Title>
                <Card.Text>37/10-12 Broughton Street</Card.Text>
                <Card.Link href="/buy">View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src={BlacktownSale} />
              <Card.Body>
                <Card.Title>Blacktown</Card.Title>
                <Card.Text>53 Irelands Road</Card.Text>
                <Card.Link href="/team">View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="content-row">
          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src={WentworthvilleSale} />
              <Card.Body>
                <Card.Title>Wentworthville</Card.Title>
                <Card.Text>1/78-80 Lane Street</Card.Text>
                <Card.Link href="/team">View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
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
            <Card className="text-center">
              <Card.Img variant="top" src={BlacktownSale2} />
              <Card.Body>
                <Card.Title>Blacktown</Card.Title>
                <Card.Text>33 Sparkle Avenue</Card.Text>
                <Card.Link href="/team">View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RecentSales;
