import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar className="bg-info justify-content-between">
      <Navbar.Brand href="/" className="text-white">
        Italian trips
      </Navbar.Brand>
      <div className="text-white">x products in cart</div>
    </Navbar>
  );
}
