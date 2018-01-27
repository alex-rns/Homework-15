import React from 'react';
import Banner from './Banner';
import PricingPlans from './PricingComponents/PricingPlans';
import Faq from './PricingComponents/Faq';

const pageTitle = "Pricing";


const faq = [
  {
    question: "Lorem 1 ?",
    answer: "Lorem Ipsum ged 1."
  },
  {
    question: "Lorem 2 ?",
    answer: "Lorem Ipsum ged 2."
  }
];


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

        <section className="faq-section gray-bg">
          <div className="container">
            <h3 className="text-left">frequently asked questions</h3>
            {
              faq.map((item, index) => {
                return(
                  <Faq dataItem={item} dataIndex={index} />
                )
              })
            }
          </div>
        </section>






      </div>
    );
  }
}

export default Pricing;
