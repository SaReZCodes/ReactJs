import './App.css';
import Personel from './components/personel';
import About from './components/about';
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import Home from './components/home';
import {LoginForm} from './components/loginForm';



function App() {
  return (
    <main className="container">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/personel">personels</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about/1">about</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>

        <Route path="/personel" element={<Personel />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
