import React from 'react';

class PricingPlans extends React.Component {
  render() {

    const data = this.props.dataPrice;

    return (
      <section className="pricing-plans-section container section-padding-b">
        <h3 className="text-left">pricing plans</h3>
        <ul className="pricing-list row">

          <li className="col-lg-4">
            <div className="pricing-card">
              <div className="pricing-card-top accent-bg">
                <p><span>{data.basic}$</span>/ month</p>
                <h5>Basic Plan</h5>
              </div>
              <div className="pricing-card-bottom">
                <ul>
                  <li className="pricing-card-option">
                    <p className="icon-pricing-card icon-tick">Duis commodo mollis.</p>
                  </li>
                  <li className="pricing-card-option icon-pricing-card icon-tick">
                    <p>Nam aliquet sagittis.</p>
                  </li>
                  <li className="pricing-card-option icon-pricing-card icon-tick">
                    <p>Fusce eleifend lectus.</p>
                  </li>
                </ul>
                <a className="button-main" href="">Choose plan</a>
              </div>
            </div>
          </li>

          <li className="col-lg-4">
            <div className="pricing-card">
              <div className="pricing-card-top accent-bg-second">
                <p><span>{data.silver}$</span>/ month</p>
                <h5>Silver Plan</h5>
              </div>
              <div className="pricing-card-bottom">
                <ul>
                  <li className="pricing-card-option icon-pricing-card icon-tick">
                    <p>Duis commodo mollis.</p>
                  </li>
                  <li className="pricing-card-option icon-pricing-card icon-tick">
                    <p>Nam aliquet sagittis.</p>
                  </li>
                  <li className="pricing-card-option icon-pricing-card icon-tick">
                    <p>Fusce eleifend lectus.</p>
                  </li>
                  <li className="pricing-card-option icon-pricing-card icon-tick">
                    <p>Etiam pulvinar elementum.</p>
                  </li>
                </ul>
                <a className="button-main" href="">Choose plan</a>
              </div>
            </div>
          </li>

          <li className="col-lg-4">
            <div className="pricing-card">
              <div className="pricing-card-top accent-bg-third">
                <p><span>{data.gold}$</span>/ month</p>
                <h5>gold Plan</h5>
              </div>
              <div className="pricing-card-bottom">
                <ul>
                  <li className="pricing-card-option icon-pricing-card icon-tick">
                    <p>Duis commodo mollis.</p>
                  </li>
                  <li className="pricing-card-option icon-pricing-card icon-tick">
                    <p>Nam aliquet sagittis.</p>
                  </li>
                  <li className="pricing-card-option icon-pricing-card icon-tick">
                    <p>Fusce eleifend lectus.</p>
                  </li>
                  <li className="pricing-card-option icon-pricing-card icon-tick">
                    <p>Etiam pulvinar elementum.</p>
                  </li>
                </ul>
                <a className="button-main" href="">Choose plan</a>
              </div>
            </div>
          </li>
        </ul>

      </section>
    );
  }
}

export default PricingPlans;
