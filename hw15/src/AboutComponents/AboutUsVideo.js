import React from 'react';
import Iframe from 'react-iframe'

class AboutUsVideo extends React.Component {

  render() {
    return (
      <div className="about-us-video-section">
        <Iframe url="https://www.youtube.com/embed/jlWMTNZNOc0"
                frameborder="0"
                allowfullscreen="allowfullscreen">
        </Iframe>
      </div>
    )
  }
}

export default AboutUsVideo;