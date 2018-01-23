import React from 'react';

const MainAboutUs = () => {

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
      <a href="about-us.html" className="button-main button-main-margin">Read More</a>

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
};

export default MainAboutUs;