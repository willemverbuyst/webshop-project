import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectProducts } from '../store/product/selectors';
import ProductCard from '../components/ProductCard';

import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export default function HomePage() {
  const products = useSelector(selectProducts).all;
  const [sortBy, setSortBy] = useState('price');

  const filteredProducts = () => {
    return products;
  };

  const renderSortedProducts = () => {
    return sortBy === 'price'
      ? filteredProducts()
          .slice()
          .sort((a, b) => a.price - b.price)
      : filteredProducts()
          .slice()
          .sort((a, b) => b.popularity - a.popularity);
  };

  const renderTags = () => {
    const allTags = [
      ...new Set(products.map((product) => product.tags).flat()),
    ];
    return (
      <>
        {allTags.map((tag, i) => (
          <Badge variant="secondary" className="ml-1" key={i}>
            {tag}
          </Badge>
        ))}
      </>
    );
  };

  return (
    <>
      <div style={{ margin: '1rem' }}>
        <div className="mb-1">Filter by: {renderTags()}</div>
        <div className="mb-1">
          Sort by:{' '}
          <Button variant="info" onClick={() => setSortBy('price')}>
            Price
          </Button>{' '}
          <Button variant="info" onClick={() => setSortBy('popularity')}>
            Popularity
          </Button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {renderSortedProducts().map(({ name, image, price, tags, id }, i) => (
          <ProductCard
            key={i}
            name={name}
            image={image}
            price={price}
            tags={tags}
            id={id}
          />
        ))}
      </div>
    </>
  );
}
