import React from 'react';
import MainBannerCarousel from './MainBannerCarousel'

class MainBanner extends React.Component {
  render() {
    return (
      <section className="banner banner-home-page banner-bg">
        <div className="welcome-info text-white text-center text-uppercase">
          <h2>We are leading consulting company</h2>
          <h2><span>Choose your industry</span></h2>
        </div>
        <MainBannerCarousel />
      </section>
    )
  }
}

export default MainBanner;