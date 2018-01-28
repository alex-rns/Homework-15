import React from 'react';
import {Link} from 'react-router-dom';
import BlogCard from './BlogCard'

const cardContent = [
  {
    title: "Blog Heading Here",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    date: "5-12-2016",
    tag:
      {
        tagName: "Health",
        tagLink: "/industry",
        tagIcon: "fa-quote-left"
      }
  },

  {
    title: "Blog Heading Here2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    date: "5-12-2016",
    tag:
      {
        tagName: "Business",
        tagLink: "/industry",
        tagIcon: "fa-picture-o"
      },
    img: "images/blog-card-top.png"
  },

  {
    title: "Blog Heading Here",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    date: "5-12-2016",
    tag:
      {
        tagName: "Health",
        tagLink: "/industry",
        tagIcon: "fa-quote-left"
      }
  },

  {
    title: "Blog Heading Here",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    date: "5-12-2016",
    tag:
      {
        tagName: "Health",
        tagLink: "/industry",
        tagIcon: "fa-link"
      },
    accentBg: true
  },

  {
    title: "Blog Heading Here",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    date: "5-12-2016",
    tag:
      {
        tagName: "Health",
        tagLink: "/industry",
        tagIcon: "fa-quote-left"
      },
    img: "images/blog-card-cover-img.png",
    imgCover: true
  },

  {
    title: "Blog Heading Here",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    date: "5-12-2016",
    tag:
      {
        tagName: "Education",
        tagLink: "/industry",
        tagIcon: "fa-link"
      }
  },

  {
    title: "Blog Heading Here",
    text: "Industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    date: "5-12-2016",
    tag:
      {
        tagName: "Health",
        tagLink: "/industry",
        tagIcon: "fa-link"
      },
    accentBg: true
  },

  {
    title: "Blog Heading Here2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    date: "5-12-2016",
    tag:
      {
        tagName: "Business",
        tagLink: "/industry",
        tagIcon: "fa-youtube-play"
      },
    img: "images/img-youtube.png"
  },

  {
    title: "Blog Heading Here2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    date: "5-12-2016",
    tag:
      {
        tagName: "Technology",
        tagLink: "/industry",
        tagIcon: "fa-picture-o"
      },
    img: "images/blog-card-top-2.png"
  }
];


class BlogContent extends React.Component {

  render() {

    return (
      <section className="blog-section container">
        <h3 className="text-left">blog page</h3>

          <BlogCard dataCardContent={cardContent}/>

        <nav aria-label="Page gallery navigation">
          <ul className="blog-pagination pagination justify-content-center">
            <li className="page-item active">
              <Link className="page-link" to="/blog">1</Link>
            </li>
            <li className="page-item">
              <a className="page-link" href="">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">3</a>
            </li>

          </ul>
        </nav>

      </section>
    )
  }
}

export default BlogContent;