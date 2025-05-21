import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center gap-8 min-h-screen">
        <h1 className="text-9xl font-bold text-gray-400">404</h1>
        <h2 className="text-xl font-medium md:text-4xl">
          Sorry, we couldn't find this page.
        </h2>
        <Link to="/" className="btn btn-error">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
