import React from "react";
import "./header.css";

export const Header = () => {
  console.log("Header Component");
  return (
    <div className="container-fluid fixed-top bg-dark-subtle">
      <header className="d-flex flex-wrap justify-content-center py-2  border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Gourmet au Catering</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              href=""
              className="btn btn-list  text-dark me-2"
              aria-current="page"
              style={{"letter-spacing": "2px"}}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-list  text-dark me-2">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-list  text-dark me-2">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};
