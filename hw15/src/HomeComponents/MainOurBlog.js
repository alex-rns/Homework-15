import React from 'react';
import { Link} from 'react-router-dom'

const MainOurBlog = () => {

  const blogCardList = [
    {
      img : 'images/our-blog-slide-img.png',
      date: 'February 22, 2016',
      title: 'Blog Heading here',
      text: 'Established fact that a reader will be distracted by the readable of a page when looking at its layout...'
    },
    {
      img : 'images/our-blog-slide-img.png',
      date: 'January 1, 2017',
      title: 'Blog Heading here!!',
      text: 'Established fact that a reader will be distracted by the readable of a page when looking at its layout...'
    }
  ];

  return(
    <section className="our-blog-section">
      <h3>Our Blog</h3>
      <div className="container">
        <div className="row justify-content-center">
          {
            blogCardList.map((item, index) =>{
              return(
                <div
                  key={index}
                  className="col-lg-6 our-blog-card">
                  <Link to="/blog-post">
                    <img
                      className="our-blog-slide-img"
                      src={item.img}
                      alt="our-blog-slide-img"/>
                    <div className="our-blog-card-wrap">
                      <span
                        className="our-blog-date">
                        {item.date}</span>
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </Link>
                </div>
              )
            })
          }

        </div>
      </div>
      <div className="text-center">
        <Link className="button-main button-main-margin" to="/blog">Full blog</Link>
      </div>
    </section>
  )
};

export default MainOurBlog;