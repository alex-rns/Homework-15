import React from 'react';

class Banner extends React.Component {

  render() {
    return (
      <section className="banner banner-nomain banner-bg">
        <div className="welcome-info text-white text-center text-uppercase">
          <h2><span>{this.props.dataTitle}</span></h2>
        </div>
      </section>
    )
  }
}

export default Banner;