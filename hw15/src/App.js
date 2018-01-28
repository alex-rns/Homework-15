import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Main from "./Main";
import $ from "jquery";

class App extends React.Component {
  componentDidMount(){
    $('a[href=""], button').on('click', function (event) {
      event.preventDefault();
    })
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper main-page">
          <Header />
          <Main />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
