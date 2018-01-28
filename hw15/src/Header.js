import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import $ from 'jquery';

class Header extends React.Component {

  componentDidMount(){
    $('.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
  }
  render(){
    return (
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light container">

          <a className="navbar-brand" href="/">
            <img src="images/logo.png" alt="logo"/>
            <h1 className="text-over-indent">Consult plus</h1>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-uppercase">
              <li className="nav-item">
                <Link activeStyle={{ color: '#ef961a' }} to="/" className="nav-link">Home <span
                  className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link activeStyle={{ color: '#ef961a' }} to="/about" className="nav-link">about us</Link>
              </li>
              <li className="nav-item">
                <Link activeStyle={{ color: '#ef961a' }} to="/industry" className="nav-link">industry</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/404" >services</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown"
                   role="button"
                   data-toggle="dropdown"
                   data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
                  pages
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link activeStyle={{ color: '#ef961a' }} to="/blog" className="dropdown-item">Blog</Link>
                  <Link activeStyle={{ color: '#ef961a' }} to="/blog-post" className="dropdown-item">Blog post</Link>
                  <Link activeStyle={{ color: '#ef961a' }} to="/testimonials" className="dropdown-item">Testimonials</Link>
                  <Link activeStyle={{ color: '#ef961a' }} to="/pricing" className="dropdown-item">Pricing</Link>
                  <Link activeStyle={{ color: '#ef961a' }} to="/careers" className="dropdown-item">Careers</Link>
                  <Link activeStyle={{ color: '#ef961a' }} to="/404" className="dropdown-item">404</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link activeStyle={{ color: '#ef961a' }} to="/contact" className="nav-link">Contact us</Link>
              </li>
            </ul>
          </div>

          <div className="top-contacts">
            <a className="top-contacts-tel text-uppercase" href="callto:915685666455">
              <i className="icon-call-in"></i>
              +91 5685 6664 555
            </a>
            <a className="top-contacts-mail" href="mailto:info@consultplus.com">
              <i className="icon-envelope-open"></i>
            </a>
          </div>

        </nav>
      </header>
    )
  }

}

export default Header;