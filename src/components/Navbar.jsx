import React from "react";
import logo from "../Assets/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center text-slate-700">
        <Link
          href="/"
          className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black"
        >
          <span className="mr-2 text-4xl text-cyan-500 flex">
            <img src={logo} className=" w-40 sm:w-56" alt="logo" />
          </span>
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="md:mr-12">
              <Link to="/">Home</Link>
            </li>
            <li className="md:mr-12">
              <Link to="/about">About</Link>
            </li>
            <li className="md:mr-12">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="md:mr-12">
              <Link to="/analysis">Analysis</Link>
            </li>
            <li className="md:mr-12">
              <Link to="/contact">Contact</Link>
            </li>
            <Link
              to="/"
              className="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br shadow-sm shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-500/50 font-bold rounded-xl text-sm px-10 py-2 text-center mr-2 mb-2"
            >
              Login
            </Link>
          </ul>
        </nav>
      </header>
    </nav>
  );
};

export default Navbar;
