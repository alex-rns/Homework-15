import React from 'react';

class MainBanner extends React.Component {
  render() {

    const welcomeCarouselItemList = [
      {
        text: 'Education',
        iconClassName: 'icon-education'
      },
      {
        text: 'Business',
        iconClassName: 'icon-business'
      },
      {
        text: 'Technology',
        iconClassName: 'icon-technology'
      },
      {
        text: 'Banking',
        iconClassName: 'icon-banking'
      },
      {
        text: 'Real Estate',
        iconClassName: 'fa-3x icon-home'
      },
      {
        text: 'Communication',
        iconClassName: 'fa fa-3x fa-volume-control-phone'
      },
      {
        text: 'Law',
        iconClassName: 'fa fa-3x fa-balance-scale'
      },
      {
        text: 'Construction',
        iconClassName: 'fa fa-3x fa-wrench'
      }
    ];

    return (
      <section className="banner banner-home-page banner-bg">
        <div className="welcome-info text-white text-center text-uppercase">
          <h2>We are leading consulting company</h2>
          <h2><span>Choose your industry</span></h2>
        </div>
        <div id="welcomeCarousel" className="container welcome-carousel">
          {
            welcomeCarouselItemList.map((item, index) =>{
              return (
                <div className="col-sm-3"
                     key={index}>
                  <a
                    href="industry.html"
                    className="d-block link-industry text-white text-center text-uppercase">
                  <i className={item.iconClassName + ' icon-industry'}></i>
                    {item.text}
                  </a>
                </div>
            )
          })
          }
        </div>
      </section>
    )
  }
}

export default MainBanner;