import React from 'react';

import Banner from './Banner'
import Testimonials from './HomeComponents/MainTestimonials'
import IndustryContent from "./IndustryComponents/IndustryContent";

const pageTitle = "Industry";


class Industry extends React.Component {
  componentDidMount(){
    document.title = "Consult Plus - Industry"
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
