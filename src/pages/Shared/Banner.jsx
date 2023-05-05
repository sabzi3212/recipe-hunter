/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container fluid className="bg-dark text-white py-5 mt-5">
      <Row className="justify-content-center align-items-center">
        <Col md={8} className="text-center">
          <h1 className="display-4">Meet Our Chefs</h1>
          <p className="lead">Our talented chefs create delicious dishes every day with fresh, locally sourced ingredients.</p>
        </Col>
        <Col md={4} className="text-center">
          <Image src="https://images.unsplash.com/photo-1521747116042-5a810fda9662?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" roundedCircle fluid />
        </Col>
      </Row>
    </Container>
    );
};

export default Banner;