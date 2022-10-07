import React from 'react';
import style from './Form.module.scss';
import email from '../../../assets/email.svg';
import Icon from '../../UI/Icon';

function Form() {
  return (
    <form className={style.form}>
      <label htmlFor='email' className={style.id}>
        <Icon img={email} alt='email icon' />
      </label>
      <input id='email' className={style.emailInput} type='text' placeholder='Enter your email address' />
      <button className={style.referralBtn} type='submit'>
        Get Referral Link
      </button>
    </form>
  );
}

export default Form;
