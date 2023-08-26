import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex bg-blue-500 text-white p-4">
      <ul className="flex text-xl gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
      </ul>
    </nav>
  );
}
