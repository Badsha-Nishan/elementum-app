// src/pages/ErrorPage.jsx

import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      {/* Big Error Code */}
      <h1 className="text-7xl md:text-9xl font-bold text-gray-200">404</h1>

      {/* Main Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>

      {/* Decorative element */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
    </div>
  );
}
