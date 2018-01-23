import React from 'react';

import Banner from './AboutComponents/Banner'
import AboutUsContent from './AboutComponents/AboutUsContent'
import AboutUsCard from './AboutComponents/AboutUsCard';
import Testimonials from './HomeComponents/MainTestimonials'

const pageTitle = "About Us";

const aboutUsText = [
  {
    title: 'About us',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing .'
  },{
    title: 'Vision',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'
  },{
    title: 'mission',
    text: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
  },
];

class About extends React.Component {
  componentDidMount(){
    document.title = "Consult Plus - About"
  }
  render() {
    return (
      <div className="About">
        <Banner dataTitle={ pageTitle } />
        <AboutUsContent dataContent={ aboutUsText } />
        <AboutUsCard />
        <Testimonials />
      </div>
    );
  }
}

export default About;
