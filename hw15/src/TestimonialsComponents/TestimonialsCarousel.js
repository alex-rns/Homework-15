import React from 'react';
import $ from "jquery";

class TestimonialsCarousel extends React.Component {

  componentDidMount(){
    $('.testimonials-carousel').slick({
      swipe: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.testimonials-thumb-nav'
    });
    $('.testimonials-thumb-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.testimonials-carousel',
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      initialSlide: 1
    });
  }


  render() {
    return(
      <section className="testimonials-page-carousel-section">
        <div className="container">
          <div className="testimonials-carousel col-lg-6 offset-lg-6">

            <div className="testimonials-carousel-item">
              <blockquote className="icon-testimonials-left icon-quote-left icon-testimonials-right icon-quote-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </blockquote>
              <span >Dr.Jonathan Peeter</span>
              <p>Designation</p>
            </div>

            <div className="testimonials-carousel-item">
              <blockquote className="icon-testimonials-left icon-quote-left icon-testimonials-right icon-quote-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </blockquote>
              <span >Dr.Jonathan Peeter</span>
              <p>Designation</p>
            </div>

            <div className="testimonials-carousel-item">
              <blockquote className="icon-testimonials-left icon-quote-left icon-testimonials-right icon-quote-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </blockquote>
              <span >Dr.Jonathan Peeter</span>
              <p>Designation</p>
            </div>

            <div className="testimonials-carousel-item">
              <blockquote className="icon-testimonials-left icon-quote-left icon-testimonials-right icon-quote-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </blockquote>
              <span >Dr.Jonathan Peeter</span>
              <p>Designation</p>
            </div>

          </div>

          <div className="testimonials-thumb-nav">
            <img className="w-75" src="images/testimonials-client-4.png" alt="testimonials-client" />
              <img className="w-75" src="images/testimonials-client-5.png" alt="testimonials-client" />
                <img className="w-75" src="images/testimonials-client-6.png" alt="testimonials-client" />
                  <img className="w-75" src="images/testimonials-client-7.png" alt="testimonials-client" />
          </div>
        </div>
      </section>
    )
  }
  }

  export default TestimonialsCarousel;