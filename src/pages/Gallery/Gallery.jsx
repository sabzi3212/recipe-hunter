import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Gallery = () => {
    return (
        <Container className='mt-5'>
            <h1 className='text-center mb-5'>Few of our best clicks</h1>
      <Row>
        <Col xs={12} md={4}>
          <Image style={{ width: '400px', height: '400px' }} src='https://i.ibb.co/VjT8SkT/taylor-kiser-POFG828-GQc-unsplash.jpg' className="gallery-image" fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image style={{ width: '400px', height: '400px' }} src="https://i.ibb.co/kXYWbTG/ankit-sinha-l-B7-LEdj-U6-B0-unsplash.jpg" className="gallery-image" fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image style={{ width: '400px', height: '400px' }} src="https://i.ibb.co/F4J6dLh/louis-hansel-1ke-EJmqm8v-U-unsplash.jpg" className="gallery-image" fluid />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <Image style={{ width: '400px', height: '400px' }} src="https://i.ibb.co/84Mv9sC/amirali-mirhashemian-ZSuk-CSw5-VV4-unsplash.jpg" className="gallery-image" fluid />
        </Col>
        <Col xs={6} md={3}>
          <Image style={{ width: '400px', height: '400px' }} src="https://i.ibb.co/JQDXRwK/vinitha-v-x-w-Bge-Ng11o-unsplash.jpg" className="gallery-image" fluid />
        </Col>
        <Col xs={12} md={6}>
          <Image style={{ width: '400px', height: '400px' }} src="https://i.ibb.co/t8CK6TF/shreyak-singh-0j4bisy-Po3-M-unsplash.jpg" className="gallery-image" fluid />
        </Col>
      </Row>
    </Container>
    );
};

export default Gallery;