import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex bg-blue-500 text-white p-4">
      <ul className="flex-col text-4xl">
        <li>
          <Link to="/" />
          Home
        </li>
        <li>
          <Link to="/upload" />
          Upload
        </li>
      </ul>
    </nav>
  );
}
