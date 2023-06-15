import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Container fluid className="bg-dark text-white py-5 mt-5 ">
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="text-center">
          <h1 className="display-4">No Location found</h1>
          <Link to='/'><Button variant="secondary">Back to home</Button></Link>
        </Col>
        <Col md={6} className="text-center">
          <Image className='size' src="https://i.ibb.co/yWB9kf9/erik-mclean-sxi-Sod0ty-YQ-unsplash.jpg" fluid />
        </Col>
      </Row>
    </Container>
    );
};

export default Error;