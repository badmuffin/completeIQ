// LoginForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ toggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex justify-center items-center w-screen h-screen bg-purple-700">
      <div className="max-w-md w-full bg-white p-8 rounded-lg">
        <Link to="/" className="underline">
          back
        </Link>
        <div className="text-2xl font-semibold text-center text-gray-800 mb-6">
          <p>Welcome Back!</p>
          <p className="font-normal text-sm text-gray-800">
            Please enter your details
          </p>
        </div>

        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-purple-500 focus:outline-none"
            />
            <i
              className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer ${
                showPassword ? "bx-show" : "bx-hide"
              }`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>

          <div className="text-center mb-4">
            <button className="w-full py-2 text-white bg-purple-600 hover:bg-purple-700 rounded transition duration-300">
              Login
            </button>
          </div>
        </form>

        <div className="text-center mb-4">
          <span className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-600 hover:underline"
              onClick={toggleForm}
            >
              Signup
            </Link>
          </span>
        </div>

        <div className="relative mb-6">
          <div className="border-t border-gray-300 text-center">
            <span className="bg-white px-3 text-gray-600">Or</span>
          </div>
        </div>

        <div className="flex justify-between border hover:border-purple-700">
          <Link
            to=""
            className="w-full py-2 border border-gray-300 rounded text-center flex justify-center items-center"
          >
            <img
              src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
              alt="Google"
              className="w-12 h-6 mr-2"
            />
            <span className="text-gray-700">Login with Google</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
