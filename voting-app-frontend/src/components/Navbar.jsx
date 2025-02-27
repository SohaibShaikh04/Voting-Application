import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <Link to="/" className="text-xl font-bold">Voting App</Link>
      <div className="flex items-center space-x-4">
        <Link to="/vote" className="hover:underline">Vote</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
