import React from 'react';
import MainBanner from './HomeComponents/MainBanner'
import MainAboutUs from './HomeComponents/MainAboutUs'
import OurFeatures from './HomeComponents/OurFeatures'
import ProjectsSection from './HomeComponents/ProjectsSection'
import MainServices from './HomeComponents/MainServices'
import MainTestimonials from "./HomeComponents/MainTestimonials";
import MainOurBlog from "./HomeComponents/MainOurBlog";
import QuickContact from "./HomeComponents/QuickContact";


class Home extends React.Component {
  componentDidMount(){
    document.title = "Consult Plus"
  }
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
