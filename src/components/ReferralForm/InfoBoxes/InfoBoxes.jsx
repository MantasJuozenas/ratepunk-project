import React from 'react';
import InfoBox from '../InfoBox/InfoBox';
import invite from '../../../assets/invite.svg';
import collect from '../../../assets/collect-coins.svg';
import voucher from '../../../assets/voucher.svg';

function InfoBoxes() {
  return (
    <div>
      <InfoBox
        img={invite}
        alt='invite image'
        stepText='step 1'
        mainText='invite friends'
        subText='Refer friends with your unique referral link.'
      />
      <InfoBox
        img={collect}
        alt='collect-coins image'
        stepText='step 2'
        mainText='collect coins'
        subText='Get 1 coin for each friend that installs our extension using your referral link.'
      />
      <InfoBox
        img={voucher}
        alt='voucher image'
        stepText='step 3'
        mainText='get voucher'
        subText='Redeem for a $20 hotel booking voucher once you collect 20 coins.'
      />
    </div>
  );
}

export default InfoBoxes;
