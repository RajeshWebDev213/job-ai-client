// src/components/Navbar.jsx

import { Link, useNavigate } from "react-router-dom";

import {
  Briefcase,
  User,
} from "lucide-react";

const Navbar = () => {

  const navigate = useNavigate();

  // Get User
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // Logout
  const handleLogout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    navigate("/");
    window.location.reload();
  };

  // Profile Redirect
  const handleProfile = () => {

    // Not logged in
    if (!user || !user.isLoggedIn) {

      navigate("/login");
      return;
    }

    // Student
    if (user.role === "student") {

      navigate("/student-dashboard");
    }

    // Recruiter
    else if (user.role === "recruiter") {

      navigate("/recruiter-dashboard");
    }
  };

  return (

    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">

      <nav className="max-w-7xl mx-auto px-6 h-[78px] flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="w-11 h-11 rounded-xl bg-[#5b4df5] text-white flex items-center justify-center">

            <Briefcase size={22} />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">

            Job<span className="text-[#5b4df5]">AI</span>
          </h1>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">

          <Link
            to="/"
            className="hover:text-[#5b4df5] transition"
          >
            Home
          </Link>

          <Link
            to="/jobs"
            className="hover:text-[#5b4df5] transition"
          >
            Jobs
          </Link>

          <Link
            to="/companies"
            className="hover:text-[#5b4df5] transition"
          >
            Companies
          </Link>

          <Link
            to="/about"
            className="hover:text-[#5b4df5] transition"
          >
            About
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {user?.isLoggedIn ? (

            <>
              {/* Profile */}
              <button
                onClick={handleProfile}
                className="w-11 h-11 rounded-full bg-[#5b4df5] text-white flex items-center justify-center font-bold text-sm uppercase hover:bg-[#4f46e5] transition"
              >

                {user?.username
                  ?.split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="border border-red-500 text-red-500 px-5 h-[42px] rounded-xl text-sm font-medium hover:bg-red-50 transition"
              >
                Logout
              </button>
            </>

          ) : (

            <>
              {/* Login */}
              <Link
                to="/login"
                className="border border-gray-300 px-5 h-[42px] rounded-xl text-sm font-semibold text-gray-800 hover:border-[#5b4df5] hover:text-[#5b4df5] flex items-center transition"
              >
                Login
              </Link>

              {/* Register */}
              <Link
                to="/register"
                className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-5 h-[42px] rounded-xl text-sm font-semibold flex items-center shadow-sm transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;