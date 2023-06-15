/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
    //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container>
    //     <Link to='/home'>RecepyBook</Link>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       </Nav>
    //       <Nav>
    //         <Link to='/login'>Login</Link>
    //         <Link to='/register'>Register</Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">RecepyBook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <Link to='/'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        </Link>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <Link to='/register'>
        <li className="nav-item ms-auto">
          <a className="nav-link" href="#">Register</a>
        </li>
        </Link>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default NavigationBar;