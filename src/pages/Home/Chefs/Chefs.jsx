/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/chefs')
      .then(res => res.json())
      .then(data => setChefs(data))
      .catch(error => console.error(error))
  }, [])
  return (
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
              <Card.Title>{c.author.name}</Card.Title>
              <Link to={`/chefs/${c._id}`}> <Button variant="secondary">View Details</Button></Link>
            </Card.Body>
          </Card>


        </Col>
        )}
    </Row>

  );
};

export default Chefs;