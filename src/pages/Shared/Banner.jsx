/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Container fluid className="bg-dark text-white py-5 mt-5 ">
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="text-center">
          <h1 className="display-4">Meet Our Chefs</h1>
          <p className="lead">Our talented chefs create delicious dishes every day with fresh, locally sourced ingredients.</p>
        </Col>
        <Col md={6} className="text-center">
          <Image className='size' src="https://i.ibb.co/qYYKL8f/eiliv-aceron-w-NQoa-YCFcs-I-unsplash.jpg" fluid />
        </Col>
      </Row>
    </Container>
    );
};

export default Banner;