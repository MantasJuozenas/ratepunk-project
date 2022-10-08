import React, { useEffect, useState } from 'react';
import style from './Form.module.scss';
import email from '../../../assets/email.svg';
import Icon from '../../UI/Icon';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import successImg from '../../../assets/success.svg';
import Paragraph from '../../UI/Paragraph';

const initValues = {
  email: '',
};

function Form() {
  const [success, setSuccess] = useState(false);

  async function getData() {
    const resp = await fetch('https://api.jsonbin.io/v3/b/63416e3965b57a31e68f480a', {
      headers: { 'X-Master-Key': '$2b$10$SEaokdxeAhhznN/BrLj1TulpwG4UYb.rKI556LuSjGZ3ZYbKYcUXG' },
      method: 'GET',
      required: true,
    });
    const data = await resp.json();
    // This data is the last saved email address
    console.log(data);
  }
  useEffect(() => {
    getData();
  }, []);

  const formik = useFormik({
    initialValues: initValues,
    onSubmit: async (values) => {
      setSuccess(true);
      const resp = await fetch('https://api.jsonbin.io/v3/b/63416e3965b57a31e68f480a', {
        headers: {
          'X-Master-Key': '$2b$10$SEaokdxeAhhznN/BrLj1TulpwG4UYb.rKI556LuSjGZ3ZYbKYcUXG',
          'Content-type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(values),
      });
      const data = await resp.json();
      console.log(data);
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email cannot be empty.').email('Should be a valid email address'),
    }),
  });

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
      {success ? (
        <div className={style.successDiv}>
          <Icon img={successImg} alt='success image' />
          <Paragraph classname={`${style.successMsg} font`} text='Your email is confirmed!' />
        </div>
      ) : (
        <p className={`${style.errorMsg} font`}>{formik.errors.email ? formik.errors.email : ''}</p>
      )}
      <div className={success ? `${style.successTrue}` : `${style.formDiv}`}>
        {success ? (
          ''
        ) : (
          <label htmlFor='email' className={style.id}>
            <Icon img={email} alt='email icon' />
          </label>
        )}
        <input
          onChange={formik.handleChange}
          value={success ? '' : formik.values.email}
          onBlur={formik.handleBlur}
          name='email'
          className={formik.touched.email && formik.errors.email ? `${style.errorInput}` : `${style.emailInput}`}
          type='text'
          placeholder={success ? 'https://ratepunk.com/referral' : 'Enter your email address'}
          disabled={success ? true : false}
        />
        <button className={style.referralBtn} type='submit'>
          {success ? 'Copy' : 'Get Referral Link'}
        </button>
      </div>
    </form>
  );
}

export default Form;
