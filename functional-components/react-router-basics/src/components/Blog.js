import React from 'react';
import { Link, useParams } from "react-router-dom";

import "./Blog.css";

const Blog = (props) => {
  const { blogId } = useParams();
  console.log("BLOG ID:", blogId);
  const blog = props.location.state.blog;

  return (
    <div className="blog">
      <Link className="profile-link" to="/user">Go back to user's profile</Link>
      <div className="blog-title"><h1>{ blog.title }</h1></div>
      <div className="blog-details">
        <p>{ blog.description }</p>
        <i>{ blog.author }</i>
      </div>
    </div>
  );
}

export default Blog;
