import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";

const BookingAll = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  return (
    <div className="container">
      <h1 className="fs-1 fw-bold mt-5">Our Services</h1>
      <div className="service-container">
        {booking.map((book) => (
          <Booking key={book.id} book={book}></Booking>
        ))}
      </div>
    </div>
  );
};

export default BookingAll;
