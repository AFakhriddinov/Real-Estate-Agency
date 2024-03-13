import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CanteburySale from './images/cantebury sale.jpg';
import BlacktownSale from './images/blacktown sale.jpg';
import BlacktownSale2 from './images/blacktown sale2.jpg';
import WentworthvilleSale from './images/wentworthville sale.jpg';
import WentworthvilleSale2 from './images/wentworthville sale2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons';

function RecentSales() {
  return (
    <Container fluid id="recent-sales-div">
      <h1 className="text-center recentSales-h1">Recent sales</h1>

      <p>Now showing 6 properties</p>
      <Row className="recentSales-row">
        <Col className="recentSales-col">
          <div className="recentSales-subcol">
            <a href="canterburyBroughtonStreet">
              <div className="sold-icon">
                <div className="square-shape">
                  <p className="sold-text">SOLD</p>
                </div>
                <div className="triangle-shape">
                  <div className="triangle-shape-edgeUp"></div>
                  <div className="triangle-shape-edgeDown"></div>
                </div>
              </div>
              <img className="recentSales-img" src={CanteburySale} />
            </a>
            <div className="property-location">
              <h4>Cantebury</h4>
              <h6>37/10-12 Broughton Street</h6>
              <div className="sale-icons">
                <FontAwesomeIcon icon={faBed} /> 2
                <FontAwesomeIcon className="font" icon={faBath} /> 1
                <FontAwesomeIcon className="font" icon={faCar} /> 1
              </div>

              <div className="property-price">
                <p className="element-left">Sold</p>
                <p className="element-right">$ 955,000</p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="recentSales-col">
          <div className="recentSales-subcol">
            <a href="/blacktownIrelandSt">
              <div className="sold-icon">
                <div className="square-shape">
                  <p className="sold-text">SOLD</p>
                </div>
                <div className="triangle-shape">
                  <div className="triangle-shape-edgeUp"></div>
                  <div className="triangle-shape-edgeDown"></div>
                </div>
              </div>
              <img className="recentSales-img" src={BlacktownSale} />
            </a>
            <div className="property-location">
              <h4>Blacktown</h4>
              <h6>53 Irelands Road</h6>
              <div className="sale-icons">
                <FontAwesomeIcon icon={faBed} /> 2
                <FontAwesomeIcon className="font" icon={faBath} /> 1
                <FontAwesomeIcon className="font" icon={faCar} /> 1
              </div>
              <div className="property-price">
                <p className="element-left">Sold</p>
                <p className="element-right">$ 955,000</p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="recentSales-col">
          <div className="recentSales-subcol">
            <a href="#">
              <div className="sold-icon">
                <div className="square-shape">
                  <p className="sold-text">SOLD</p>
                </div>
                <div className="triangle-shape">
                  <div className="triangle-shape-edgeUp"></div>
                  <div className="triangle-shape-edgeDown"></div>
                </div>
              </div>
              <img className="recentSales-img" src={WentworthvilleSale} />
            </a>
            <div className="property-location">
              <h4>Wentworthville</h4>
              <h6>1/78-80 Lane Street</h6>
              <div className="sale-icons">
                <FontAwesomeIcon icon={faBed} /> 2
                <FontAwesomeIcon className="font" icon={faBath} /> 1
                <FontAwesomeIcon className="font" icon={faCar} /> 1
              </div>
              <div className="property-price">
                <p className="element-left">Sold</p>
                <p className="element-right">$ 955,000</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="recentSales-row">
        <Col className="recentSales-col">
          <div className="recentSales-subcol">
            <a href="#">
              <div className="sold-icon">
                <div className="square-shape">
                  <p className="sold-text">SOLD</p>
                </div>
                <div className="triangle-shape">
                  <div className="triangle-shape-edgeUp"></div>
                  <div className="triangle-shape-edgeDown"></div>
                </div>
              </div>
              <img
                className="recentSales-img"
                variant="top"
                src={WentworthvilleSale2}
              />
            </a>
            <div className="property-location">
              <h4>Wentworthville</h4>
              <h6>11 Craddock Street</h6>
              <div className="sale-icons">
                <FontAwesomeIcon icon={faBed} /> 2
                <FontAwesomeIcon className="font" icon={faBath} /> 1
                <FontAwesomeIcon className="font" icon={faCar} /> 1
              </div>
              <div className="property-price">
                <p className="element-left">Sold</p>
                <p className="element-right">$ 955,000</p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="recentSales-col">
          <div className="recentSales-subcol">
            <a href="#">
              <div className="sold-icon">
                <div className="square-shape">
                  <p className="sold-text">SOLD</p>
                </div>
                <div className="triangle-shape">
                  <div className="triangle-shape-edgeUp"></div>
                  <div className="triangle-shape-edgeDown"></div>
                </div>
              </div>
              <img className="recentSales-img" src={BlacktownSale2} />
            </a>
            <div className="property-location">
              <h4>Blacktown</h4>
              <h6>33 Sparkle Avenue</h6>
              <div className="sale-icons">
                <FontAwesomeIcon icon={faBed} /> 2
                <FontAwesomeIcon className="font" icon={faBath} /> 1
                <FontAwesomeIcon className="font" icon={faCar} /> 1
              </div>
              <div className="property-price">
                <p className="element-left">Sold</p>
                <p className="element-right">$ 955,000</p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="recentSales-col">
          <div className="recentSales-subcol">
            <a href="#">
              <div className="sold-icon">
                <div className="square-shape">
                  <p className="sold-text">SOLD</p>
                </div>
                <div className="triangle-shape">
                  <div className="triangle-shape-edgeUp"></div>
                  <div className="triangle-shape-edgeDown"></div>
                </div>
              </div>
              <img className="recentSales-img" src={BlacktownSale2} />
            </a>
            <div className="property-location">
              <h4>Blacktown</h4>
              <h6>33 Sparkle Avenue</h6>
              <div className="sale-icons">
                <FontAwesomeIcon icon={faBed} /> 2
                <FontAwesomeIcon className="font" icon={faBath} /> 1
                <FontAwesomeIcon className="font" icon={faCar} /> 1
              </div>
              <div className="property-price">
                <p className="element-left">Sold</p>
                <p className="element-right">$ 955,000</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RecentSales;
