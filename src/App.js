import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Blog from './Blog';
import FullBlog from './FullBlog';
import Contact from './Contact';
import Footer from './Footer';
function App() {
  return (
    <body>
      <div className='navBar'>
      <NavBar /> 
      </div>
      
      <header className='content' >
        <Routes>
          <Route path = "/hayt/" element={<Home/>}/>
          <Route path = "/contact" element={<Contact/>}/>
          <Route path = "/blog" element={<Blog/>}/>
          <Route path="/full-blog/:id" element={<FullBlog/>} /> 
        </Routes>
        
      </header>
      <div className='footer' >
        <Footer/>
      </div>
      
    </body>
  );
}


export default App;
