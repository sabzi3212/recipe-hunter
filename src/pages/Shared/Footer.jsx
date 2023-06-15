/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer mt-5" style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4}>
            <h4>Recipy Book</h4>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <ul>
              <li>
                <a href="/">Recipes</a>
              </li>
              <li>
                <a href="/blogs">Blog</a>
              </li>
              <li>
                <a href="/chefs">Chefs</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
    );
};

export default Footer;