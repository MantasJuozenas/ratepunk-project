import React from 'react';
import Form from './Form/Form';
import style from './ReferralForm.module.scss';

function ReferralForm() {
  return (
    <div className={style.main}>
      <div className={style.formDiv}>
        <h2 className={style.mainText}>REFER FRIENDS AND GET REWARDS</h2>
        <p className={style.infoText}>
          Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs
          our extension. Minimum cash-out at 20 coins.
        </p>
        <Form />
        <p className={style.formFooter}>Limits on max rewards apply.</p>
      </div>
    </div>
  );
}

export default ReferralForm;
