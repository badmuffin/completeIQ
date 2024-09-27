// SignupForm.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ toggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });
      console.log("Signup Successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error: ", error);
      alert(error)
    }
  };

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
          <p>Hi there!</p>
          <p className="font-normal text-sm text-gray-800">
            Please enter your details
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name} required
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email} required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={password} required
              onChange={(e) => setPassword(e.target.value)}
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
            <button type="submit" className="w-full py-2 text-white bg-purple-600 hover:bg-purple-700 rounded transition duration-300">
              Signup
            </button>
          </div>
        </form>

        <div className="text-center mb-4">
          <span className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 hover:underline"
              onClick={toggleForm}
            >
              Login
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
            <span className="text-gray-700">Signup with Google</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
