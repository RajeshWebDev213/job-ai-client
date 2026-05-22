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
        <div className="flex items-center gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-slate-700 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          ) : (
            <Link to="/dashboard">
              <User className="w-6 h-6 text-slate-700" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
