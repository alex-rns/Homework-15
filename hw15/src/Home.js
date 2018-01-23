import React from 'react';
import MainBanner from './sections/MainBanner'
import MainAboutUs from './sections/MainAboutUs'
import OurFeatures from './sections/OurFeatures'
import ProjectsSection from './sections/ProjectsSection'
import MainServices from './sections/MainServices'
import MainTestimonials from "./sections/MainTestimonials";
import MainOurBlog from "./sections/MainOurBlog";
import QuickContact from "./sections/QuickContact";


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
          <MainBanner />
          <MainAboutUs />
          <OurFeatures />
          <ProjectsSection />
          <MainServices />
          <MainTestimonials />
          <MainOurBlog />
          <QuickContact />
      </div>
    );
  }
}

export default Home;
