import React from 'react';

import Banner from './Banner'
import ConnectUs from './ContactComponents/ConnectUs'
import WriteToUs from './ContactComponents/WriteToUs'

const pageTitle = "Contact Us";

const connect = {
  tel : "885 6586 5554",
  email : "info@consultplus.com",
  address : "Department 98\n" +
  "44-46 Morningside Road\n" +
  "Edinburgh, Scotland",
  map : "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3668.3970716265853!2d32.07126853611893!3d49.44769140099773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1515000154105"
};


class Contact extends React.Component {
  componentDidMount(){
    document.title = "Consult Plus - Contact"
  }
  render() {
    return (
      <div className="Industry">
        <Banner dataTitle={ pageTitle } />
        <ConnectUs dataConnect={ connect }/>
        <WriteToUs />
      </div>
    );
  }
}

export default Contact;
