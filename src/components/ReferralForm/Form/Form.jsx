import React from 'react';
import style from './Form.module.scss';
import email from '../../../assets/email.svg';

function Form() {
  return (
    <form className={style.form}>
      <label htmlFor='search' className={style.id}>
        <img src={email} alt='email icon' />
      </label>
      <input className={style.emailInput} type='text' placeholder='Enter your email address' />
      <button className={style.referralBtn} type='submit'>
        Get Referral Link
      </button>
    </form>
  );
}

export default Form;
