/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div className='text-center'>
        {
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
        }
        </div>
    
    );
};

export default Chefs;