import React from 'react';
import $ from 'jquery';
import 'slick-carousel';

class MainTestimonials extends React.Component {

  componentDidMount(){
    $('.blockquote-carousel').slick({
      swipe: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.blockquote-thumb-nav'
    });
    $('.blockquote-thumb-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.blockquote-carousel',
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      initialSlide: 1
    });
  }

  render(){

    const testimonialsList = [
      {
        blockqouteText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specibook. It has survived not only five centuries, but also the leap into electronic typesetting.unchanged.',
        clientName: 'ClientName',
        designation: 'Designation'
      },
      {
        blockqouteText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specibook. It has survived not only five centuries, but also the leap into electronic typesetting.unchanged.',
        clientName: 'ClientName2',
        designation: 'Designation2'
      },
      {
        blockqouteText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specibook. It has survived not only five centuries, but also the leap into electronic typesetting.unchanged.',
        clientName: 'ClientName3',
        designation: 'Designation3'
      }
    ];

    return (
      <section className="testimonials-section text-center">
        <div className="container">
          <h3 className="text-white">Testimonials</h3>
          <div className="blockquote-thumb-nav">

            {
              testimonialsList.map((item, index) => {
                return (
                  <img
                    className="w-75"
                    key={index}
                    src={'images/testimonials-client-' + (index + 1) + '.png'}
                    alt="testimonials-client"/>
                )
              })
            }
          </div>

          <div className="blockquote-carousel">
            {
              testimonialsList.map((item, index) => {
                return (
                  <blockquote key={index}>
                    <p className="blockquote-text">{item.blockqouteText}</p>
                    <p className="blockquote-client-name text-uppercase">{item.clientName}</p>
                    <p>{item.designation}</p>
                  </blockquote>
                )
              })
            }

          </div>
        </div>
      </section>

    )
  }
}

export default MainTestimonials;