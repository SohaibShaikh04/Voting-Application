import React from 'react';
const Footer = () => {
    return (
      <footer className="dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 py-4">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row px-6">
          <p className="text-xl">© 2025 Voting App. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-500 text-xl">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 text-xl">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  