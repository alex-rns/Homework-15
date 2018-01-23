import React from 'react';

const OurFeatures = () => {
  return (
    <section className="our-features-section gray-bg text-center">
      <h3>our features</h3>
      <div className="container">

        <div className="row align-items-center mb-5">
          <div className="col-md-5 text-right">
            <div
              className="features-item-left icon-features icon-features-right icon-features-support mb-5">
              <h5>24 hour support</h5>
              <p> containing Lorem Ipsum passages, and more recently with desktop publishing
                software like
                Aldus</p>
            </div>
            <div
              className="features-item-left icon-features icon-features-right icon-features-security">
              <h5>FUll security</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has
                been the</p>
            </div>
          </div>

          <div className="col-sm-2 middle-circle">
            <div className="circle-for-logo d-flex align-items-center justify-content-center">
              <img src="images/logo-icon.png" alt="logo-icon"/>
            </div>
          </div>
          <div className="col-md-5 text-left">
            <div
              className="features-item-right icon-features icon-features-left icon-features-business-boosting mb-5">
              <h5>24 hour support</h5>
              <p> containing Lorem Ipsum passages, and more recently with desktop publishing
                software like
                Aldus</p>
            </div>

            <div
              className="features-item-right icon-features icon-features-left icon-features-creative-process">
              <h5>FUll security</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has
                been the</p>
            </div>
          </div>
        </div>

        <div className="row boost-business align-items-center justify-content-between">
          <p>If you want to boost your business Contact us</p>
          <a className="button-main" href="contact-us.html">Boost your business</a>
        </div>
      </div>

    </section>
  )
};

export default OurFeatures;