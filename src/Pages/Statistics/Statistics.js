import React from "react";

const Statistics = () => {
  return (
    <div>
      <h1 className="mt-3">Our Statistics</h1>
      <div className="d-lg-flex justify-content-center shadow rounded mt-3 mb-5">
        <div className="text-center p-5 shadow m-3 bg-body rounded">
          <h2 style={{ color: "blue" }} className="fs-1">
            500+
          </h2>
          <h6>Doctors At Work</h6>
        </div>
        <div className="text-center p-5 shadow m-3 bg-body rounded">
          <h2 style={{ color: "blue" }} className="fs-1">
            58796+
          </h2>
          <h6>Happy Patients</h6>
        </div>
        <div className="text-center p-5 shadow m-3 bg-body rounded">
          <h2 style={{ color: "blue" }} className="fs-1">
            500+
          </h2>
          <h6>Medical Beds</h6>
        </div>
        <div className="text-center p-5 shadow m-3 bg-body rounded">
          <h2 style={{ color: "blue" }} className="fs-1">
            200+
          </h2>
          <h6>Winning Awards</h6>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
