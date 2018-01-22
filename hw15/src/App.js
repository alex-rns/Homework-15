import React from 'react';
import Header from './Header'
import Footer from './Footer'
import MainBanner from './sections/MainBanner'
import MainAboutUs from './sections/MainAboutUs'
import OurFeatures from './sections/OurFeatures'
import ProjectsSection from './sections/ProjectsSection'
import MainServices from './sections/MainServices'
import MainTestimonials from "./sections/MainTestimonials";
import MainOurBlog from "./sections/MainOurBlog";
import QuickContact from "./sections/QuickContact";

class App extends React.Component {
  render() {
    return (
      <div>

        <div className="wrapper main-page">
          <Header />
          <MainBanner />
          <MainAboutUs />
          <OurFeatures />
          <ProjectsSection />
          <MainServices />
          <MainTestimonials />
          <MainOurBlog />
          <QuickContact />
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
