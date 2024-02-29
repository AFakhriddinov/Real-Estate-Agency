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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        v
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
