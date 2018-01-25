import React from 'react';
import $ from 'jquery';
import 'slick-carousel';

class MainBannerCarousel extends React.Component {

  componentDidMount() {
    $('#welcomeCarousel').slick({
      autoplay: true,
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 544,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    });
  }

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
        <div id="welcomeCarousel" className="container welcome-carousel">
          {
            welcomeCarouselItemList.map((item, index) =>{
              return (
                <div className="col-sm-3 mw-100"
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
    )
  }
}

export default MainBannerCarousel;