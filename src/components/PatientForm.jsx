import React, { useContext, useRef, useState } from "react";
import HospitalContext from "../context/HospitalContext";

export default function PatientForm() {
  const { dispatch } = useContext(HospitalContext);
  const [name, setname] = useState("");
  const [age, setAge] = useState("");
  const inputref = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name || !age) {
      alert("All fields required!");
      inputRef.current.focus();
      return;
    }
    dispatch({ type: "ADD_PATIENT", payload: { id: Date.now(), name, age } });
    setName("");
    setAge("");
  };
  return (
    <form onSubmit={handlesubmit}>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Patient Name"
      />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <button type="submit">Add Patient</button>
    </form>
  );
}
