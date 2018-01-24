import React from 'react';

import Banner from './Banner'
import BlogContent from "./BlogComponents/BlogContent";

const pageTitle = "Blog";




class Blog extends React.Component {
  componentDidMount(){
    document.title = "Consult Plus - Blog"
  }
  render() {
    return (
      <div className="Blog">
        <Banner dataTitle={ pageTitle } />
        <BlogContent />
      </div>
    );
  }
}

export default Blog;
