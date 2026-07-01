import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-full h-screen ">
      <div className="max-w-300 mx-auto h-screen  flex justify-center items-center">
        <form
          action=""
          className="w-full max-w-105 bg-white border-2 border-gray-300 space-y-8  py-6 px-10 rounded-3xl"
        >
          <div className="flex flex-col justify-center items-center py-2">
            <h2 className="font-semibold text-2xl tracking-wide">Login</h2>
            <div className=" text-gray-400 ">Lorem ipsum dolor sit.</div>
          </div>
          <div className="py-2">
            <label htmlFor="email" className="font-medium text-md">
              Email{" "}<sup className="text-red-600 font-bold">*</sup>{" "}
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="mt-2 w-full px-4 py-2 text-md ring-1 ring-gray-300 rounded-lg
              focus-within:ring-blue-500 border-none outline-0"
              required
            />
          </div>

          <div className="py-2">
            <label htmlFor="password" className="font-medium text-md">
              Password{" "} <sup className="text-red-600 font-bold">*</sup>
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full px-4 py-2 text-md ring-1 ring-gray-300 rounded-lg
              focus-within:ring-blue-500 border-none outline-0"
              placeholder="at least 8 characters"
              required
            />
          </div>

          <div className="py-3">
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold bg-blue-600 text-white rounded-lg
            hover:cursor-pointer hover:bg-blue-700"
            >
              Login
            </button>
            <p className="mt-3.5 text-center text-md text-gray-400">
              Create your account?{" "}
              <Link
                className="text-sm text-blue-600 font-medium"
                to="/register"
              >
                Signin
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
