import React from 'react';
import { useSelector } from 'react-redux';

import { selectProducts } from '../store/product/selectors';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const products = useSelector(selectProducts).all;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {products.map(({ name, image, price, tags }, i) => (
        <ProductCard
          key={i}
          name={name}
          image={image}
          price={price}
          tags={tags}
        />
      ))}
    </div>
  );
}
