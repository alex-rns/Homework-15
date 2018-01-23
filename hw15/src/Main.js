import React from 'react';

import  { Route } from 'react-router-dom';

import Home from './Home';
import About from './About';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/*<Route path="/industry" component={Industry} />*/}
        {/*<Route path="/contact" component={Contact} />*/}
        {/*<Route path="/blog-post" component={BlogPost} />*/}
        {/*<Route path="/testimonials" component={Testimonials} />*/}
        {/*<Route path="/pricing" component={Pricing} />*/}
        {/*<Route path="/404" component={PageNotFound} />*/}
      </div>
    );
  }
}

export default Main;
