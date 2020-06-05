import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetailsPage() {
  const { id } = useParams();

  return <div>ProductDetailsPage for {id}</div>;
}
