import React from 'react';

function Icon({ img, alt, classname, onClick }) {
  return <img onClick={onClick} className={classname} src={img} alt={alt} />;
}

export default Icon;
