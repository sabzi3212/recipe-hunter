/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () =>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error);
    })
  }
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
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">RecepyBook</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul className="navbar-nav">
    //         <Link to='/'>
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">Home</a>
    //           </li>

    //         </Link>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Blog</a>
    //         </li>
    //         {
    //           user ?
    //             <Link>
    //               <Button onClick={handleLogout} variant="secondary">LogOut</Button>
    //             </Link>
    //             :
    //             <Link to='/login'>
    //             <li className="nav-item">
    //                 <a className="nav-link" href="#">Login</a>
    //               </li>

    //             </Link>
    //     }
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to='/'><div className="navbar-brand">RecepyBook</div></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {user ? (
              <li className="nav-item">
                <Button onClick={handleLogout} variant="secondary">
                  Logout
                </Button>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;