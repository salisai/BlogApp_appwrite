import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ width = "120px" }) => {
  return (
    <Link to="/" className="flex items-center space-x-2 group">

      {/* <img src="/logo.svg" alt="Logo" style={{ width }} /> */}
      <span
        className="font-bold text-xl tracking-tight group-hover:text-gray-700 transition"
        style={{ width }}
      >
        AI<span className="text-black">Blog</span>
      </span>
    </Link>
  );
};

export default Logo;
