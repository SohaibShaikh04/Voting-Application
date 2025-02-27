import React from "react";

const HeroSection = () => {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-gray-200 dark:bg-gray-900 text-center">
        <h1 className="text-4xl font-bold">Vote Securely, Anytime, Anywhere</h1>
        <p className="text-lg mt-4">Make your voice heard with our online voting system.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md">
          Get Started
        </button>
      </section>
    );
  };
  
  export default HeroSection;
  