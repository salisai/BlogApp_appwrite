import React from "react";
import { Link } from "react-router-dom";
import {Logo} from "../index";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Logo width="100px" />
        </div>

        {/* Links */}
        <ul className="flex space-x-6 text-sm text-gray-600">
          <li>
            <Link to="/" className="hover:text-black transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-black transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-black transition">
              Privacy
            </Link>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Aliblog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
