import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import contactUsImage from '../Assets/contact us.jpg';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';

const ContactForm = styled.div`
  margin-top: 50px;
  .img_div {
    width: 100%;
    height: 450px;
    object-fit: cover;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .label {
    margin-bottom: 5px;
    margin-top: 24px;
  }
  .FormControl {
    height: 54px;
    border-radius: 5px;
    border: 1px solid #ddd;
    text-indent: 10px;
  }
`;

function ContactUs() {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    contactNumber: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });

    // Custom validation for phone number length
    if (name === 'contactNumber') {
      if (value.length < 10) {
        event.target.setCustomValidity("Contact number must be at least 10 characters.");
      } else {
        event.target.setCustomValidity("");
      }
    }

    // Custom validation for message length
    if (name === 'message') {
      if (value.length < 10) {
        event.target.setCustomValidity("Message must be at least 10 characters.");
      } else {
        event.target.setCustomValidity("");
      }
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <ContactForm>
      <div className="img_div">
        <img src={contactUsImage} alt="bk_image" Contact_home_img />
      </div>
      <Container className="mt-5 p-5" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', position: 'relative', top: '-149px', width: '90%' }}>
        <h2 className="mb-4">Contact Us</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label className='label'>Name</Form.Label>
                <Form.Control
                  className='FormControl'
                  required
                  type="text"
                  placeholder="Enter your name"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label className='label'>Email</Form.Label>
                <Form.Control
                  className='FormControl'
                  required
                  type="email"
                  placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formContactNumber">
                <Form.Label className='label'>Contact Number</Form.Label>
                <Form.Control
                  className='FormControl'
                  required
                  type="number"
                  name="contactNumber"
                  value={formValues.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your contact number"
                />
                <Form.Control.Feedback type="invalid">
                  Contact number must be at least 10 characters.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCountry">
                <Form.Label className='label'>Country</Form.Label>
                <Form.Control
                  className='FormControl'
                  required
                  type="text"
                  placeholder="Enter your country"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your country.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formMessage">
            <Form.Label className='label'>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
            />
            <Form.Control.Feedback type="invalid">
              Message must be at least 10 characters.
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </ContactForm>
  );
}

export default ContactUs;
