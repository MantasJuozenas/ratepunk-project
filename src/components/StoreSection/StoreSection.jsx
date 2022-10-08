import React from 'react';
import StoreDiv from './StoreDiv/StoreDiv';
import style from './StoreSection.module.scss';
import chrome from '../../assets/chrome.svg';
import apple from '../../assets/apple.svg';
import StarSection from '../UI/StarSection';
import Paragraph from '../UI/Paragraph';
import ContainerWrapper from '../UI/ContainerWrapper';

function StoreSection() {
  function clickHandler(shop) {
    if (shop === 'apple') {
      window.location.href =
        'https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk';
    } else {
      window.location.href = 'https://apps.apple.com/app/ratepunk/id1607823726';
    }
  }

  return (
    <div className={style.container}>
      <ContainerWrapper>
        <div className={style.grid}>
          <StoreDiv
            onClick={() => clickHandler('chrome')}
            img={chrome}
            alt='chrome image'
            supInfo='available in the'
            mainInfo='chrome web store'
          />
          <StoreDiv
            onClick={() => clickHandler('apple')}
            img={apple}
            alt='chrome image'
            supInfo='available in the'
            mainInfo='apple app store'
          />
          <div className={`${style.starsDiv} ${style.span_2}`}>
            <StarSection classname={style.stars} starClass={style.star} />
            <Paragraph classname={`${style.storeText} font`} text='Chrome Store reviews' />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
}

export default StoreSection;
