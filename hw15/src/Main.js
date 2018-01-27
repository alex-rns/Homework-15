import React from 'react';

import  { Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Industry from './Industry';
import Contact from './Contact';
import Blog from './Blog';
import Testimonials from './Testimonials';
import Careers from './Careers';
import BlogPost from './BlogPost';
import PageNotFound from './PageNotFound';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Route exact path="/Home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/industry" component={Industry} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog-post" component={BlogPost} />
        <Route path="/testimonials" component={Testimonials} />
        {/*<Route path="/pricing" component={Pricing} />*/}
        <Route path="/careers" component={Careers} />
        <Route path="/404" component={PageNotFound} />
      </div>
    );
  }
}

export default Main;
