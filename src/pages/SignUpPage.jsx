import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';

export default function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    // dispatch(login(email, password));
    setFullName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div style={{ width: '40vw', margin: 'auto' }}>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Full name:</Form.Label>
          <Form.Control
            type="texts"
            value={fullName}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <p>
          <Button variant="secondary" type="submit">
            Sign Up
          </Button>
        </p>
      </Form>
    </div>
  );
}
