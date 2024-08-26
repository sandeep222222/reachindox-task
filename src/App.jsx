import React from 'react'
import SignUp from './pages/signup'
import {BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Mail from './pages/mail'
import Home from './pages/home'

import './App.css'

function Layout() {
  return (
    <div>
      <h1>My Website</h1>
      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path='/mail' element={<Mail/>}/>
        </Route>
      </Routes>
    </Router>
   
  );
}

export default App;
