import React from 'react';
import Icon from '../../UI/Icon';
import style from './InfoBox.module.scss';

function InfoBox({ img, alt, stepText, mainText, subText, classname }) {
  return (
    <div className={style.containerDiv}>
      <Icon classname={classname} img={img} alt={alt} />
      <div className={style.boxInfo}>
        <p className={`${style.step} font`}>{stepText}</p>
        <h2 className={style.mainText}>{mainText}</h2>
        <p className={`${style.subText} font`}>{subText}</p>
      </div>
    </div>
  );
}

export default InfoBox;
