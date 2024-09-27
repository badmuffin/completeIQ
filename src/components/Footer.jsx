import React from "react";
import { Link } from "react-router-dom"

const Footer = () => {

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Dashboard", path: "/dashboard" },
    { title: "Analysis", path: "/analysis" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              We provide top-notch online courses to help you learn and grow in
              your career.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              {navigation.map((nav, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    to={nav.path}
                    className="text-gray-400 hover:text-white"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">Email: support@edtech.com</p>
            <p className="text-gray-400 mb-2">Phone: +123 456 7890</p>
            <p className="text-gray-400">
              Address: 123 EdTech Lane, City, Country
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2024 Coderzonee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
