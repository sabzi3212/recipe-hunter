/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-5">
      <Container fluid>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <a href="#">Privacy Policy</a>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            <p>© 2023 Company, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
};

export default Footer;