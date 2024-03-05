import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter } from 'react-icons/fa6';
import photo1 from '../images/cantebury sale.jpg';
import photo2 from '../images/canterbury2.jpg';
import photo3 from '../images/canterbury3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons';
import agentPhoto from '../images/Andy.avif';
import logo from '../images/logo2.png';

export default function CanterburyBroughtonStreet() {
  return (
    <div className="soldProperties-container">
      <div className="soldProperties-heading">
        <a className="top-links"> &lt;Back to results</a>
        <div className="top-links">
          <a className="top-links">Gallery</a> |
          <a className="top-links top-links-a">Map</a> |
          <a className="top-links top-links-a">
            <FaFacebook />
          </a>
          |
          <a className="top-links top-links-a">
            <FaTwitter />
          </a>
        </div>
      </div>
      <Carousel>
        <Carousel.Item>
          <img className="carousel-images" src={photo1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-images" src={photo2} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-images" src={photo3} />
        </Carousel.Item>
      </Carousel>

      <div className="soldProperties-heading ">
        <div className="left-container">
          <FontAwesomeIcon icon={faBed} /> 2
          <FontAwesomeIcon className="font" icon={faBath} /> 1
          <h6 className="sold-h6">Sold by Andy Gheewalla 0426992786</h6>
          <p className="sold-p">
            A light filled haven of undeniable style and desirability, this easy
            access first floor apartment enjoys a premier setting at the rear of
            this building. Providing an extraordinarily tranquil retreat right
            in heart of Canterbury, this home offers a superb lifestyle enhanced
            by beautifully interiors and views. Both bedrooms are generous with
            built in robes, the kitchen and bathroom are both are in immaculate
            condition. Security intercom upon entry and a single Lockup Garages
            is on title and accessed with security gated entry. Directly at your
            door step are all the boutique shops, cafes, 2 mins walk to
            Canterbury station and Bus Stop, local parks
          </p>
          <br />
          <ul className="sold-features">
            <li>Secure building with lift access</li>
            <li>
              Beautifully maintained Art Deco building with wood panelled entry
              foyer and terrazzo floors
            </li>
            <li> Smart kitchen with stainless steel appliances</li>
            <li>Marble tiled bathroom</li>
            <li>Ceiling fans</li>
            <li>Large sash windows</li>
            <li>
              Common rooftop with entertaining area overlooking the bridge,
              opera house and harbour
            </li>
            <li>Laundries and drying areas on common rooftop</li>
            <li>
              Close to Macleay Street shopping, cafes, bars and restaurants
            </li>
            <li>Close to public transport, the CBD and harbour foreshores</li>
          </ul>
          <p className="sold-p">
            Details: Kerry Wapshott
            <br />
            0418 247 244
            <br />
            Vicki Laing
            <br />
            0411 88 77 60
            <br />
            Inspect: As advertised or by appointment
            <br />
            Company Manager: Strata Mark 9387 6052
            <br />
            Levies: $1,311.45 pq appox.
            <br />
            Council: $293.15 pq approx.
            <br />
            Water: Included
          </p>
          <div className="agents-container">
            <div className="agents-container-sub">
              <img className="agent-img" src={agentPhoto} alt="" />
              <div>
                <p>
                  Andy Gheewalla
                  <br />
                  kerry@laing.com.au
                  <br />
                  02 9358 3399
                  <br />
                  0418 247 244
                </p>
                <a className="sold-buttons" href="">
                  Email Agent
                </a>
              </div>
            </div>
            <div className="agents-container-sub">
              <img className="agent-img" src={logo} alt="" />
              <div>
                <p>
                  Andy Gheewalla
                  <br />
                  kerry@laing.com.au
                  <br />
                  02 9358 3399
                  <br />
                  0418 247 244
                </p>
                <a className="sold-buttons" href="">
                  Email Agent
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="top-links right-container">
          <h5>12/12 Ward Avenue, Potts Point NSW 2011</h5>
          <h6 className="sold-h6-right">SOLD</h6>
          <h6 className="sold-h6-right">$ 520,000</h6>
          <div className="buttons-container">
            <div className="sold-button-div">
              <a className=" sold-buttons">Enquire Now</a>
            </div>
            <div className="sold-button-div">
              <a className=" sold-buttons">Floorplan</a>
            </div>
            <div className="sold-button-div">
              <a className=" sold-buttons">Strate Plan</a>
            </div>
            <div className="sold-button-div">
              <a className="sold-buttons">Share Property</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
