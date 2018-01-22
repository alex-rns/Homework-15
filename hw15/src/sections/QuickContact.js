import React from 'react';

const QuickContact = () =>{
  return(
    <section className="quick-contact-section">
      <h3>Quick contact</h3>
      <div className="container">
        <div className="row">

          <a href="mailto:info@consultplus.com" className="col-sm-4 quick-contact-block">
            <div className="quick-contact-block-wrap icon-quick-contact icon-email">
              <div className="quick-contact-block-info">
                <h5>Email</h5>
                <span>info@consultplus.com</span>
              </div>
            </div>
          </a>

          <a href="callto:9188798767990" className="col-sm-4 quick-contact-block">
            <div className="quick-contact-block-wrap icon-quick-contact icon-call-us">
              <div className="quick-contact-block-info">
                <h5>Call us</h5>
                <span>+91 8879 8767 990</span>
              </div>
            </div>
          </a>

          <a href="mailto:consult@career.com" className="col-sm-4 quick-contact-block">
            <div className="quick-contact-block-wrap icon-quick-contact icon-career">
              <div className="quick-contact-block-info">
                <h5>Career</h5>
                <span>consult@career.com</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
};

export default QuickContact;