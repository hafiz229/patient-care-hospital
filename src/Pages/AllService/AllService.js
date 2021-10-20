import React from "react";
import { Link } from "react-router-dom";

const AllService = ({ service }) => {
  const { id, name, price, description, img } = service;
  return (
    <div>
      <div className="service shadow-lg rounded">
        <img className="" src={img} alt="" />
        <div className="text-center px-5">
          <h3 className="text-center">{name}</h3>
          <h5 className="text-center">Price: {price}</h5>
          <p>{description}</p>
          <Link to={`/booking/${id}`}>
            <button className="btn btn-warning mb-2 fw-bold px-4">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllService;
