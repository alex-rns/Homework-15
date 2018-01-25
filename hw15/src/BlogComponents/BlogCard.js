import React from 'react';
import { Link } from 'react-router-dom';

class BlogCard extends React.Component {
  render() {
    return(
      <article className="col-lg-4 col-sm-6 col-12 blog-item">
        <Link to="/blog-post">
          <div className={'blog-card ' + this.props.dataCardContent.cardImgClass}>
            {this.props.dataCardContent.img}
            <div className="blog-card-text">
              <h5>{this.props.dataCardContent.title}</h5>
              <p>{this.props.dataCardContent.text}</p>
              <div className="blog-card-bottom">
                <p className="blog-card-data">
                  <i className="fa fa-clock-o"></i>
                  {this.props.dataCardContent.data}</p>
                <div className="share share-blog-card">

                  <div className="share-button-open">
                    <i className="icon-share"></i>
                  </div>

                  <ul className="share-social row">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://plus.google.com/">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Link className="button-tag" to={this.props.dataCardContent.tagLink}>{this.props.dataCardContent.tagName}
              <i className={"fa " + this.props.dataCardContent.tagIcon}></i>
            </Link>
          </div>
        </Link>
      </article>
    )
  }
}

export default BlogCard;