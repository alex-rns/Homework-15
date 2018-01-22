import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">

        <div className="main-footer-top row align-items-top ">
          <div className="main-footer-logo col-md-2 align-self-center">
            <a href="index.html">
              <img className="img-fluid" src="images/logo.png" alt="logo"/>
            </a>
          </div>
          <div className="offset-lg-2 col-lg-2 offset-0 col-md-3 col-6">
            <h5>navigation</h5>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about-us.html">about us</a>
              </li>
              <li>
                <a href="industry.html">industry</a>
              </li>
              <li>
                <a href="">services</a>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" href="" role="button"
                   data-toggle="dropdown"
                   data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
                  pages
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="blog.html">Blog</a>
                  <a className="dropdown-item" href="blog-post.html">Blog post</a>
                  <a className="dropdown-item" href="testimonials.html">Testimonials</a>
                  <a className="dropdown-item" href="pricing.html">Pricing</a>
                  <a className="dropdown-item" href="careers.html">Careers</a>
                  <a className="dropdown-item" href="404.html">404</a>
                </div>
              </li>
              <li>
                <a href="contact-us.html">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <h5>Industary</h5>
            <ul>
              <li>
                <a href="industry.html">Education</a>
              </li>
              <li>
                <a href="industry.html">business</a>
              </li>
              <li>
                <a href="industry.html">realestate</a>
              </li>
              <li>
                <a href="industry.html">technology</a>
              </li>
              <li>
                <a href="industry.html">banking</a>
              </li>
              <li>
                <a href="industry.html">communication</a>
              </li>
              <li>
                <a href="industry.html">much more</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>News letter</h5>
            <p>Enter your email address to subscribe our notification of our new post & features by
              email.</p>
            <form className="main-footer-form">
              <input type="email" placeholder="Email Address"/>
              <button className="button-main button-footer-subscribe">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="main-footer-bottom row">
          <div className="main-footer-copyright">
            <p>Copyright © 2016 <a href="">Consultplus theme.</a></p>
          </div>
          <ul className="main-footer-social row">
            <li>
              <a className="social-facebook" href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a className="social-twitter" href="https://twitter.com/">twitter</a>
            </li>
            <li>
              <a className="social-instagram" href="https://www.instagram.com/">instagram</a>
            </li>
            <li>
              <a className="social-linkedin" href="https://www.linkedin.com/">linkedin</a>
            </li>
            <li>
              <a className="social-google" href="https://plus.google.com/">google +</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
};

export default Footer;