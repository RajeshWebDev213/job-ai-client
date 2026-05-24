import { Link } from "react-router-dom";
import { Briefcase, User } from "lucide-react";

const Navbar = () => {
  const isLoggedIn = false;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Briefcase className="w-7 h-7 text-blue-600" />
          <span className="text-2xl font-bold text-slate-800">
            Job<span className="text-blue-600">AI</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-slate-600 font-medium">
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/companies">Companies</Link>
          <Link to="/about">About</Link>
        </div>

        {/* Right Side */}
        {/* Auth Buttons */}

<div className="flex items-center gap-5">

  {localStorage.getItem("isLoggedIn") ? (

    <>
      {/* Profile */}
    <div className="w-10 h-10 rounded-full bg-[#5b4df5] text-white flex items-center justify-center font-bold text-sm uppercase">
  {localStorage
    .getItem("username")
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)}
</div>

      {/* Logout */}
      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          window.location.reload();
        }}
className="border border-red-500 text-red-500 px-4 py-2 rounded-xl text-sm hover:bg-red-50 transition"      >
        Logout
      </button>
    </>

  ) : (

    <>
      {/* Login */}
      <Link
        to="/login"
className="border border-[#d4d4d8] px-5 py-2.5 rounded-xl text-[15px] font-semibold text-[#0f172a] hover:border-[#5b4df5] transition"      >
        Login
      </Link>

      {/* Register */}
      <Link
        to="/register"
className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-5 py-2.5 rounded-xl text-[15px] font-semibold shadow-md transition"      >
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
