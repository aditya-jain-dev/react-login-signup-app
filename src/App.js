import React, { useState } from 'react'
import { Routes, Route } from'react-router-dom'  
import Home from './pages/Home'
// import Navbar from './components/Navbar'
import ResNavbar from './components/ResNavbar'
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';

function App() {

  // login / logout
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col scroll-smooth relative'>
      {/* <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
      <ResNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
          {/* make dashboard protected route */}
          <Route path='/dashboard' element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;