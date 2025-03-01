import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vote from "./pages/VotePage";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* <Navbar /> */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        {/* <Footer /> */}
        <Footer/>
      </div>
    
  );
}

export default App;
