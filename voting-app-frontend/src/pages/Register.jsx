import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering with:", form);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 p-6">
      <div className="w-full max-w-5xl flex items-center justify-between space-x-12">
        <div className="text-white w-1/2 space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Join the future of secure, accessible voting today.
          </h1>
          <p className="text-5xl">Create an account to get started.</p>
          <div className="grid grid-cols-2 gap-4">
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

        <div className="w-1/3 bg-white p-10 rounded-lg shadow-lg">
          <div className="flex justify-between text-gray-600">
            <Link to="/login" className="pb-1">Login</Link>
            <span className="border-b-2 border-blue-500 pb-1 font-semibold">Register</span>
          </div>
          <h2 className="text-2xl font-bold mt-4">Create an Account</h2>

          <form onSubmit={handleRegister} className="mt-6 space-y-4">
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

            <div>
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

            <div>
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

            <div>
              <label className="block text-gray-700 border-black">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full p-3 border-4 rounded mt-2"
                placeholder="********"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button className="w-full bg-blue-500 text-white p-3  border-4 rounded-lg mt-4">
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-black">
            Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
