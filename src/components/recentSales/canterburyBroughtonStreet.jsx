import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter } from 'react-icons/fa6';
import photo1 from '../images/cantebury sale.jpg';
import photo2 from '../images/canterbury2.jpg';
import photo3 from '../images/canterbury3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons';

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
          <h6 className="sold-h6">Sold by Vicki Laing 0411 88 77 60</h6>
          <p className="sold-p">
            Located on the first floor of the gracious Art Deco security
            building "The Oxley", this private rear apartment with its beautiful
            timber floors, high ceilings and leafy outlook presents a wonderful
            opportunity to acquire a stunning two bedroom apartment in this
            sought-after neighbourhood. Ready to move right in and enjoy the
            vibrancy of Potts Point or lease out as a savvy investment.
          </p>
        </div>
        <div className="top-links right-container">
          <h5>12/12 Ward Avenue, Potts Point NSW 2011</h5>
          <h6 className="sold-h6-right">SOLD</h6>
        </div>
      </div>
    </div>
  );
}
