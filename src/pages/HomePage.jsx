import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from '../components/ProductCard';
import { selectProducts } from '../store/product/selectors';
import { fetchAllProducts, resetState } from '../store/product/actions';

import Button from 'react-bootstrap/Button';

export default function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [sortBy, setSortBy] = useState('price');
  // const allTags = [...new Set(products.map((product) => product.tags).flat())];

  // const allTagsState = allTags.reduce((a, b) => ((a[b] = !!b), a), {});

  // const [tagStates, setTagStates] = useState(allTagsState);

  // const onClick = (val) => {
  //   setTagStates({ ...tagStates, [val]: !tagStates[val] });
  // };

  // const filterByTag = () => {
  //   return products.filter((product) =>
  //     product.tags.every((p) => tagStates[p])
  //   );
  // };

  // const renderTags = () => {
  //   return (
  //      <div className="mb-1">
  //       Filter by:
  //       {allTags.map((tag, i) => (
  //         <Button
  //           key={i}
  //           variant={tagStates[tag] ? 'secondary' : 'light'}
  //           className="ml-1"
  //           value={tag}
  //           onClick={(e) => onClick(e.target.value)}
  //         >
  //           {tag}
  //         </Button>
  //       ))}
  //     </div>
  //   );
  // };

  useEffect(() => {
    dispatch(resetState());
    dispatch(fetchAllProducts);
  }, [dispatch]);

  const sortedProducts = () => {
    return sortBy === 'price'
      ? products.sort((a, b) => a.price - b.price)
      : products.sort((a, b) => b.popularity - a.popularity);
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
        {sortedProducts().map(({ title, image, price, id }, i) => (
          <ProductCard
            key={i}
            title={title}
            image={image}
            price={price}
            id={id}
          />
        ))}
      </div>
    );
  };

  return (
    <div style={{ margin: '4rem 0 0 4rem' }}>
      {!products ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* {renderTags()} */}
          {renderSortButtons()}
          {renderProductCards()}
        </div>
      )}
    </div>
  );
}
