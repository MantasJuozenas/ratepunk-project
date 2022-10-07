import React from 'react';
import Header from '../components/Header/Header';
import ReferralForm from '../components/ReferralForm/ReferralForm';
import StoreSection from '../components/StoreSection/StoreSection';

function MainPage() {
  return (
    <div>
      <Header />
      <ReferralForm />
      <StoreSection />
    </div>
  );
}

export default MainPage;
