import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">
        SPA Example
      </Link>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/ContactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
