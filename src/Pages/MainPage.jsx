import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ReferralForm from '../components/ReferralForm/ReferralForm';
import StoreSection from '../components/StoreSection/StoreSection';

function MainPage() {
  return (
    <div>
      <Header />
      <ReferralForm />
      <StoreSection />
      <Footer />
    </div>
  );
}

export default MainPage;
