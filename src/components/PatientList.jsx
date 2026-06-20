import React, { useContext } from "react";
import HospitalContext from "../context/HospitalContext";

export default function PatientList() {
  const { patients, dispatch } = useContext(HospitalContext);
  if (patients.length === 0) return <p>No Patients found</p>;
  return (
    <ul>
      {patients.map((p) => (
        <li key={p.id}>
          {p.name}({p.age}yrs)
          <button
            onClick={() => dispatch({ type: "DELETE_PATIENT", payload: p.id })}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
