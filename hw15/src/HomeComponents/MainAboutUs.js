import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import 'slick-carousel';

class MainAboutUs extends React.Component{

  componentDidMount(){
    $('#aboutCarousel').slick({
      autoplay: true,
      arrows: true,
      infinite: true,
      slidesToShow: 5,
      variableWidth: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  render() {
    const aboutCarouselLogoList = [
      {
        imgLogo: 'images/about-us-logo'
      },
      {
        imgLogo: 'images/about-us-logo'
      },
      {
        imgLogo: 'images/about-us-logo'
      },
      {
        imgLogo: 'images/about-us-logo'
      },
      {
        imgLogo: 'images/about-us-logo'
      },
      {
        imgLogo: 'images/about-us-logo'
      },
      {
        imgLogo: 'images/about-us-logo'
      }
    ];

    return(
      <section className="about-us-section text-center">
        <h3>About us</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of
          type
          and scrambled.</p>
        <Link to="/about" className="button-main button-main-margin">Read More</Link>

        <div className="container about-carousel">
          <ul id="aboutCarousel">

            {
              aboutCarouselLogoList.map((item, index) =>{
                return (
                  <li
                    key={index}>
                    <a>
                      <img
                        src={item.imgLogo + (index+1) + '.png'}
                        alt={item.imgLogo.substr(7)}/>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    )
  }
}

export default MainAboutUs;