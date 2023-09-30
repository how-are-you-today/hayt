import React, { useState,useRef } from 'react';
import './Contact.css'; 
import emailjs from '@emailjs/browser';
function Contact() {
  const form  = useRef();
  const [emailData, setEmailData] = useState({
    email: '',
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7l94ylv', 'template_v3afli8', form.current, 'Cd38jEX5CiotOWf-f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    console.log('Email Data:', emailData);
    setEmailData({
      email: '',
      title: '',
      content: '',
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <h3>
        We look forward to receiving your feedback, knowledge, experiences, and stories via email. You can also connect with us on our&nbsp;
        <a href="https://www.facebook.com/profile.php?id=61551643094200" target="_blank" rel="noopener noreferrer">
          Facebook Page
        </a>
      </h3>
      <div className="form-container">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={emailData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={emailData.content}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
