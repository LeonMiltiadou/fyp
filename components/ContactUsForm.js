import React, { Component } from 'react';
import { AppContext } from '../context/state.js';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ContactUs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      merchant: {},
    }
  }

  static contextType = AppContext;

  componentDidMount() {
  }


  render() {
    return (
      <Form className="m-4">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Email" className="contact-us-input" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Subject" className="contact-us-input" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={5} placeholder="Your message to us..." className="contact-us-input"/>
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit" id="contact-us-form-btn">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
};

export default ContactUs;
