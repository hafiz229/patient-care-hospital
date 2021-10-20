import React from "react";
import "./Choose.css";

const Choose = () => {
  return (
    <div>
      <h1 className="fs-1 fw-bold my-3">Why Choose Us?</h1>
      <div className="container d-lg-flex align-items-center justify content center">
        <div className="col-6">
          <img
            src="https://image.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="choose p-3 m-1 shadow rounded-pill">
            <h1 className="fs-2 fw-bold">Excellent Services</h1>
            <p className="text-center px-5 col-12">
              Clinical excellence must be a top focus for every supplier of
              health care services. Patient Care Hospital provides the finest
              healthcare service possible by combining professional (clinical)
              service excellence with exceptional personal service.
            </p>
          </div>
          <div className="choose p-3 m-1 shadow rounded-pill">
            <h1 className="fs-2 fw-bold">Qualified Doctors</h1>
            <p className="text-center px-5 col-12">
              Patient Care Hospital strives to deliver the greatest level of
              treatment possible with competent consultants from India,
              Singapore, the United States, the United Kingdom, and excellent
              institutions in the Middle East. Nurses and technicians are also
              skillfully trained from Bangladesh, Australia, the United Kingdom,
              India, and the Philippines.
            </p>
          </div>
          <div className="choose p-3 m-1 shadow rounded-pill">
            <h1 className="fs-2 fw-bold">Great Infrastructure</h1>
            <p className="text-center px-5 col-12">
              Patient Care Hospital is made up of three buildings that are
              joined by an overbridge on both sides of the Panthapath Main Road.
              The hospital, which has about 6 lac square feet of area, is
              located in the center part of Dhaka, Bangladesh's capital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
