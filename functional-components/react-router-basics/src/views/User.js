import React, { useState } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import "./User.css";

const User = () => {
  let match = useRouteMatch();

  const [blogs, setBlogs ] = useState([
    {
      id: "1",
      title: "My First Blog",
      description: "This is my first blog ever",
      author: "Myself"
    },
    {
      id: "2",
      title: "My Second Blog",
      description: "This is my second blog",
      author: "Myself"
    },
    {
      id: "3",
      title: "My Third Blog",
      description: "This is my third blog",
      author: "Myself"
    }
  ]);

  return (
    <div className="user view">
      <h1>User Blogs</h1>
      <ul className="blog-list">
        {blogs.map(blog => (
          <li key={ blog.id } className="blog-link">
            <Link
              className="blog-link-a"
              to={{
                pathname: `${match.url}/blogs/${blog.id}`,
                state: { blog }
            }}>
              <h1>{ blog.title }</h1>
              <p>{ blog.description }</p>
              <i>{ blog.author }</i>
            </Link>
          </li>)
        )}
      </ul>
    </div>
  );
}

export default User;
