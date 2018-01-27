import React from 'react';
import Banner from './Banner'
import BlogPostContent from './BlogPostComponents/BlogPostContent'
import RelatedPost from './BlogPostComponents/RelatedPost'
import Comments from "./BlogPostComponents/Comments";

const pageTitle = "Blog Post";

const post = {
  title: "Blog Heading Here",
  firstText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  secondText: "Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  checkedText: [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      text: "Proin tempus ipsum vitae velit convallis venenatis."
    },
    {
      text: "Curabitur vel felis pretium, blandit arcu in, sollicitudin ipsum."
    }

  ],
  welcomeImg: "images/blog-post-welcome.png",
  secondImg: "images/blog-post-second.png",
  welcomeTag: "business"
};

const relatedPost = [
  {
    img: "images/related-post-1.png",
    title: "Blog Heading Here",
    date: "11-feb-2016"
  },
  {
    img: "images/related-post-2.png",
    title: "Blog Heading Here",
    date: "12-feb-2016"
  },
  {
    img: "images/related-post-3.png",
    title: "Blog Heading Here",
    date: "13-feb-2016"
  },
  {
    img: "images/related-post-4.png",
    title: "Blog Heading Here",
    date: "14-feb-2016"
  }
];

const comments = [
  {
    img: "images/commentator-1.jpg",
    name: "visitor name",
    text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this"
  },
  {
    img: "images/commentator-2.jpg",
    name: "visitor name",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some"
  },
  {
    img: "images/commentator-3.jpg",
    name: "visitor name",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"
  }
];



class BlogPost extends React.Component {
  componentDidMount() {
    document.title = "Consult Plus - Blog Post"
  }

  render() {
    return (
      <div className="BlogPost">
        <Banner dataTitle={pageTitle}/>
        <BlogPostContent dataPost={post}/>
        <RelatedPost dataRelatedPost={relatedPost}/>
        <Comments dataComment={comments} />

      </div>
    );
  }
}

export default BlogPost;
