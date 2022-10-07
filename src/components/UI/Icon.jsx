import React from 'react';

function Icon({ img, alt, classname }) {
  return <img className={classname} src={img} alt={alt} />;
}

export default Icon;
