import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectProducts } from '../store/product/selectors';

import Badge from 'react-bootstrap/Badge';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const product = products.filter((product) => product.id === id * 1)[0];

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{product.name}</h3>

      <img
        src={product.image}
        alt={product.name}
        style={{
          margin: 'auto',
          height: '250px',
          width: '500px',
          objectFit: 'cover',
        }}
      />
      <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
      {product.tags.map((tag, i) => (
        <Badge variant="secondary" className="ml-1" key={i}>
          {tag}
        </Badge>
      ))}
      <p>€{product.price},-</p>
    </div>
  );
}
