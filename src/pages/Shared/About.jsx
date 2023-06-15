import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container fluid className="bg-dark text-white py-5 mt-5 ">
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="text-center">
          <h1 className="display-4">About Us</h1>
          <p className="lead">Welcome to our recipe finder website! Discover a vast collection of delicious recipes suitable for every taste and occasion. Whether you're a seasoned chef or just starting your culinary journey, our user-friendly interface and advanced search functionality make it easy to find the perfect dish. From quick weekday meals to gourmet delights, explore a diverse range of recipes that cater to all skill levels and dietary preferences. Embark on a culinary adventure with us and elevate your cooking skills with our inspiring recipes and step-by-step instructions.</p>
        </Col>
        <Col md={6} className="text-center">
          <Image className='size' src="https://i.ibb.co/FbTn2bP/john-fornander-j-JIb2e7-Jkcs-unsplash.jpg" fluid />
        </Col>
      </Row>
    </Container>
    );
};

export default About;