import React from 'react';
import { Link } from 'react-router-dom';

import Banner from './Banner'



class PageNotFound extends React.Component {
  componentDidMount(){
    document.title = "Consult Plus - 404"
  }
  render() {
    return (
      <div className="PageNotFound">
        <Banner />
        <section className="error-not-found-section">
          <div className="container">
            <div className="row error-wrap align-items-center text-center">
              <div className="col-md-6 error-number">
                <p>404</p>
              </div>
              <div className="col-md-6 error-help">
                <h3>oops !!</h3>
                <p>The page you are looking for cannot be found</p>
                <Link className="button-main button-main-margin" to="./Home">Back to home page</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PageNotFound;
