import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function General() {
  return (
    <div className="service-section">
      <img
        src="https://smshospitals.in/images/new/Family-Medicine.jpg"
        alt="GeneralMedicine"
        className="service-img"
      />
      <div className="service-text">
        <h2>General Medicine</h2>
        <p>
          General Medicine or Internal Medicine includes a variety of health
          care practices which are holistic evidence based and patient
          centric.Departments deals with various subspecialties and super
          specialities of medicine like Cardiology, Neurology, Nephrology,
          Pulmonology, Bone Surgery and Clinical Care.
        </p>
      </div>
    </div>
  );
}
function Neurology() {
  return (
    <div className="service-section2">
      <img
        src="https://as2.ftcdn.net/v2/jpg/07/40/22/99/1000_F_740229953_qoOnF2Je41qN9ahFDbQbrbvVSrgjiOIB.jpg"
        alt="Neurology"
        className="service-img"
      />
      <div className="service-text2">
        <h2>Neurology and Neurosurgery</h2>
        <p>
          <strong>
            With 35 years of expertise in stroke care Senthil Neuro Hospital
          </strong>
          remains at the forefront of neurological treatment. The hospital
          stroke care unit is equipped with state-of-the-art technology,
          including brain monitoring systems and advanced imaging tools for
          rapid, precise stroke management. Alongside stroke care, the hospital
          specializes in treating conditions like epilepsy, headaches, movement
          disorders, and neuromuscular diseases, supported by a fully functional
          electrophysiology lab and a dedicated neurosonology department.
          offering comprehensive care for neuro and stroke patients across Tamil
          Nadu and beyond. We are the first hospital in Tamilnadu and the fifth
          in the country to get Advanced Stroke Center Accreditation
        </p>
      </div>
    </div>
  );
}
function Cardiology() {
  return (
    <div className="service-section3">
      <img
        src="https://smshospitals.in/images/new/cardio.jpg"
        alt="Cardiology"
        className="service-img"
      />
      <div className="service-text3">
        <h2>Cardiology</h2>
        <p>
          we pride ourselves on being the leading heart care center in Erode.
          Our Department of Interventional Cardiology is dedicated to providing
          exceptional cardiac care using state-of-the-art technology and highly
          skilled medical professionals.
          <strong>
            <li>24/7 Chest Pain Clinic</li>
            <li>Comprehensive Echocardiography (ECHO) Services</li>
            <li>Electrocardiography (ECG) & Treadmill Test (TMT)</li>
            <li>Holter Monitoring for Continuous Heart Assessment</li>
          </strong>
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="services-container">
      <h1>Our Medical Services</h1>
      <nav>
        <Link to="general">General</Link> <Link to="neurology">Neurology</Link>
        <Link to="cardiology">Cardiology</Link>
      </nav>
      <Routes>
        <Route index element={<p>Please select a service above.</p>}></Route>
        <Route path="general" element={<General />}></Route>
        <Route path="neurology" element={<Neurology />}></Route>
        <Route path="cardiology" element={<Cardiology />}></Route>
      </Routes>
    </div>
  );
}
