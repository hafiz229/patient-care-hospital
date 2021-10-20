import React from "react";
import { Link } from "react-router-dom";

const AllLink = () => {
  return (
    <div className="d-lg-flex align-items-center justify-content-center bg-success p-2 text-dark bg-opacity-25">
      <div className="col-lg-6">
        <div className="d-flex flex-column align-items-center">
          <div className="">
            <h2>Patient Care Hospital</h2>
          </div>
          <div>
            <p className="px-5">
              Patient Care Hospital was borne out of a vision to provide a
              complete and one-stop healthcare solution to the people of
              Bangladesh.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="d-flex flex-column align-items-center">
          <div>
            <h2>Our Links</h2>
          </div>
          <div className="d-flex flex-column text-start">
            <Link className="text-decoration-none" to="/home">
              Home
            </Link>
            <Link className="text-decoration-none" to="/services">
              Services
            </Link>
            <Link className="text-decoration-none" to="/departments">
              Departments
            </Link>
            <Link className="text-decoration-none" to="/consultants">
              Consultants
            </Link>
            <Link className="text-decoration-none" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllLink;
