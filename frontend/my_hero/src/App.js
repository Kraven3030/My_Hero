import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css';

// Imports for components and pages
import Nav from './components/Nav/nav'
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import Home from './pages/Home/home'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true)
    }
  }, [])


  return (
    <>
      <header>
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <body>
      </body>
      <main>
        <Routes>
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
