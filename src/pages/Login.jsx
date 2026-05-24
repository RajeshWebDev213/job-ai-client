// src/pages/Login.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // If no errors
    if (Object.keys(newErrors).length === 0) {

      alert("Login Successful ✅");
       localStorage.setItem("isLoggedIn", "true");
      // Navigate to home page
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7ff] flex items-center justify-center px-6">

      <div className="bg-white shadow-xl rounded-[32px] p-10 w-full max-w-md border border-[#ececff]">

        <h1 className="text-4xl font-bold text-[#0f172a] text-center">
          Welcome Back
        </h1>

        <p className="text-[#64748b] text-center mt-4">
          Login to continue your journey.
        </p>

        <form onSubmit={handleLogin} className="mt-10 space-y-6">

          {/* Email */}
          <div>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-2xl px-5 py-4 outline-none text-lg ${
                errors.email
                  ? "border-red-500"
                  : "border-[#e5e7eb]"
              }`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border rounded-2xl px-5 py-4 outline-none text-lg ${
                errors.password
                  ? "border-red-500"
                  : "border-[#e5e7eb]"
              }`}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.password}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#5b4df5] hover:bg-[#4f46e5] text-white py-4 rounded-2xl text-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-[#64748b] mt-8">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-[#5b4df5] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}