// src/pages/Register.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [errors, setErrors] = useState({});

  const handleRegister = (e) => {

  e.preventDefault();

  let newErrors = {};

  // Validation
  if (!name.trim()) {
    newErrors.name = "Full name is required";
  }

  if (!email.trim()) {
    newErrors.email = "Email is required";
  }

  if (!password.trim()) {
    newErrors.password = "Password is required";
  }

  if (!role) {
    newErrors.role = "Please select a role";
  }

  // Set Errors
  setErrors(newErrors);

  // Stop if errors exist
  if (Object.keys(newErrors).length > 0) {
    return;
  }

  // Save User
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: name,
      email,
      role,
      isLoggedIn: true,
    })
  );

  // Optional
  localStorage.setItem("isLoggedIn", "true");

  // Success
  alert("Registration Successful ✅");

  // Go Home
  navigate("/");
};

  return (
    <div className="min-h-screen bg-[#f7f7ff] flex items-center justify-center px-6">

      <div className="bg-white shadow-xl rounded-[32px] p-10 w-full max-w-md border border-[#ececff]">

        <h1 className="text-4xl font-bold text-[#0f172a] text-center">
          Create Account
        </h1>

        <p className="text-[#64748b] text-center mt-4">
          Join JobAI and discover your dream job.
        </p>

        <form onSubmit={handleRegister} className="mt-10 space-y-6">

          {/* Name */}
          <div>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full border rounded-2xl px-5 py-4 outline-none text-lg ${
                errors.name
                  ? "border-red-500"
                  : "border-[#e5e7eb]"
              }`}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-2">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>

            <input
              type="email"
              placeholder="Email Address"
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
              placeholder="Password"
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
          <select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="w-full border border-gray-200 rounded-xl px-5 h-[56px] outline-none"
>

  <option value="">
    Select Role
  </option>

  <option value="student">
    Student
  </option>

  <option value="recruiter">
    Recruiter
  </option>
</select>
{errors.role && (
  <p className="text-red-500 text-sm mt-2">
    {errors.role}
  </p>
)}

          {/* Button */}
          <button
          
            type="submit"
            className="w-full bg-[#5b4df5] hover:bg-[#4f46e5] text-white py-4 rounded-2xl text-lg font-semibold transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-[#64748b] mt-8">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-[#5b4df5] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}