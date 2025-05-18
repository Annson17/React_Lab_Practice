// App.jsx
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import './App.css'; // Import CSS

function App() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/" end className="link">Home</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
