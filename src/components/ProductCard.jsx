import React from 'react';
import { Card, Badge } from 'react-bootstrap';

export default function ProductCard({ name, image, price, tags }) {
  return (
    <Card style={{ width: '16rem', margin: '1rem' }}>
      <Card.Img
        style={{ height: '240px', objectFit: 'cover' }}
        variant="top"
        src={image}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: €{price},-</Card.Text>
        {tags.map((tag, i) => (
          <Badge variant="secondary" className="ml-1" key={i}>
            {tag}
          </Badge>
        ))}
      </Card.Body>
    </Card>
  );
}
