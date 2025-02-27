import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Vote from "./pages/Vote";
// import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/admin" element={<AdminDashboard />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
