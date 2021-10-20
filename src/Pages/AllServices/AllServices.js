import React, { useEffect, useState } from "react";
import AllService from "../AllService/AllService";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div id="services" className="container">
      <h2 className="text-primary mt-5">Our All Services</h2>
      <div className="service-container">
        {allServices.map((service) => (
          <AllService key={service.id} service={service}></AllService>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
