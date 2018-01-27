import React from 'react';
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component'

class BlogCard extends React.Component {
  render() {

    let data = this.props.dataCardContent;

    let Card = data.map((item, index) => {

      let imgCardClass;
      let noCardImg;
      let accentBgCard;
      let imgCover;
      let dataDisplay;

      imgCardClass = (item.img) ? "blog-card-img-top " : noCardImg = "d-none";

      if (item.accentBg) {
        accentBgCard = " blog-card-accent-bg d-block "
      }

      if (item.imgCover){
        imgCover = " blog-card-img-cover";  dataDisplay = "d-none"
      }

      return (
        <article key={index} className="col-lg-4 col-sm-6 col-12 blog-item">
          <Link to="/blog-post">
            <div className={"blog-card " + imgCardClass + accentBgCard + imgCover}>
              <img className={"img-fluid " + noCardImg} src={item.img} alt="blog card top" />
              <div className="blog-card-text">
                <h5 className={dataDisplay}>{item.title}</h5>
                <p className={dataDisplay}>{item.text}</p>
                <div className="blog-card-bottom">
                  <p className="blog-card-data">
                    <i className="fa fa-clock-o"></i>
                    {item.date}</p>
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

              <a className="button-tag" href={item.tag.tagLink}>{item.tag.tagName}
                <i className={"fa " + item.tag.tagIcon}></i>
              </a>
            </div>
          </Link>
        </article>
      )
    });

    return (
      <Masonry className="blog-gallery row">
        {Card}
      </Masonry>
    )
  }
}

export default BlogCard;