import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="home">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="fs-1">Top Consultants</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/diagnosis-says-that-you-are-getting-better_329181-7635.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 className="fs-1">Proper Patient Care</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/dcotor-checking-old-retired-woman-heart-related-problems-during-pandemic-modern-private-clinic-hospital-patient-medical-stuff-wearing-masks-protection-against-covid-19-medical-healthca_482257-6290.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className="fs-1">Emergency Support 24/7</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
