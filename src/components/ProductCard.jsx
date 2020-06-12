import React from 'react';
import { Link } from 'react-router-dom';

import AddRemoveButton from './AddRemoveButton';

import { Card } from 'react-bootstrap';

export default function ProductCard({ title, image, price, id }) {

  return (
    <Card style={{ width: '16rem', margin: '1rem' }}>
      <Card.Img
        style={{ height: '240px', objectFit: 'cover' }}
        variant="top"
        src={image}
      />
      <Card.Body>
        <Link to={`/products/${id}`}>
          <Card.Title>{title}</Card.Title>
        </Link>
        <Card.Text>Price: €{price},-</Card.Text>
        <AddRemoveButton id={id} />
      </Card.Body>
    </Card>
  );
}
