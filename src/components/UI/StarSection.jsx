import React from 'react';
import Star from './Star';

function StarSection({ classname, starClass }) {
  return (
    <div className={classname}>
      <Star starClass={starClass} />
      <Star starClass={starClass} />
      <Star starClass={starClass} />
      <Star starClass={starClass} />
      <Star starClass={starClass} />
    </div>
  );
}

export default StarSection;
