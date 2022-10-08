import React, { useState } from 'react';
import Icon from '../UI/Icon';
import style from './Footer.module.scss';
import logo from '../../assets/logo.svg';
import Paragraph from '../UI/Paragraph';
import { Link } from 'react-router-dom';
import email_footer from '../../assets/email-footer.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import tiktok from '../../assets/tiktok.svg';
import ContainerWrapper from '../UI/ContainerWrapper';

function Footer() {
  const [active, setActive] = useState('Price Comparison');

  function isActive(e) {
    switch (e.target.textContent) {
      case 'Chrome Extension':
        setActive('Chrome Extension');
        break;
      case 'Price Comparison':
        setActive('Price Comparison');
        break;
      case 'How It Works':
        setActive('How It Works');
        break;
      case 'Ratepunk Blog':
        setActive('Ratepunk Blog');
        break;
      case 'Privacy Policy':
        setActive('Privacy Policy');
        break;
      default:
        break;
    }
  }
  return (
    <footer className={style.footer}>
      <ContainerWrapper>
        <div className={style.grid}>
          <div className={`${style.logo} ${style.span_3}`}>
            <Icon img={logo} alt='ratepunk logo' />
          </div>
          <Paragraph
            classname={`${style.footerInfo} font ${style.span_3}`}
            text="Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you're getting the best deal!"
          />
          <div className={style.quickLinks}>
            <Paragraph classname={`${style.quick} font`} text='QUICK LINKS' />
            <Link
              onClick={(e) => isActive(e)}
              className={active === 'Price Comparison' ? `${style.marginTB_active} font` : `${style.marginTB} font`}
              to='/'
            >
              Price Comparison
            </Link>
            <Link
              onClick={(e) => isActive(e)}
              className={active === 'Chrome Extension' ? `${style.marginTB_active} font` : `${style.marginTB} font`}
              to='/'
            >
              Chrome Extension
            </Link>
            <Link
              onClick={(e) => isActive(e)}
              className={active === 'How It Works' ? `${style.marginTB_active} font` : `${style.marginTB} font`}
              to='/'
            >
              How It Works
            </Link>
            <Link
              onClick={(e) => isActive(e)}
              className={active === 'Ratepunk Blog' ? `${style.marginTB_active} font` : `${style.marginTB} font`}
              to='/'
            >
              Ratepunk Blog
            </Link>
            <Link
              onClick={(e) => isActive(e)}
              className={active === 'Privacy Policy' ? `${style.marginTB_active} font` : `${style.marginTB} font`}
              to='/'
            >
              Privacy Policy
            </Link>
          </div>
          <div className={style.contacts}>
            <Paragraph classname={`${style.quick} font`} text='CONTACT' />
            <div className={style.info}>
              <Icon img={email_footer} alt='email logo' />
              <Paragraph classname={`${style.email} font`} text='hi@ratepunk.com' />
            </div>
          </div>
          <div className={style.social}>
            <Paragraph classname={`${style.quick} font`} text='SOCIAL' />
            <div className={style.icons}>
              <Icon classname={style.socialIcon} img={instagram} alt='email logo' />
              <Icon classname={style.socialIcon} img={facebook} alt='email logo' />
              <Icon classname={style.socialIcon} img={linkedin} alt='email logo' />
              <Icon classname={style.socialIcon} img={twitter} alt='email logo' />
              <Icon classname={style.socialIcon} img={tiktok} alt='email logo' />
            </div>
          </div>
          <Paragraph
            classname={`${style.footerText} font ${style.span_3}`}
            text='&copy; 2021 Ratepunk. All Rights Reserved'
          />
        </div>
      </ContainerWrapper>
    </footer>
  );
}

export default Footer;
