import React from 'react';

import Banner from './AboutComponents/Banner'
import Testimonials from './HomeComponents/MainTestimonials'
import IndustryContent from "./IndustryComponents/IndustryContent";

const pageTitle = "Industry";


class Industry extends React.Component {
  componentDidMount(){
    document.title = "Consult Plus - About"
  }
  render() {
    return (
      <div className="Industry">
        <Banner dataTitle={ pageTitle } />
        <IndustryContent />
        <Testimonials />
      </div>
    );
  }
}

export default Industry;
