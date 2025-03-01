import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering with:", form);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">
      <div className="w-full max-w-4xl flex items-center justify-between p-10">
        <div className="text-white w-1/2">
          <h1 className="text-4xl font-bold leading-tight">
            Join us in revolutionizing the voting experience.
          </h1>
          <p className="mt-4 text-lg">Your vote, your voice, made effortless.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {["Secure", "Accurate", "Accessible", "Seamless"].map((item, i) => (
              <div key={i} className="bg-white/20 p-4 rounded-lg">
                <h3 className="font-bold">{item}</h3>
                <p className="text-sm">
                  {item === "Secure" && "Advanced security protocols to protect your vote"}
                  {item === "Accurate" && "Voter-verifiable paper trail and instant results"}
                  {item === "Accessible" && "Vote from anywhere in the world"}
                  {item === "Seamless" && "Integrates with existing election systems"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-between text-gray-600">
            <Link to="/login" className="pb-1">Login</Link>
            <span className="border-b-2 border-blue-500 pb-1 font-semibold">Register</span>
          </div>
          <h2 className="text-2xl font-bold mt-4">Create Your Account</h2>

          <form onSubmit={handleRegister} className="mt-6">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border rounded mt-2"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border rounded mt-2"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-3 border rounded mt-2"
                placeholder="********"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full p-3 border rounded mt-2"
                placeholder="********"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-6">
              Sign up
            </button>
          </form>

          <p className="mt-4 text-center">
            Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
