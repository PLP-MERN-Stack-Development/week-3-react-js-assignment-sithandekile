// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// import Login from './pages/login';
// import Signup from './pages/signup';
import Layout from './components/layout';

function App() {

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:text-gray-100 sm:mx-auto">
    <Layout>
      {/*  Routes go here */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Layout>
      </div>
  );
}
export default App;
