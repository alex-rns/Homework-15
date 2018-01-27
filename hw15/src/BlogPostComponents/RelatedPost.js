import React from 'react';

class RelatedPost extends React.Component {
  render() {
    const data = this.props.dataRelatedPost;

    return (
      <section className="related-post-section container">
        <h5>related post</h5>
        <ul className="row">

          {
            data.map((item, index) => {
              return(
                <li key={index} className="col-lg-3 col-sm-6 col-12 related-post-item">
                  <a href="#">
                    <img className="img-fluid" src={item.img} alt="related-post"/>
                    <h6>{item.title}</h6>
                    <span>{item.date}</span>
                  </a>
                </li>
              )
            })
          }

        </ul>
      </section>
    );
  }
}

export default RelatedPost;
