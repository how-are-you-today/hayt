import React from 'react';
import './Blog.css'; 
import {Link} from 'react-router-dom';
import userBlogs from './userBlogs';

function truncateContent(content, limit) {
    const words = content.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return content;
  }

function Blog() {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Reading Blog Posts</h2>
      <div className="blog-list">
        {userBlogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h3 className="blog-card-title">{blog.title}</h3>
            <p className="blog-card-username">By {blog.username}</p>
            <p className="blog-card-date">Published on {blog.date}</p>
            <p className="blog-card-content">{truncateContent(blog.content,10)}</p>
            <Link to={`/full-blog/${blog.id}`} className="read-more-link" blog={blog}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
