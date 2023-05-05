/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import Recepies from '../../../layout/Recepies';

const ChefRecepies = () => {
    const params = useParams();
    console.log(params.id);
   

    const [receipies,setRecepies] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:5000/recepies')
        .then(res => res.json())
        .then(data => setRecepies(data.filter(r=>r._id == params.id)))
        .catch(error => console.error(error))
    },[])

    console.log(receipies);

    return (
        <div>
            <div className='text-center border border-primary mb-5'>
            <img src={receipies[0]?.chef_url}/>
            <p>{receipies[0]?.bio}</p>
            <p>Number Of Recepies: {receipies[0]?.number_of_recepies}</p>
            <p>Experience: {receipies[0]?.experiance}</p>
            <p>Likes: {receipies[0]?.likes}</p>
            </div>

            <Row xs={1} md={2} className="g-2">
                
        <Col>
          <Card>
            <Card.Img className='img-fluid' variant="top" src={receipies[0]?.image_url} />
            <Card.Body>
              <Card.Title>{receipies[0]?.title}</Card.Title>
              <Card.Text>
                {receipies[0]?.ingredient}
              </Card.Text>
              <Card.Text>
                {receipies[0]?.cooking_method}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img className='img-fluid' variant="top" src={receipies[2]?.image_url} />
            <Card.Body>
              <Card.Title>{receipies[2]?.title}</Card.Title>
              <Card.Text>
                {receipies[2]?.ingredient}
              </Card.Text>
              <Card.Text>
                {receipies[2]?.cooking_method}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img className='img-fluid' variant="top" src={receipies[1]?.image_url}/>
            <Card.Body>
              <Card.Title>{receipies[1]?.title}</Card.Title>
              <Card.Text>
                {receipies[1]?.ingredient}
              </Card.Text>
              <Card.Text>
                {receipies[1]?.cooking_method}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </div>
    );
};

export default ChefRecepies;