import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ReferralForm from '../components/ReferralForm/ReferralForm';
import StoreSection from '../components/StoreSection/StoreSection';

function MainPage() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Header />
          <ReferralForm />
          <StoreSection />
          <Footer />
        </Route>
        <Route path='*'>
          <div className='container'>
            <h2>Page not found</h2>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default MainPage;
