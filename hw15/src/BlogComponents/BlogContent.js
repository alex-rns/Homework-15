import React from 'react';

import BlogCard from './BlogCard'

const cardContent = {
  title: "Blog Heading Here",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
  data: "5-12-2016",
  img: "",
  cardImgClass: "",
  video: "",
  accentBg: "",
  tagName : "Health",
  tagLink : "/industry",
  tagIcon : "fa-quote-left"
};



class BlogContent extends React.Component {



  render() {
    return(
      <section className="blog-section container">

        <h3 className="text-left">blog page</h3>

        <div className="blog-gallery row">

          <BlogCard dataCardContent={cardContent} />

          {/*<article className="col-lg-4 col-sm-6 col-12 blog-item">*/}
            {/*<Link to="/blog-post">*/}
              {/*<div className="blog-card">*/}
                {/*<div className="blog-card-text">*/}
                  {/*<h5>Blog Heading Here</h5>*/}
                  {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>*/}
                  {/*<div className="blog-card-bottom">*/}
                    {/*<p className="blog-card-data">*/}
                      {/*<i className="fa fa-clock-o"></i>*/}
                      {/*5-12-2016</p>*/}
                    {/*<div className="share share-blog-card">*/}

                      {/*<div className="share-button-open">*/}
                        {/*<i className="icon-share"></i>*/}
                      {/*</div>*/}

                      {/*<ul className="share-social row">*/}
                        {/*<li>*/}
                          {/*<a href="https://www.facebook.com/">*/}
                            {/*<i className="fa fa-facebook" aria-hidden="true"></i>*/}
                          {/*</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                          {/*<a href="https://twitter.com/">*/}
                            {/*<i className="fa fa-twitter" aria-hidden="true"></i>*/}
                          {/*</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                          {/*<a href="https://plus.google.com/">*/}
                            {/*<i className="fa fa-google-plus" aria-hidden="true"></i>*/}
                          {/*</a>*/}
                        {/*</li>*/}
                      {/*</ul>*/}
                    {/*</div>*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<a className="button-tag" href="industry.html">Health*/}
                  {/*<i className="fa fa-quote-left"></i>*/}
                {/*</a>*/}
              {/*</div>*/}
            {/*</Link>*/}
          {/*</article>*/}

          <article className="col-lg-4 col-sm-6 col-12 blog-item">
            <a href="blog-post.html">
              <div className="blog-card blog-card-img-top">
                <img className="img-fluid" src="images/blog-card-top.png" alt="blog card top" />
                  <div className="blog-card-text">
                    <h5>Blog Heading Here</h5>
                    <p>Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    <div className="blog-card-bottom">
                      <p className="blog-card-data">
                        <i className="fa fa-clock-o"></i>
                        5-12-2016</p>
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
                  <a className="button-tag" href="industry.html">Business
                    <i className="fa fa-picture-o"></i>
                  </a>
              </div>
            </a>
          </article>

          <article className="col-lg-4 col-sm-6 col-12 blog-item">
            <a href="blog-post.html">
              <div className="blog-card">
                <div className="blog-card-text">
                  <h5>Blog Heading Here</h5>
                  <p>Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                  <div className="blog-card-bottom">
                    <p className="blog-card-data">
                      <i className="fa fa-clock-o"></i>
                      5-12-2016</p>
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
                <a className="button-tag" href="industry.html">Health
                  <i className="fa fa-quote-left"></i>
                </a>
              </div>
            </a>
          </article>

          <article className="col-lg-4 col-sm-6 col-12 blog-item">
            <a href="blog-post.html">
              <div className="blog-card blog-card-img-cover">
                <img className="img-fluid" src="images/blog-card-cover-img.png" alt="blog card cover" />
                  <div className="blog-card-text">
                    <div className="blog-card-bottom">
                      <p className="blog-card-data">
                        <i className="fa fa-clock-o"></i>
                        5-12-2016</p>
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
                  <a className="button-tag" href="industry.html">Business
                    <i className="fa fa-picture-o"></i>
                  </a>
              </div>
            </a>
          </article>

          <article className="col-lg-4 col-sm-6 col-12 blog-item">
            <a href="blog-post.html">
              <div className="blog-card blog-card-accent-bg">
                <div className="blog-card-text">
                  <h5>Blog Heading Here</h5>
                  <p>Industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                  <div className="blog-card-bottom">
                    <p className="blog-card-data">
                      <i className="fa fa-clock-o"></i>
                      5-12-2016</p>
                    <div className="share share-blog-card share-blog-card-accent-bg">

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
                <a className="button-tag" href="industry.html">Health
                  <i className="fa fa-link"></i>
                </a>
              </div>
            </a>
          </article>

          <article className="col-lg-4 col-sm-6 col-12 blog-item">
            <a href="blog-post.html">
              <div className="blog-card">
                <div className="blog-card-text">
                  <h5>Blog Heading Here</h5>
                  <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                  <div className="blog-card-bottom">
                    <p className="blog-card-data">
                      <i className="fa fa-clock-o"></i>
                      5-12-2016</p>
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
                <a className="button-tag" href="industry.html">Education
                  <i className="fa fa-link"></i>
                </a>
              </div>
            </a>
          </article>

          <article className="col-lg-4 col-sm-6 col-12 blog-item">
            <a href="blog-post.html">
              <div className="blog-card blog-card-img-top">
                <iframe className="img-fluid" src="https://www.youtube.com/embed/jlWMTNZNOc0" frameborder="0" allowfullscreen></iframe>
                <div className="blog-card-text">
                  <h5>Blog Heading Here</h5>
                  <p>Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                  <div className="blog-card-bottom">
                    <p className="blog-card-data">
                      <i className="fa fa-clock-o"></i>
                      5-12-2016</p>
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
                <a className="button-tag" href="industry.html">Business
                  <i className="fa fa-youtube-play"></i>
                </a>
              </div>
            </a>
          </article>

          <article className="col-lg-4 col-sm-6 col-12 blog-item">
            <a href="blog-post.html">
              <div className="blog-card blog-card-accent-bg">
                <div className="blog-card-text">
                  <h5>Blog Heading Here</h5>
                  <p>Industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                  <div className="blog-card-bottom">
                    <p className="blog-card-data">
                      <i className="fa fa-clock-o"></i>
                      5-12-2016</p>
                    <div className="share share-blog-card share-blog-card-accent-bg">

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
                <a className="button-tag" href="industry.html">Health
                  <i className="fa fa-link"></i>
                </a>
              </div>
            </a>
          </article>

          <article className="col-lg-4 col-sm-6 col-12 blog-item">
            <a href="blog-post.html">
              <div className="blog-card blog-card-img-top">
                <img className="img-fluid" src="images/blog-card-top-2.png" alt="blog card top" />
                  <div className="blog-card-text">
                    <h5>Blog Heading Here</h5>
                    <p>Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    <div className="blog-card-bottom">
                      <p className="blog-card-data">
                        <i className="fa fa-clock-o"></i>
                        5-12-2016</p>
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
                  <a className="button-tag" href="industry.html">Technology
                    <i className="fa fa-picture-o"></i>
                  </a>
              </div>
            </a>
          </article>

        </div>

        <nav aria-label="Page gallery navigation">
          <ul className="blog-pagination pagination justify-content-center">
            <li className="page-item active">
              <a className="page-link" href="blog.html">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>

          </ul>
        </nav>

      </section>
    )
  }
}

export default BlogContent;