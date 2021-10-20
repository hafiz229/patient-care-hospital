import React from "react";
import { Card } from "react-bootstrap";
import "./Consultants.css";

const Consultants = () => {
  return (
    <div>
      <h1 className="mb-4">Our Consultants</h1>
      <div className="d-lg-flex container service-container mb-5">
        <Card className="shadow rounded" style={{ width: "18rem" }}>
          <Card.Img
            className="card-img consult-img"
            style={{ height: "300px" }}
            variant="top"
            src="https://www.uhlbd.com/backend/web/product_uploads/1546935213_2_1511082177_2_Omar%20Faroq.jpg"
          />
          <Card.Body className="card-body consult-img">
            <Card.Title>PROF. DR. MOHAMMAD OMAR FARUQ</Card.Title>
            <Card.Text>
              MBBS, FCPS (Medicine), MD, American Board Certified in Internal
              Medicine & Emergency Medicine Chief Consultant, General Intensive
              Care Unit ( G-ICU) & Emergency
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow rounded" style={{ width: "18rem" }}>
          <Card.Img
            className="card-img consult-img"
            style={{ height: "300px" }}
            variant="top"
            src="https://www.uhlbd.com/backend/web/product_uploads/1614502376_2_Shafique%20Sir_Final%20Image-%203Copy.jpg"
          />
          <Card.Body>
            <Card.Title>DR. A. M. SHAFIQUE</Card.Title>
            <Card.Text>MBBS, MD (Cardiology) Consultant</Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow rounded" style={{ width: "18rem" }}>
          <Card.Img
            className="card-img consult-img"
            style={{ height: "300px" }}
            variant="top"
            src="https://www.uhlbd.com/backend/web/product_uploads/1547353344_2_IMG_1119-Edit.jpg"
          />
          <Card.Body>
            <Card.Title>PROF. DR. HAZERA KHATUN</Card.Title>
            <Card.Text>
              MBBS, MCPS (Obstetrics and Gynaecology), MS (Obstetrics and
              Gynaecology) Consultant
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow rounded" style={{ width: "18rem" }}>
          <Card.Img
            className="card-img consult-img"
            style={{ height: "300px" }}
            variant="top"
            src="https://www.uhlbd.com/backend/web/product_uploads/1598681303_2_Dr.%20Amina%20Sultana_ICU_update.jpg"
          />
          <Card.Body>
            <Card.Title>DR. AMINA SULTANA</Card.Title>
            <Card.Text>
              MBBS, MD (critical care medicine) Associate Consultant- ICU &
              Emergency
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Consultants;
