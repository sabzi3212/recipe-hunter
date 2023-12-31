/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';



const Register = () => {


  const [error, setError] = useState('');

  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name,photo,email,password);
  
    createUser(email,password)
    .then(result =>{
      const createdUser =result.user;
      console.log(createdUser);
      navigate('/')
    })
    .catch(error =>{
      console.log(error);
      setError(error.message);
    })
  }
  return (
    <Container className='mx-auto w-25'>
    <h3>Please Register</h3>
    <Form onSubmit={handleRegister}>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Your Name</Form.Label>
<Form.Control name='name' type="text" placeholder="Enter your name" required />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Photo URL</Form.Label>
<Form.Control name='photo' type="text" placeholder="Enter your photo url" required />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control name='email' type="email" placeholder="Enter email" required />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control maxLength={6} name='password' type="password" placeholder="Password" required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" name='accept' label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} required />
</Form.Group>
<Button variant="primary" type="submit">
Register
</Button>
<br />
<Form.Text className="text-muted text-secondary">
  Already have an account? <Link to='/login'>Login Now</Link>
</Form.Text>
{
  <Form.Text className="text-muted text-success">
  {error}
</Form.Text>
}
<Form.Text className="text-muted text-danger">
  
</Form.Text>
</Form>
    
</Container>
  );
};

export default Register;