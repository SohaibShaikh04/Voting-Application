import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", form);
  };

  return (
    
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 p-6">
      <div className="w-full max-w-8xl flex items-center justify-between space-x-12">
        <div className="text-white w-1/2 space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Secure, accessible voting at your fingertips, anywhere, anytime.
          </h1><br></br>
          <p className="text-5xl">The future of voting is mobile.</p><br></br>
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
            <span className="border-b-2 border-blue-500 pb-1 font-semibold">Login</span>
            <Link to="/register" className="pb-1">Register</Link>
          </div>
          <h2 className="text-2xl font-bold mt-4">Sign in to Your Account</h2>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border rounded mt-2"
                placeholder=""
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

            <div className="flex justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <Link to="/forgot-password" className="text-blue-500">Forgot password?</Link>
            </div>

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4">
              Sign in
            </button>
          </form>

          <p className="mt-4 text-center">
            Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
