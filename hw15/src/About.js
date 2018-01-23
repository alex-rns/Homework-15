import React from 'react';

import MainAboutUs from './sections/MainAboutUs'
import OurFeatures from './sections/OurFeatures'
import QuickContact from "./sections/QuickContact";


class About extends React.Component {
  render() {
    return (
      <div className="About">
        <MainAboutUs />
        <OurFeatures />
        <QuickContact />
      </div>
    );
  }
}

export default About;
