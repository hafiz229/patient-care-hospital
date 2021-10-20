import React from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { bookId } = useParams();
  return (
    <div>
      <h1>Service Id: {bookId}</h1>
    </div>
  );
};

export default Booking;
