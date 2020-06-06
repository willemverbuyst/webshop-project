import React from 'react';
import { Link } from 'react-router-dom';

import AddRemoveButton from './AddRemoveButton';

import { Card, Badge } from 'react-bootstrap';

export default function ProductCard({ name, image, price, tags, id }) {
  const renderTags = () => {
    return tags.map((tag, i) => (
      <Badge key={i} variant="secondary" className="ml-1">
        {tag}
      </Badge>
    ));
  };

  return (
    <Card style={{ width: '16rem', margin: '1rem' }}>
      <Card.Img
        style={{ height: '240px', objectFit: 'cover' }}
        variant="top"
        src={image}
      />
      <Card.Body>
        <Link to={`/products/${id}`}>
          <Card.Title>{name}</Card.Title>
        </Link>
        <Card.Text>Price: €{price},-</Card.Text>
        {renderTags()}
        <AddRemoveButton id={id} />
      </Card.Body>
    </Card>
  );
}
