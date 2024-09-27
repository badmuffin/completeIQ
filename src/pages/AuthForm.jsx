import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-500">
      <div className="max-w-md w-full bg-white p-8 rounded-lg">
        <header className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isSignup ? 'Signup' : 'Login'}
        </header>

        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder={isSignup ? 'Create password' : 'Password'}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
            <i
              className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer ${
                showPassword ? 'bx-show' : 'bx-hide'
              }`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>

          {isSignup && (
            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
              />
            </div>
          )}

          <div className="text-center mb-4">
            <button className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition duration-300">
              {isSignup ? 'Signup' : 'Login'}
            </button>
          </div>
        </form>

        <div className="text-center mb-4">
          <span className="text-gray-600">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <a
              href="#"
              className="text-blue-600 hover:underline"
              onClick={toggleSignup}
            >
              {isSignup ? 'Login' : 'Signup'}
            </a>
          </span>
        </div>

        <div className="relative mb-6">
          <div className="border-t border-gray-300 text-center">
            <span className="bg-white px-3 text-gray-600">Or</span>
          </div>
        </div>

        <div className="flex justify-between">
          
          <a
            href="#"
            className="w-full py-2 border border-gray-300 rounded text-center flex justify-center items-center"
          >
            <img
              src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
              alt="Google"
              className="w-12 h-6 mr-2"
            />
            <span className="text-gray-700">Login with Google</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
