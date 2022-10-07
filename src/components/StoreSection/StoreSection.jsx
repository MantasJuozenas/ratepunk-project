import React from 'react';
import StoreDiv from './StoreDiv/StoreDiv';
import style from './StoreSection.module.scss';

function StoreSection() {
  return (
    <div className={style.container}>
      <StoreDiv />
      <StoreDiv />
    </div>
  );
}

export default StoreSection;
