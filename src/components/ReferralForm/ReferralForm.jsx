import React from 'react';
import Paragraph from '../UI/Paragraph';
import Form from './Form/Form';
import style from './ReferralForm.module.scss';
import InfoBoxes from './InfoBoxes/InfoBoxes';

function ReferralForm() {
  return (
    <div className={style.main}>
      <div className={style.formDiv}>
        <h2 className={style.mainText}>REFER FRIENDS AND GET REWARDS</h2>
        <Paragraph
          classname={style.infoText}
          text="Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs
          our extension. Minimum cash-out at 20 coins."
        />
        <Form />
        <Paragraph classname={style.formFooter} text='Limits on max rewards apply.' />
      </div>
      <InfoBoxes />
    </div>
  );
}

export default ReferralForm;
