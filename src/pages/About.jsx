import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <h1>Welcome to Senthil Multispeciality Hospital</h1>
      <p>
        <strong>
          37 Years of Excellence in stroke care Welcome to Senthil
          Multi-Speciality Hospital,
        </strong>
        a leading multi-specialty hospital dedicated to providing world-class
        neurological care and comprehensive medical services. We are committed
        to improve the health and well-being of patients by combining
        cutting-edge technology with a patient-centered approach. With over 37
        years of dedicated service in neuro health care, our hospital stands at
        the forefront of neurological treatment and research. Our commitment to
        providing world-class care has earned us a reputation for excellence in
        diagnosing and treating complex neurological conditions. Together, we
        strive to provide the best possible care for your neurological and
        medical needs.
      </p>
      <div className="about-content">
        <img
          src="https://smshospitals.in/images/senthil-front.jpeg"
          alt="HospitalBuilding"
          className="hospital-img"
        />
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            To deliver compassionate, affordable, and quality healthcare to all
            patients. We believe in treating every patient with dignity and
            care.
          </p>
        </div>

        <p>37 Years of Excellence in Stroke care.</p>
      </div>
    </div>
  );
}
