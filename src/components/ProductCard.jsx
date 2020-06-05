import React from 'react';
import { Link } from 'react-router-dom';

import AddRemoveButton from './AddRemoveButton';

import { Card, Badge } from 'react-bootstrap';

export default function ProductCard({ name, image, price, tags, id }) {
  return (
    <Card style={{ width: '16rem', margin: '1rem' }}>
      <Card.Img
        style={{ height: '240px', objectFit: 'cover' }}
        variant="top"
        src={image}
      />
      <Card.Body>
        <Link to={`/products/${id}`}>
          {' '}
          <Card.Title>{name}</Card.Title>
        </Link>

        <Card.Text>Price: €{price},-</Card.Text>
        {tags.map((tag, i) => (
          <Badge variant="secondary" className="ml-1" key={i}>
            {tag}
          </Badge>
        ))}
        <AddRemoveButton id={id} />
      </Card.Body>
    </Card>
  );
}
