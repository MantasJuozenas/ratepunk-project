import React from 'react';

function Star({ starClass }) {
  return <i className={`${starClass} icon fa fa-star`} aria-hidden='true'></i>;
}

export default Star;
