import React from 'react';
import Icon from '../../UI/Icon';
import style from './StoreDiv.module.scss';

function StoreDiv({ img, alt }) {
  return (
    <div className={style.storeDiv}>
      <Icon img={img} alt={alt} />
    </div>
  );
}

export default StoreDiv;
