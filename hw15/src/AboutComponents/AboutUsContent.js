import React from 'react';

import AboutUsVideo from './AboutUsVideo'

class AboutUsContent extends React.Component {

  render() {
    return (
      <section className="about-us-page-content">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              {
                this.props.dataContent.map((item, index) => {
                  return(
                    <div key={index}>
                      <h3 className='text-left'>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  )
                })
              }

            </div>
            <div className="col-md-5">

              <AboutUsVideo />

              <div className="form-about-us">
                <h4>FREE Consultation</h4>
                <form className="form-default container no-padding">
                  <div className="row">
                    <div className="col-6">
                      <input type="text" placeholder="name" />
                    </div>
                    <div className="col-6">
                      <input type="email" placeholder="email" />
                    </div>
                  </div>
                  <textarea rows="4" placeholder="Comment"></textarea>
                  <button className="button-main button-second-margin">Submit Now</button>

                </form>

              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default AboutUsContent;