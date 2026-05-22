import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-xl text-slate-600 mt-4">Page Not Found</p>
      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}
