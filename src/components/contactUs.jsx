import Image from 'react-bootstrap/Image';
import contactusBg from './images/contactusBg.jpeg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactUs() {
  return (
    <div id="contactUs-div" fluid>
      <Image
        id="contactusBg"
        fluid
        src={contactusBg}
        alt="About us"
        width="1340"
      />
      <h2 id="contactUs-heading">Contact us</h2>

      <Form id="form">
        <h3 className="contact-h3">Roger Real Estate</h3>
        <h6 className="contact-h6">
          101-103 Macleay Street Potts Point NSW 2011 Australia
        </h6>
        <h6>Tel : 61 431400087</h6>
        <h6 className="contact-h66">Fax : 61 431400087</h6>
        <Form.Group className="mb-3 form-div" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control className="input" type="text" />
        </Form.Group>
        <Form.Group className="mb-3 form-div" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 form-div" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3 form-div" controlId="formBasicPassword">
          <Form.Label>Home Number</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 form-div" controlId="formBasicPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 form-div" controlId="formBasicPassword">
          <Form.Label>Comments</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>
        <Button className="form-button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
