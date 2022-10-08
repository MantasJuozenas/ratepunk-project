import React from 'react';
import Icon from '../../UI/Icon';
import Paragraph from '../../UI/Paragraph';
import style from './StoreDiv.module.scss';

function StoreDiv({ img, alt, supInfo, mainInfo, onClick }) {
  return (
    <div className={style.storeDiv} onClick={(e) => onClick(e)}>
      <Icon img={img} alt={alt} classname={style.storeImage} />
      <div className={style.infoDiv}>
        <Paragraph classname={`${style.supInfo} font`} text={supInfo} />
        <Paragraph classname={`${style.mainInfo} font`} text={mainInfo} />
      </div>
    </div>
  );
}

export default StoreDiv;
