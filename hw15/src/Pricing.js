import React from 'react';
import Banner from './Banner';
import PricingPlans from './PricingComponents/PricingPlans';
import Faq from './PricingComponents/Faq';

const pageTitle = "Pricing";


const faq = [
  {
    question: "Lorem Ipsum is simply dummy text of the printing ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    question: "Readable content of a page when looking at its layout ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    question: "Suspendisse mattis leo non neque bibendum semper ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    question: "Mauris dictum purus ac dui efficitur, sed interdum ligula blandit ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    question: "Phasellus eget erat aliquet, egestas odio eget, laoreet augue ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    question: "Phasellus eget erat aliquet, egestas odio eget, laoreet augue ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
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
                  <Faq dataItem={item} key={index} />
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
