import React, { useState } from "react";
import UseFetchPatients from "../hooks/UseFetchPatients";

export default function Profile() {
  const [patients, setPatients] = UseFetchPatients();
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const addPatient = () => {
    const newPatient = {
      id: patients.length + 1,
      name: newName,
      email: newEmail,
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(newPatient),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setPatients([...patients, data]));

    setNewName("");
    setNewEmail("");
  };

  const updatePatient = (id) => {
    const updated = {
      ...patients.find((p) => p.id === id),
      name: "Updated Name",
    };

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(updated),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) =>
        setPatients(patients.map((p) => (p.id === id ? data : p))),
      );
  };

  const deletePatient = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => setPatients(patients.filter((p) => p.id !== id)));
  };

  return (
    <div className="profile-container">
      <h1>Patient Profiles</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <button onClick={addPatient}>Add Patient</button>
      </div>

      {patients.length === 0 ? (
        <p>Loading patient data...</p>
      ) : (
        <ul>
          {patients.map((p) => (
            <li key={p.id}>
              {p.name} — {p.email}
              <button
                onClick={() => updatePatient(p.id)}
                className="update-btn"
              >
                Update
              </button>
              <button
                onClick={() => deletePatient(p.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
