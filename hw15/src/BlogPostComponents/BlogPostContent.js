import React from 'react';
import { Link } from 'react-router-dom';


class BlogPostContent extends React.Component {
  render() {
    const data = this.props.dataPost;



    return (
      <section className="blog-post-section container">

        <h3 className="text-left">blog post</h3>
        <div className="blog-post-welcome">
          <img className="img-fluid" src={data.welcomeImg} alt="blog-post-welcome"/>
          <Link className="button-tag" to="/industry">{data.welcomeTag}
            <i className="fa fa-picture-o"></i>
          </Link>
        </div>

        <div className="blog-post-text">
          <h5>{data.title}</h5>
          <p>{data.firstText}</p>
        </div>

        <div className="blog-post-checked">

          {
            data.checkedText.map((item, index) => {
              return(
                <p
                  key={index}
                  className="icon-tick icon-checked">
                  {item.text}
                  </p>
              )
            })
          }
        </div>

        <div className="blog-post-bottom row align-items-center">
          <img className="img-fluid col-md-5" src={data.secondImg} alt="blog-post-second"/>
          <p className="col-md-7">{data.secondText}</p>
        </div>


        <div className="blog-post-share d-flex justify-content-end">
          <div className="share">

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

      </section>
    );
  }
}

export default BlogPostContent;
