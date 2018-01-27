import React from 'react';
import Banner from './Banner';
import PricingPlans from './PricingComponents/PricingPlans';
import Faq from './PricingComponents/Faq';

const pageTitle = "Pricing";

const price = {
  basic: 100,
  silver: 150,
  gold: 200
};


class Pricing extends React.Component {
  componentDidMount() {
    document.title = "Consult Plus - Pricing"
  }

  render() {
    return (
      <div className="Pricing">
        <Banner dataTitle={pageTitle}/>
        <PricingPlans dataPrice={price} />
        <Faq />
      </div>
    );
  }
}

export default Pricing;
