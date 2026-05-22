import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-slate-600">
          Don't have an account? <Link to="/register" className="text-blue-600">Register</Link>
        </p>
      </div>
    </div>
  );
}
