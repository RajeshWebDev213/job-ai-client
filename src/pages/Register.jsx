import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-4 py-3" />
          <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-3" />
          <input type="password" placeholder="Password" className="w-full border rounded-lg px-4 py-3" />

          <select className="w-full border rounded-lg px-4 py-3">
            <option>Student</option>
            <option>Recruiter</option>
          </select>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Create Account
          </button>
        </form>

        <p className="text-center mt-4 text-slate-600">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
}
