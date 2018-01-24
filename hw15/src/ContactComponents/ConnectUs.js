import React from 'react';
import Iframe from 'react-iframe'

class ConnectUs extends React.Component {
  render() {
    return(
      <section className="connect-us-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h3>connect us</h3>

              <ul className="connect-list">

                <li className="connect-tel">
                  <i className="connect-icon icon-call-out"></i>
                  <span>Call Us</span>
                  <p>
                    <a href={'callto:' + this.props.dataConnect.tel.replace(/\s+/g,'')}>{'+' + this.props.dataConnect.tel}</a>
                  </p>
                </li>

                <li className="connect-email">
                  <i className="connect-icon icon-envelope-open"></i>
                  <span>Email</span>
                  <p>
                    <a href={'mailto:' + this.props.dataConnect.email}>{this.props.dataConnect.email}</a>
                  </p>
                </li>

                <li className="connect-address">
                  <i className="connect-icon icon-location-pin"></i>
                  <span>Address</span>
                  <pre>{this.props.dataConnect.address}</pre>
                </li>
              </ul>

            </div>
            <div className="map col-md-7">
              <Iframe
                url={this.props.dataConnect.map}
                width="100%"
                height="319"
                frameborder="0"
                position="relative"
                style={{border:0}}
                allowfullscreen="allowfullscreen">
              </Iframe>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ConnectUs;