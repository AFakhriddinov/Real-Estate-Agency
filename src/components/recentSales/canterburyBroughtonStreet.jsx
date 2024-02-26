// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter } from 'react-icons/fa6';

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
      {/* <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}
