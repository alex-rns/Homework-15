import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Main from "./Main";

class App extends React.Component {
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
