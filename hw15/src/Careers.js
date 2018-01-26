import React from 'react';
import Banner from './Banner'
import NewJobs from './CareersComponents/NewJobs'
import MainAboutUs from "./HomeComponents/MainAboutUs";
import MainTestimonials from "./HomeComponents/MainTestimonials";

const pageTitle = "Careers";
const $ = window.$;

class Careers extends React.Component {
  componentDidMount(){
    document.title = "Consult Plus - Careers";

    $('.testimonials-carousel').slick({
      swipe: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.testimonials-thumb-nav'
    });
    $('.testimonials-thumb-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.testimonials-carousel',
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      initialSlide: 1
    });
  }
  render() {
    return (
      <div className="Careers">
        <Banner dataTitle={ pageTitle } />
        <NewJobs />
        <MainAboutUs />
        <MainTestimonials/>
      </div>
    );
  }
}

export default Careers;
