import React from 'react';
import Icon from '../../UI/Icon';
import style from './InfoBox.module.scss';

function InfoBox({ img, alt, stepText, mainText, subText }) {
  return (
    <div className={style.containerDiv}>
      <Icon img={img} alt={alt} />
      <p className={style.step}>{stepText}</p>
      <h2 className={style.mainText}>{mainText}</h2>
      <p className={style.subText}>{subText}</p>
    </div>
  );
}

export default InfoBox;
