import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Booking.css";

const Booking = () => {
  const { bookId } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const singleService = data.find(
          (service) => parseInt(service.id) === parseInt(bookId)
        );
        setServices(singleService);
      });
  }, [bookId]);
  return (
    <div>
      <h2 className="fw-bold my-3">{services.name} Details</h2>
      <div className="booking container d-lg-flex align-items-center justify-content-center shadow-lg rounded p-3 mb-5">
        <div className="col-lg-6">
          <img src={services.img} alt="" />
        </div>
        <div>
          <h3 className="text-start fw-bold">{services.name}</h3>
          <h5 className="text-start">Price: {services.price}</h5>
          <p className="w-100 text-start">{services.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
