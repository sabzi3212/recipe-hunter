/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';


const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('https://assignment-10-server-seven-green.vercel.app/chefs')
      .then(res => res.json())
      .then(data => setChefs(data))
      .catch(error => console.error(error))
  }, [])
  return (
    <div className='mt-5'>
      <h1 className='text-center mb-5'>Our chefs</h1>
      <Row xs={1} md={3} className="g-4">
      {/* {
            chefs.map(c => <div key={c._id} className="g-2 text-center">
              <Col>
                <Card>
                  <Card.Img className='img-fluid' variant="top" src={c.image_url} />
                  <Card.Body>
                    <Card.Title>{c.author.name}</Card.Title>
                    <Link to={`/chefs/${c._id}`}> <button className='btn-primary'>View Recipies</button></Link>
                  </Card.Body>
                </Card>
              </Col>
            
          </div>
                
              )
        } */}

      {
        chefs.map(c => <Col key={c._id}>
          <Card>
            <Card.Img variant="top" style={{ width: '400px', height: '400px' }} src={c.image_url} />
            <Card.Body className='text-center'>
              <Card.Title>Name: {c.author.name}</Card.Title>
              <Card.Title>Experiance: {c.author.experiance}</Card.Title>
              <Card.Title>Recepies: {c.author.number_of_recepies}</Card.Title>
              <Card.Title>Likes: {c.author.likes}</Card.Title>
              <Link to={`/chefs/${c._id}`}> <Button variant="secondary">View Details</Button></Link>
            </Card.Body>
          </Card>


        </Col>
        )}
    </Row>
    </div>

  );
};

export default Chefs;