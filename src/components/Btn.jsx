import React from 'react';

import Button from 'react-bootstrap/Button';

export default function Btn({ onClick, variant, className, text }) {
  return (
    <Button onClick={onClick} variant={variant} className={className}>
      {text}
    </Button>
  );
}
