import React from 'react';
import Star from './Star';

function StarSection({ classname }) {
  return (
    <div className={classname}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

export default StarSection;
