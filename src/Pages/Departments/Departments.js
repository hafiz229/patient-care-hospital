import React from "react";
import { Card } from "react-bootstrap";
import "./Departments.css";

const Departments = () => {
  return (
    <div>
      <h1 className="mb-4">Our Departments</h1>
      <div className="d-lg-flex container service-container mb-5">
        <Card className="shadow rounded" style={{ width: "18rem" }}>
          <Card.Img
            className="card-img"
            style={{ height: "300px" }}
            variant="top"
            src="https://image.freepik.com/free-vector/slipping-with-banana-concept-illustration_114360-6537.jpg"
          />
          <Card.Body className="card-body">
            <Card.Title>ACCIDENT & EMERGENCY</Card.Title>
            <Card.Text>
              The Accident and Emergency Department of Patient Care offers the
              highest degree of commitment to delivering quality and efficient
              emergency care.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow rounded" style={{ width: "18rem" }}>
          <Card.Img
            className="card-img"
            style={{ height: "300px" }}
            variant="top"
            src="https://image.freepik.com/free-vector/hypertension-abstract-concept_335657-3220.jpg"
          />
          <Card.Body>
            <Card.Title>CARDIOLOGY</Card.Title>
            <Card.Text>
              The Cardiology Department of Patient Care offers cardiac care to
              patients of all ages. We treat patients with common heart
              problems.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow rounded" style={{ width: "18rem" }}>
          <Card.Img
            className="card-img"
            style={{ height: "300px" }}
            variant="top"
            src="https://image.freepik.com/free-vector/cartoon-dia-internacional-de-la-obstetricia-y-la-embarazada-illustration_23-2148996499.jpg"
          />
          <Card.Body>
            <Card.Title>GYNAECOLOGY</Card.Title>
            <Card.Text>
              The Obstetrics & Gynecology Department of Patient Care offers
              excellent diagnostic, therapeutic, surgical and counselling
              services in the country.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow rounded" style={{ width: "18rem" }}>
          <Card.Img
            className="card-img"
            style={{ height: "300px" }}
            variant="top"
            src="https://image.freepik.com/free-vector/hospital-scene-with-sick-patient-bed-white-background_1308-42296.jpg"
          />
          <Card.Body>
            <Card.Title>CRITICAL CARE - ICU</Card.Title>
            <Card.Text>
              The Intensive Care Unit of Patient Care Hospital is staffed by
              highly trained doctors and nurses who specialize in caring for
              seriously ill patients.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Departments;
