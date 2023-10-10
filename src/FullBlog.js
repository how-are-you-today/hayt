import React from 'react';
import './FullBlog.css'; 
import { useParams } from 'react-router-dom';
import userBlogs from './userBlogs';

function Content({ text }) {
  const parts = text.split('\n').map((part, index) => (
    <div key={index} >
      {part}
    </div>
  ));

  return (
    <div>
      {parts}
    </div>
  );
}

function FullBlog() {
    const {id} = useParams();
    const blog = userBlogs.find((post)=>post.id ===parseInt(id));
  return (
    <div className="full-blog-container">
      <h2 className="full-blog-title">{blog.title}</h2>
      <p className="full-blog-username">By {blog.username}</p>
      <p className="full-blog-date">Published on {blog.date}</p>
      <Content className="full-blog-content" text={blog.content} />
    </div>
  );
}

export default FullBlog;
