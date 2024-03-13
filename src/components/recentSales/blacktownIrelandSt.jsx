import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter } from 'react-icons/fa6';
import photo1 from '../images/blacktownIreland1.jpg';
import photo2 from '../images/blacktownIreland2.jpg';
import photo3 from '../images/blacktownIreland3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons';
import agentPhoto from '../images/Andy.avif';
import logo from '../images/logo2.png';

export default function BlacktownIrelandSt() {
  return (
    <div className="soldProperties-container">
      <div className="soldProperties-heading">
        <a className="top-links" href="/recentSales">
          {' '}
          &lt;Back to results
        </a>
        <div className="top-links">
          <a className="top-links">Gallery</a> |
          <a className="top-links top-links-a">Map</a> |
          <a
            className="top-links top-links-a"
            href="www.facebook.com/RogerPropertyEstate"
          >
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
          <FontAwesomeIcon icon={faBed} /> 4
          <FontAwesomeIcon className="font" icon={faBath} /> 2
          <FontAwesomeIcon className="font" icon={faCar} /> 3
          <h6 className="sold-h6">Sold by Andy Gheewalla 0426992786</h6>
          <p className="sold-p">
            Rosewhite presents this stylish home with a large block of land in a
            tranquil location. You will be captivated from the moment you enter
            the stunning Tiles hall by the size and space of this immaculate
            open plan home – leading you into manicured garden with built in BBQ
            area. Configure this home to suit your style, maximise potential to
            meet your needs. Added WOW!! is with Granny Flat.
          </p>
          <br />
          <ul className="sold-features">
            <li>Marble floor plan with spacious living family lounge</li>
            <li>Four good sized bedrooms is fitted</li>
            <li> Generous sized 3 bedrooms with built-in robes</li>
            <li>Separate kitchen with Meal areas and Pantry room</li>
            <li> Separate dining area</li>
            <li>Modern Family Bathroom with added Bonus of second toilet</li>
            <li>Double Size of carport,</li>
            <li>Private backyard and entertaining area for children and BBQ</li>
            <li>
              Entertainment area ready for family and friends all year around
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
          <h5>53 Irelands Road, Blacktown, NSW 2148</h5>
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
              <a className="sold-buttons">Share Property</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
