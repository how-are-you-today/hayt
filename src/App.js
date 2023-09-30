import './App.css';
import React from 'react';
import { Routes,Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Blog from './Blog';
import FullBlog from './FullBlog';
import Contact from './Contact';
import logo from './team-logo.png';
function App() {
  return (
    <div >
      <div className='navBar'>
      <NavBar /> 
      </div>
      
      <header className='content' >
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/contact" element={<Contact/>}/>
          <Route path = "/blog" element={<Blog/>}/>
          <Route path="/full-blog/:id" element={<FullBlog/>} /> 
        </Routes>
      </header>
    </div>
  );
}


export default App;
