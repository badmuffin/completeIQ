import React, { useState } from "react";
import logo from "../Assets/logo.jpeg";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import prof from "../Assets/prof.jpeg";

const Navbar = () => {
  const navlinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Dashboard", link: "/dashboard" },
    { title: "Community", link: "/community" },
    { title: "Contact", link: "/contact" },
  ];

  const { isAuthenticated, logout } = useAuth();
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white w-screen">
      <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center text-slate-700">
        <div className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
          <Link to="/" className="mr-2 text-4xl text-cyan-500 flex">
            <img src={logo} className=" w-40 sm:w-56" alt="logo" />
          </Link>
        </div>
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
          className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full lg:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-1 md:ml-auto md:flex-row md:space-y-0">
            {navlinks.map((navlink, index) => (
              <li key={index} className="md:mr-10">
                <NavLink
                  to={navlink.link}
                  className={({ isActive }) =>
                    `${isActive ? "underline" : ""} `
                  }
                >
                  {navlink.title}
                </NavLink>
              </li>
            ))}
            {isAuthenticated ? (
              <div>
                <img
                  src={prof}
                  className="rounded-full w-10 h-10"
                  onClick={toggleDropDown}
                />
                {dropDown && (
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br shadow-sm shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-500/50 font-bold rounded-xl text-sm px-10 py-2 text-center mr-2 mb-2"
              >
                Login
              </Link>
            )}
          </ul>
        </nav>
      </header>
    </nav>
  );
};

export default Navbar;
