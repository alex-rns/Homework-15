import React from 'react';
import Banner from './Banner'
import ProjectsSection from './HomeComponents/ProjectsSection'
import HappyClients from './TestimonialsComponents/HappyClients'
import TestimonialsCarousel from './TestimonialsComponents/TestimonialsCarousel'

const pageTitle = "Testimonials";

const happyClient = [
  {
    img: "images/happy-client-1.png",
    blockqoute: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took.",
    name: "Client name",
    designation: 'designation'
  },
  {
    img: "images/happy-client-2.png",
    blockqoute: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took.",
    name: "Client name",
    designation: 'designation2'
  },
  {
    img: "images/happy-client-3.png",
    blockqoute: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took.",
    name: "Client name",
    designation: 'designation3'
  },
  {
    img: "images/happy-client-4.png",
    blockqoute: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took.",
    name: "Client name",
    designation: 'designation4'
  },

];

class Testimonials extends React.Component {
  componentDidMount() {
    document.title = "Consult Plus - Testimonials"
  }

  render() {
    return (
      <div className="Testimonials">
        <Banner dataTitle={pageTitle}/>
        <HappyClients dataClient={happyClient}/>
        <TestimonialsCarousel />
        <ProjectsSection/>
      </div>
    );
  }
}

export default Testimonials;
