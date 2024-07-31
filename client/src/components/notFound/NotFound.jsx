import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-9xl font-bold text-gray-300">404</h1>
      <h2 className="text-3xl font-semibold text-gray-300 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-300 mt-2 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-gray-300 text-center">
        It might have been removed, or you may have entered the wrong URL.
      </p>
      <div className="mt-8">
        <span className="text-6xl">📚</span>
      </div>
      <Link
        to="/"
        className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
