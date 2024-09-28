import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.jpeg";
import prof from "../Assets/prof.jpeg";
import { useAuth } from "../utils/AuthContext";

const Dashboard = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <section className="w-screen h-screen flex">
      {/* Sidebar */}
      <div className="w-64 text-gray-800 bg-white p-5 shadow-md flex flex-col justify-between">
        <div className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
          <Link to="/" className="mr-2 text-4xl text-cyan-500 flex">
            <img src={logo} className=" w-40 sm:w-56" alt="logo" />
          </Link>
        </div>
        <ul className="mt-6">
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            Overview
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            Reports
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            Settings
          </li>
        </ul>

        {/* User Profile */}
        <div className="flex justify-center items-center">
          <img src={prof} className="rounded-full w-10 h-10 m-2" />
          <Link
            to="/login"
            onClick={logout}
            className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-sm px-10 py-2 text-center"
          >
            Logout
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-red-300">
        <h1 className="text-2xl font-bold mb-5">Welcome to Your Dashboard</h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Card 1</h3>
            <p className="text-gray-600">This is the first card content.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Card 2</h3>
            <p className="text-gray-600">This is the second card content.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Card 3</h3>
            <p className="text-gray-600">This is the third card content.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
