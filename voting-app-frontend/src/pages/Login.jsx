import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">
      <div className="w-full max-w-4xl flex items-center justify-between p-10">
        <div className="text-white w-1/2">
          <h1 className="text-4xl font-bold leading-tight">
            Secure, accessible voting at your fingertips, anywhere, anytime.
          </h1>
          <p className="mt-4 text-lg">The future of voting is mobile.</p>
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
            <span className="border-b-2 border-blue-500 pb-1 font-semibold">Login</span>
            <Link to="/register" className="pb-1">Register</Link>
          </div>
          <h2 className="text-2xl font-bold mt-4">Welcome Back</h2>

          <form onSubmit={handleLogin} className="mt-6">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border rounded mt-2"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-3 border rounded mt-2"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
              <label>
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <Link to="#" className="text-blue-500">Forgot password?</Link>
            </div>

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-6">
              Sign in
            </button>
          </form>

          <p className="mt-4 text-center">
            Don’t have an account? <Link to="/register" className="text-blue-500">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
