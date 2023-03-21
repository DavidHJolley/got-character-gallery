import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = ({ name, email }) => {
  return (
    <Container className="my-5 text-center">
      <Row>
        <Col>
          <h2>Contact Me</h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="bg-light p-4">
            <p className="lead">
              Name: {name}
            </p>
            <p className="lead">
              Email: {email}
            </p>
            <p className="lead">
             <a href='https://www.linkedin.com/in/david-henry-jolley-70230b254/'>LinkedIn</a>
            </p>
            <p className="lead">
             <a href='https://github.com/DavidHJolley/'>GitHub</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
