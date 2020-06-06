import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '../components/ProductCard';
import { selectProducts } from '../store/product/selectors';

import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export default function HomePage() {
  const products = useSelector(selectProducts);
  const [sortBy, setSortBy] = useState('price');

  const renderTags = () => {
    const allTags = [
      ...new Set(products.map((product) => product.tags).flat()),
    ];
    return (
      <div className="mb-1">
        Filter by:
        {allTags.map((tag, i) => (
          <Badge variant="secondary" className="ml-1" key={i}>
            {tag}
          </Badge>
        ))}
      </div>
    );
  };

  const sortedProducts = () => {
    return sortBy === 'price'
      ? [...products].sort((a, b) => a.price - b.price)
      : [...products].sort((a, b) => b.popularity - a.popularity);
  };

  const renderSortButtons = () => {
    return (
      <div className="mb-1">
        Sort by:{' '}
        <Button
          variant={sortBy === 'price' ? 'info' : 'light'}
          onClick={() => setSortBy('price')}
        >
          Price
        </Button>{' '}
        <Button
          variant={sortBy === 'popularity' ? 'info' : 'light'}
          onClick={() => setSortBy('popularity')}
        >
          Popularity
        </Button>
      </div>
    );
  };

  const renderProductCards = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {sortedProducts().map(({ name, image, price, tags, id }, i) => (
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
    );
  };

  return (
    <div style={{ margin: '1rem' }}>
      {renderTags()}
      {renderSortButtons()}
      {renderProductCards()}
    </div>
  );
}
