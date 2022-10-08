import React from 'react';
import StoreDiv from './StoreDiv/StoreDiv';
import style from './StoreSection.module.scss';
import chrome from '../../assets/chrome.svg';
import apple from '../../assets/apple.svg';
import StarSection from '../UI/StarSection';
import Paragraph from '../UI/Paragraph';
import ContainerWrapper from '../UI/ContainerWrapper';

function StoreSection() {
  return (
    <div className={style.container}>
      <ContainerWrapper>
        <div className={style.grid}>
          <StoreDiv img={chrome} alt='chrome image' supInfo='available in the' mainInfo='chrome web store' />
          <StoreDiv img={apple} alt='chrome image' supInfo='available in the' mainInfo='apple app store' />
          <div className={`${style.starsDiv} ${style.span_2}`}>
            <StarSection classname={style.stars} />
            <Paragraph classname={`${style.storeText} font`} text='Chrome Store reviews' />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
}

export default StoreSection;
