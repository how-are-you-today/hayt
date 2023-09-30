// FullBlog.js

import React from 'react';
import './FullBlog.css'; // Import the CSS file for styling
import { useParams } from 'react-router-dom';
import userBlogs from './userBlogs';
function FullBlog() {
    const {id} = useParams();
    const blog = userBlogs.find((post)=>post.id ===parseInt(id));
    const lines = blog.content.split('\n');
  return (
    <div className="full-blog-container">
      <h2 className="full-blog-title">{blog.title}</h2>
      <p className="full-blog-username">By {blog.username}</p>
      <p className="full-blog-date">Published on {blog.date}</p>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}

    </div>
  );
}

export default FullBlog;
